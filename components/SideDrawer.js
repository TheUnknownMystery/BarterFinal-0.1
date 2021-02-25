import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'
import firebase from 'firebase'
import db from '../config'
export default class SideDrawer extends React.Component {
 render() {
  return (

   <View style={{ flex: 1 }}>
    <View style={{ flex: 0.8 }}>

     <DrawerItems {...this.props} />

     <TouchableOpacity onPress={() => {

     this.props.navigation.navigate("LoginScreen")
     firebase.auth().signOut()
   
     }} >

      <Text style={{ fontWeight: 'bold', marginTop: 540, marginLeft: 10 }}>Login</Text>

     </TouchableOpacity>
    </View>
   </View>

  )
 }
}