import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import FullNews from './FullNews'
import Home from './Home'

const Stack = createStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F07427'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'News' }}
        />
        <Stack.Screen
          name='News Post'
          component={FullNews}
          options={{ title: 'Post' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
