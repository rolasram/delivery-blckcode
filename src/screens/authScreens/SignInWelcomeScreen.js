import React,{useState,useRef} from "react";

import {View, Text, StyleSheet, Dimensions, TextInput, Image} from 'react-native'
import {colors, parameters, title} from "../../global/styles"
import * as Animatable from 'react-native-animatable'

import Swiper from 'react-native-swiper'

import {Icon, Button, SocialIcon} from 'react-native-elements'

export default function SignInWelcomeScreen({navigation}){
    return(
        <View style = {{flex:1}}>
            <View style = {{flex:3, justifyContent: 'flex-start', alignItems: 'center', paddingTop:20}}>
                <Text style={{fontSize: 26, color:colors.buttons, fontWeight:'bold', marginTop:15}}>DISCOVER RESTAURANT</Text>
                <Text style={{fontSize: 26, color:colors.buttons, fontWeight:'bold'}}>IN YOUR AREA</Text>
            </View>

            <View style = {{flex:4, justifyContent:"center"}}>
                <Swiper autoplay={true}>
                    <View style = {styles.slide1}>
                        <Image
                            //source = {{uri:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"}}
                            source = {{uri:"https://cdn.sanity.io/images/jsdrzfkj/production-esmx/4c2dea67a47f010bbbc1ee4136a53e39695ed8dd-2000x1333.jpg?w=800&h=533&fit=crop&fm=webp"}}
                            style = {{height: "100%", width: "100%"}}
                        />
                    </View>

                    <View style = {styles.slide2}>
                        <Image
                            //source = {{uri:"https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"}}
                            source = {{uri:"https://4.bp.blogspot.com/-cq4vsx_9pJw/W5RMQy63qRI/AAAAAAAAAFo/IdftQKr-lKsx7RQhFJBqdyLN-A2vciViACLcBGAs/s1600/Tacos%2Bmexicanos.jpg"}}
                            style = {{height: "100%", width: "100%"}}
                        />
                    </View>

                    <View style = {styles.slide3}>
                        <Image
                            //source = {{uri:"https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"}}
                            source = {{uri:"https://media.istockphoto.com/id/1158156755/es/foto/baquetas-de-pollo-crujientes-al-estilo-kfc-a-la-parrilla-con-galletas.jpg?b=1&s=170667a&w=0&k=20&c=P6_4wntCSZW4NAPIf6Bt1nOzfsjD4BhjclQmjL6Rr5k="}}
                            style = {{height: "100%", width: "100%"}}
                        />
                    </View>

                    <View style = {styles.slide4}>
                        <Image
                            //source = {{uri:"https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png"}}
                            source = {{uri:"https://thumbs.dreamstime.com/b/pizza-hawaiana-49611709.jpg"}}
                            style = {{height: "100%", width: "100%"}}
                        />
                    </View>

                </Swiper>
            </View>

            <View style={{flex:4, justifyContent:"flex-end", marginBottom:20}}>
                <View style = {{marginHorizontal:20, marginTop:30}}>
                    <Button
                        title = "SIGN IN"
                        buttonStyle = {parameters.styledButton}
                        titleStyle = {parameters.buttonTitle}
                        onPress = {()=>{
                            navigation.navigate("SignInScreen")
                        }}
                    />
                </View>

                <View style = {{marginHorizontal:20, marginTop:30}}>
                    <Button 
                        title = "Create an account"
                        buttonStyle = {styles.createButton}
                        titleStyle = {styles.createButtonTitle}
                    />
                </View>

            </View>
        </View>



    )

}

const styles = StyleSheet.create({
    slide1:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    createButton:{
        backgroundColor:"white",
        alignContent: "center",
        justifyContent:"center",
        borderRadius: 12,
        borderWidth:1,
        borderColor: "#ff8c52",
        height: 50,
        paddingHorizontal: 20,
        borderColor:colors.grey1
    },

    createButtonTitle:{
        color:colors.grey1,
        fontSize: 20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    },


})