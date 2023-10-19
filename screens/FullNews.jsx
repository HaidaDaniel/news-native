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
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: urlToImage }}
          style={styles.image}
          resizeMode='stretch'
        />
      </View>
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
    width: '98%',
    height: '95%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    backgroundColor: '#FDF5E6',
    margin: 3,
    padding: 5,
    borderWidth: 1,
    borderColor: 'fff',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2
  },
  imgContainer: {
    width: '100%'
  },
  image: {
    width: '100%',
    height: 200
  },
  textContainer: {
    flex: 1,
    marginTop: 10
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
