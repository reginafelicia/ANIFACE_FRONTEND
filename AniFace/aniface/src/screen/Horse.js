import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ImageBackground, TouchableNativeFeedback, Image, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
      }
    render(){
        return ( 
            <View style = { styles.container } >
                <View style = {styles.head}>
                    <TouchableOpacity
                            style={styles.back}
                            onPress={() => this.props.navigation.navigate('AniFact')}  >
                            <Image source={require('../assets/back.png')}/>
                        </TouchableOpacity>
                    <Text style = {styles.header}>Horse Type</Text>
                </View>
                    <Text style = {styles.content}>This type has a long face and sometimes also has a long nose. People with this face are Energetic, Passionate, Upright, Aspirant they are always having personality traits like being warm-hearted, enthusiastic, and positive.</Text>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },

    header:{
        color:'#0A91AB',
        textAlign: 'center',
        fontSize:41,
        height:hp('10%'),
        width:wp('80%'),
        top:hp('8%'),
        left:wp('-5%'),
        fontWeight:'bold',
        // backgroundColor:'red'
    },

    head:{
        flexDirection:'row'
    },
    
    back:{
        top:hp('8%'),
        margin:hp('2%')
    },

    content:{
        // backgroundColor:'red',
        top:hp('15%'),
        height:hp('50%'),
        width:wp('80%'),
        fontSize:20,
        textAlign:'center',
        color:'#707070',
    },
   
    
});