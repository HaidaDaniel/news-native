/** @format */
import { StyleSheet, Text, View } from 'react-native'
import NewsList from './components/NewsList'

export default function App() {
  return (
    <View style={styles.container}>
      <NewsList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EAD6',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
