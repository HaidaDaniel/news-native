import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

function NewsCard({ title, sourceName, publishedAt, urlToImage }) {
  return (
    <View style={styles.card}>
      <View style={styles.leftBox}>
        <Image source={{ uri: urlToImage }} style={styles.image} />
        <Text>{publishedAt}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FDF5E6',
    minWidth: 285,
    width: '100%',
    padding: 10,
    marginVertical: 10,
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
  leftBox: {
    width: 80,
    marginRight: 8
  }
})

export default NewsCard
