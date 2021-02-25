import * as React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default class Settings extends React.Component {
 render() {
  return (

   <View style={{ alignSelf: 'center' , borderWidth: 3 }}>

    <TextInput

     placeholder='FirstName'
     style={styles.TextInputStyle}
    />
    <TextInput

     placeholder='SecondName'
     style={styles.TextInputStyle}
    />

    <TextInput

     placeholder='Address'
     style={styles.TextInputStyle}

    />


    <TextInput

     placeholder='Contact Number'
     style={styles.TextInputStyle}

    />
   </View>

  )
 }
}

const styles = StyleSheet.create({


 TextInputStyle: {

  alignSelf: 'center',
  borderBottomWidth: 1.0,
  width: "300%",
  marginTop: 100
  

 }



})