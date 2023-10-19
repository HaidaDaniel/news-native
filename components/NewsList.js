import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { fetchTopNewsInUSA } from '../api'
import { FormatDate } from '../helpers/FormatDate'
import NewsCard from './NewsCard'

export default function NewsList() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)
  async function fetchData() {
    try {
      setLoading(true)
      const response = await fetchTopNewsInUSA()
      setNews(response.data.articles)
      setLoading(false)
    } catch (error) {
      console.error('Error', error)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  const navigation = useNavigation()

  const handleNewsCardPress = (item) => {
    navigation.navigate('News Post', {
      title: item.title,
      sourceName: item.source?.name,
      publishedAt: FormatDate(item.publishedAt),
      urlToImage: item.urlToImage,
      content: item.content,
      url: item.url
    })
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <View>
          <ActivityIndicator
            size='large'
            color='#0000ff'
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          />
        </View>
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={fetchData} />
          }
          data={news}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleNewsCardPress(item)}>
              <NewsCard
                title={item.title}
                sourceName={item.source.name}
                publishedAt={FormatDate(item.publishedAt)}
                urlToImage={item.urlToImage}
              />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 3
  }
})
