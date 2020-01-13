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
                            onPress={() => this.props.navigation.navigate('CheckAnimalFaceComponent')}  >
                            <Image source={require('../assets/back.png')}/>
                        </TouchableOpacity>
                    <Text style = {styles.header}>AniFact</Text>
                </View>
                <Text style = {styles.content}>Find out which animal face types suit your preferences as well as which category your favorite stars belong to.</Text>
                <View style = {styles.Animal}>
                    <View style = {styles.BoxCat}>
                        <TouchableOpacity
                                style={styles.cat}
                                onPress={() => this.props.navigation.navigate('Cat')}  >
                                <Image source={require('../assets/cat.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtCat}>Cat</Text>
                    </View>
                    <View style = {styles.BoxChimpanzee}>
                        <TouchableOpacity
                                style={styles.Chimpanzee}
                                onPress={() => this.props.navigation.navigate('Chimpanzee')}  >
                                <Image source={require('../assets/chimpanzee.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtChimpanzee}>Chimpanzee</Text>
                    </View>
                    <View style = {styles.BoxDog}>
                        <TouchableOpacity
                                style={styles.Dog}
                                onPress={() => this.props.navigation.navigate('Dog')}  >
                                <Image source={require('../assets/dog.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtDog}>Dog</Text>
                    </View>
                </View>
                <View style = {styles.Animal}>
                    <View style = {styles.BoxFox}>
                        <TouchableOpacity
                                style={styles.Fox}
                                onPress={() => this.props.navigation.navigate('Fox')}  >
                                <Image source={require('../assets/fox.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtFox}>Fox</Text>
                    </View>
                    <View style = {styles.BoxGorilla}>
                        <TouchableOpacity
                                style={styles.Gorilla}
                                onPress={() => this.props.navigation.navigate('Gorilla')}  >
                                <Image source={require('../assets/gorilla.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtGorilla}>Gorilla</Text>
                    </View>
                    <View style = {styles.BoxHamster}>
                        <TouchableOpacity
                                style={styles.Hamster}
                                onPress={() => this.props.navigation.navigate('Hamster')}  >
                                <Image source={require('../assets/hamster.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtHamster}>Hamster</Text>
                    </View>
                </View>
                <View style = {styles.Animal}>
                    <View style = {styles.BoxAn}>
                        <TouchableOpacity
                                style={styles.Ani}
                                onPress={() => this.props.navigation.navigate('Horse')}  >
                                <Image source={require('../assets/horse.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtAni}>Horse</Text>
                    </View>
                    <View style = {styles.BoxAn}>
                        <TouchableOpacity
                                style={styles.Ani}
                                onPress={() => this.props.navigation.navigate('Koala')}  >
                                <Image source={require('../assets/koala.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtAni}>Koala</Text>
                    </View>
                    <View style = {styles.BoxAn}>
                        <TouchableOpacity
                                style={styles.Ani}
                                onPress={() => this.props.navigation.navigate('Lion')}  >
                                <Image source={require('../assets/lion.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtAni}>Lion</Text>
                    </View>
                </View>
                <View style = {styles.BoxAn}>
                        <TouchableOpacity
                                style={styles.Ani}
                                onPress={() => this.props.navigation.navigate('Panda')}  >
                                <Image source={require('../assets/panda.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtAni}>Panda</Text>
                    </View>
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
        top:hp('10%'),
        height:hp('12%'),
        width:wp('80%'),
        fontSize:20,
        textAlign:'center',
        color:'#707070',
    },
    
    Animal:{
        flexDirection:'row',
    },

    BoxCat:{
        top:hp('10%'),
        flexDirection:'column',
        // backgroundColor:'red',
        padding:15,
    },

    txtCat:{
        fontSize:15,
        color:'#FFC045',
        fontWeight:'bold',
        textAlign:'center'
    },
     
    BoxChimpanzee:{
        top:hp('10%'),
        flexDirection:'column',
        padding:15,
        // backgroundColor:'red',
        alignItems:'center'
    },

    
    txtChimpanzee:{
        fontSize:15,
        color:'#FFC045',
        fontWeight:'bold',
        textAlign:'center'
    },
    
    BoxDog:{
        top:hp('10%'),
        flexDirection:'column',
        // backgroundColor:'red',
        padding:15,
    
    },

    txtDog:{
        fontSize:15,
        color:'#FFC045',
        fontWeight:'bold',
        textAlign:'center'
    },

    BoxFox:{
        top:hp('10%'),
        flexDirection:'column',
        // backgroundColor:'red',
        padding:15,
    
    },

    txtFox:{
        fontSize:15,
        color:'#FFC045',
        fontWeight:'bold',
        textAlign:'center'
    },

    BoxGorilla:{
        top:hp('10%'),
        flexDirection:'column',
        // backgroundColor:'red',
        padding:15,
    
    },

    txtGorilla:{
        fontSize:15,
        color:'#FFC045',
        fontWeight:'bold',
        textAlign:'center'
    },

    BoxHamster:{
        top:hp('10%'),
        flexDirection:'column',
        // backgroundColor:'red',
        padding:15,
    
    },

    txtHamster:{
        fontSize:15,
        color:'#FFC045',
        fontWeight:'bold',
        textAlign:'center'
    },

    BoxAn:{
        top:hp('10%'),
        flexDirection:'column',
        // backgroundColor:'red',
        padding:15,
    
    },
    
    txtAni:{
        fontSize:15,
        color:'#FFC045',
        fontWeight:'bold',
        textAlign:'center'
    }
    
});