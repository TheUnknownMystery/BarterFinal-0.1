import { createDrawerNavigator } from 'react-navigation-drawer'
import { BottomTab } from './AppNavigator'
import SideDrawer from './SideDrawer'
import login from '../Screens/Logins'
import Settings from '../Screens/Settings'


export const AppDrawer = createDrawerNavigator(
 {

  Home: {

   screen: BottomTab,

  },


  Settings: {

  screen: Settings

  },
 },
 {
  contentComponent: SideDrawer

 },
 {


  initialRouteName: 'Home'

 },

)

