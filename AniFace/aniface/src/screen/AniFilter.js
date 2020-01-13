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
                    <Text style = {styles.header}>AniFilter</Text>
                </View>
                <View style = {styles.Animal}>
                    <View style = {styles.BoxAn}>
                        <TouchableOpacity
                                style={styles.Ani}
                                onPress={() => this.props.navigation.navigate('test')}  >
                                <Image source={require('../assets/cat.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtAni}>Cat</Text>
                    </View>
                    <View style = {styles.BoxAn}>
                        <TouchableOpacity
                                style={styles.Ani}
                                onPress={() => this.props.navigation.navigate('ChimpanzeeFilter')}  >
                                <Image source={require('../assets/chimpanzee.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtAni}>Chimpanzee</Text>
                    </View>
                    <View style = {styles.BoxAn}>
                        <TouchableOpacity
                                style={styles.Ani}
                                onPress={() => this.props.navigation.navigate('DogFilter')}  >
                                <Image source={require('../assets/dog.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtAni}>Dog</Text>
                    </View>
                </View>
                <View style = {styles.Animal}>
                    <View style = {styles.BoxAn}>
                        <TouchableOpacity
                                style={styles.Ani}
                                onPress={() => this.props.navigation.navigate('FoxFilter')}  >
                                <Image source={require('../assets/fox.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtAni}>Fox</Text>
                    </View>
                    <View style = {styles.BoxAn}>
                        <TouchableOpacity
                                style={styles.Ani}
                                onPress={() => this.props.navigation.navigate('GorillaFilter')}  >
                                <Image source={require('../assets/gorilla.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtAni}>Gorilla</Text>
                    </View>
                    <View style = {styles.BoxAn}>
                        <TouchableOpacity
                                style={styles.Ani}
                                onPress={() => this.props.navigation.navigate('HamsterFilter')}  >
                                <Image source={require('../assets/hamster.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtAni}>Hamster</Text>
                    </View>
                </View>
                <View style = {styles.Animal}>
                    <View style = {styles.BoxAn}>
                        <TouchableOpacity
                                style={styles.Ani}
                                onPress={() => this.props.navigation.navigate('HorseFilter')}  >
                                <Image source={require('../assets/horse.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtAni}>Horse</Text>
                    </View>
                    <View style = {styles.BoxAn}>
                        <TouchableOpacity
                                style={styles.Ani}
                                onPress={() => this.props.navigation.navigate('KoalaFilter')}  >
                                <Image source={require('../assets/koala.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtAni}>Koala</Text>
                    </View>
                    <View style = {styles.BoxAn}>
                        <TouchableOpacity
                                style={styles.Ani}
                                onPress={() => this.props.navigation.navigate('LionFilter')}  >
                                <Image source={require('../assets/lion.png')}/>
                            </TouchableOpacity>
                        <Text style = {styles.txtAni}>Lion</Text>
                    </View>
                </View>
                <View style = {styles.BoxAn}>
                        <TouchableOpacity
                                style={styles.Ani}
                                onPress={() => this.props.navigation.navigate('PandaFilter')}  >
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
        height:hp('5%'),
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
        top:hp('12%'),
        height:hp('10%'),
        width:wp('80%'),
        fontSize:20,
        textAlign:'center',
        color:'#707070',
    },
    
    Animal:{
        flexDirection:'row'
    },

    BoxAn:{
        top:hp('20%'),
        flexDirection:'column',
        // backgroundColor:'red',
        padding:15,
        alignItems:'center'
    
    },
    
    txtAni:{
        fontSize:15,
        color:'#FFC045',
        fontWeight:'bold',
        textAlign:'center'
    }
    
});