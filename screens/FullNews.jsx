import React from 'react'
import { useRoute } from '@react-navigation/native'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity
} from 'react-native'

function FullNews() {
  const route = useRoute()
  const { title, sourceName, publishedAt, urlToImage, content, url } =
    route.params
  const openURL = () => {
    Linking.openURL(url)
  }

  return (
    <View style={styles.card}>
      <Image source={{ uri: urlToImage }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.source}>source : {sourceName}</Text>
        <TouchableOpacity onPress={openURL}>
          <Text>{content}</Text>
        </TouchableOpacity>
        <Text style={styles.publishedAt}>{publishedAt}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FDF5E6',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5
  },
  textContainer: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  source: {
    fontSize: 14,
    color: 'gray'
  },
  publishedAt: {
    fontSize: 12,
    color: 'gray'
  }
})

export default FullNews
