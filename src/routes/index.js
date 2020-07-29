import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

/** screens */
import HomeScreen from '../screens/Home/Index'
import DetailsScreen from '../screens/Details/Index'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={HomeScreen}
          options={{ title: 'Películas' }}
        />
        <Stack.Screen 
          name='Details'
          component={DetailsScreen}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
