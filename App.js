import React from 'react'
import { View, Text } from 'react-native'
import StockData from './component/StockData'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from './component/Splash'

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{flex: 2}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash} options={{
            headerShown: false
          }} />
          <Stack.Screen name="Stock" component={StockData} options={{
            headerShown: false
          }} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <StockData ticker = "aapl"/> */}
    </View>
  )
}
