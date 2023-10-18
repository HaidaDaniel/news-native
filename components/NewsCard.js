/** @format */

import { View, Text, StyleSheet } from 'react-native'

function NewsCard({ title, sourceName }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.source}>{sourceName}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  source: {
    fontSize: 14,
    color: 'gray',
  },
})

export default NewsCard
