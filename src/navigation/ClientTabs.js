import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {colors} from '../global/styles'
import {Icon} from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyAccountScreen from '../screens/MyAccountScreen';

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs(){
    return(
        //Barra inferior que contiene opciones
        <ClientTabs.Navigator
            screenOptions= {{
                //asigna el color de los iconos
                tabBarActiveTintColor: colors.buttons
            }}
        >
            <ClientTabs.Screen
                name="HomeScree"
                component={HomeScreen}
                options = {
                    {
                        tabBarLabel : "Home",
                        tabBarIcon : ({color,size})=>(
                            <Icon
                                name='home'
                                type='material'
                                color={color}
                                size={size}
                            />
                        ),
                        //headerShown en false se quita lo que se declaro en name en la parte superior de la pantalla
                        headerShown: false
                    }
                }
                

            />

            <ClientTabs.Screen
                name="Search"
                component={SearchScreen}
                options = {
                    {
                        tabBarLabel : "Search",
                        tabBarIcon : ({color,size})=>(
                            <Icon
                                name='search'
                                type='material'
                                color={color}
                                size={size}
                            />
                        ),
                        //headerShown en false se quita lo que se declaro en name en la parte superior de la pantalla
                        headerShown: false
                    }
                }

            />

            <ClientTabs.Screen
                name="MyOrdersScreen"
                component={MyOrdersScreen}
                options = {
                    {
                        tabBarLabel : "My Orders",
                        tabBarIcon : ({color,size})=>(
                            <Icon
                                name='view-list'
                                type='material'
                                color={color}
                                size={size}
                            />
                        ),
                        //headerShown en false se quita lo que se declaro en name en la parte superior de la pantalla
                        headerShown: false
                    }
                }
            />

            <ClientTabs.Screen
                name="MyAccount"
                component={MyAccountScreen}
                options = {
                    {
                        tabBarLabel : "My Account",
                        tabBarIcon : ({color,size})=>(
                            <Icon
                                name='person'
                                type='material'
                                color={color}
                                size={size}
                            />
                        ),
                        //headerShown en false se quita lo que se declaro en name en la parte superior de la pantalla
                        headerShown: false
                    }
                }
            />
            
        </ClientTabs.Navigator>
    )
}