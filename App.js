/** @format */
import { StatusBar, StyleSheet, View } from 'react-native'
import Navigation from './screens/Navigation'

export default function App() {
  return <Navigation />
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: '#F0EAD6',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
