import * as React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from '../Screens/Home'
import Exchange from '../Screens/Exchange'

export const BottomTab = createBottomTabNavigator(
 {

  HomePage: {

   screen: Home,

   navigationOptions: {
    tabBarIcon: <Image

     style={{ width: 20, height: 20 }}
     source={require('../assets/Home.png')}

    />,

    tabBarLabel: 'HomePage'
   }
  },
  ExchangePage: {

   screen: Exchange,

   navigationOptions: {
    tabBarIcon: <Image
    
     style={{ width: 20, height: 20 }}
     source={require('../assets/E.png')}

    />,
    tabBarLabel: 'ExchangePage'
   }
  },
 },
 {
  
 })