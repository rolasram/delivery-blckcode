import React from 'react'

import {View, Text, StyleSheet} from 'react-native'
import {Icon, withBadge} from 'react-native-elements'
import {colors,parameters} from '../global/styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeHeader(){

const BadgeIcon = withBadge(3)(MaterialCommunityIcons)


    return(
        <View style = {styles.header}>
            <View style = {{alignItems:"center", justifyContent:"center", marginLeft:15}}>
                <MaterialCommunityIcons
                    type = "material-community"
                    name = "menu"
                    color = {colors.cardbackground}
                    size = {32}
                />

            </View>

            <View style = {{alignItems:"center", justifyContent:"center"}}>
                <Text style={{color:colors.cardbackground, fontSize:25, fontWeight:'bold'}}>Xpress Food</Text>
            </View>

            <View style = {{alignItems:"center", justifyContent:"center", marginRight:25}}>
                <BadgeIcon 
                    type = "material-community"
                    name = "cart"
                    size={35}
                    color = {colors.cardbackground}

                />
            </View>

        </View>        
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor:colors.buttons,
        height: parameters.headerHeight,
        justifyContent:'space-between'
    }

})