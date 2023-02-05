import React from 'react'

import{View, Text, StyleSheet, StatusBar} from 'react-native'
import {colors} from './src/global/styles'
import RootNavigator from './src/navigation/RootNavigator'
import SignInScreen from './src/screens/authScreens/SignInScreen'



export default function App(){
  return(
    <View style = {styles.container}>
      <StatusBar
        barStyle = "light-content"
        //cambia coor de la barra de notificaiones
        backgroundColor = {colors.statusbar}
      />

      <RootNavigator/>
    
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})