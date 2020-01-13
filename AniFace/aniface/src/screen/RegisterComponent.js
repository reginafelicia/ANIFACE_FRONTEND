import { StyleSheet, Text, TextInput, View, Keyboard, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Dimensions, StatusBar, SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Header } from 'native-base';
const { height } = Dimensions.get('window')
export default class Register extends Component {
 state = {
   screenHeight: 0,
 };
 onContentSizeChange = (contentWidth, contentHeight) => {
   this.setState({ screenHeight: contentHeight });
 };
 submit() {
  let collection = {}
     collection.email = this.state.email.toLowerCase(),
     collection.password = this.state.password
   console.warn = (collection);
   console.log(collection);
   var url = 'http://35.186.155.113:5000/createUsers';
   fetch(url, {
     method: 'POST',
     body: JSON.stringify(collection),
     headers: new Headers({
       'Content-Type': 'application/json'
     })
   }).then(res => res.json())
     .catch(error => console.error('Error: ', error))
     .then(response => {
       console.log('Success: ', response)
       if (response.message == 'Congrats, Users has been registered!') {
        alert(response.message)
        this.props.navigation.navigate('CheckAnimalFaceComponent',
        {email: collection.email});
       }
       else { alert(response.message) }
     });
 }
 constructor(props) {
   super(props);
   this.state = {
     email: '',
     password: '',
   };
 }
 render() {
   const scrollEnabled = this.state.screenHeight > height;
   return (
     <KeyboardAvoidingView behavior="padding" style={styles.form}>
       <TouchableWithoutFeedback onPress={Keyboard.dismiss} alert={"dismissed"}>
         <SafeAreaView style={styles.container}>
           <StatusBar barStyle="light-content" backgroundColor="#468189" />
           <ScrollView
             style={{ flex: 1 }}
             contentContainerStyle={styles.scrollView}
             scrollEnabled={scrollEnabled}
           >
             <View style={styles.content}>
               {this.props.children}
             </View>
           </ScrollView>
         </SafeAreaView>
         <Image source={require('../assets/logo_transparent.png')} style={styles.logo} />
         <Text style={styles.text}>Email</Text>
         <TextInput
           value={this.state.email}
           onChangeText={(email) => this.setState({ email })}
           placeholder={'Input your email'}
           style={styles.input}
         />
         <Text style={styles.text}>Password</Text>
         <TextInput
           value={this.state.password}
           onChangeText={(password) => this.setState({ password })}
           placeholder={'Input your password'}
           secureTextEntry={true}
           style={styles.input}
         />
       </TouchableWithoutFeedback>
       <TouchableOpacity
         style={styles.customBtnBG}
         onPress={() => this.submit()
           // this.props.navigation.navigate('CheckAnimalFaceComponent')
         }  >
         <Text style={styles.customBtnText}>Submit!</Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.customBtnBack}
         onPress={() => this.props.navigation.navigate('LoginComponent')}>
         <Image source={require('../assets/back.png')} style={styles.arrowBack} />
       </TouchableOpacity>
     </KeyboardAvoidingView>
   );
 }
}

const styles = StyleSheet.create({
  arrowBack: {
    width: 30,
    height: 30,
    top: '5%',
    left: '5%',
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
  customBtnBack: {
    position: 'absolute',
    top: '5%',
    left: '5%',
    width: 30,
    height: 30,
    // backgroundColor: 'white',
  },
  imageBG: {
    width: '100%',
    height: '100%',
  },
  logo: {
    marginTop: '5%',
    width: '80%',
    height: '20%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginTop: '5%',
    color: '#707070',
    marginLeft: '9%',
    // alignSelf: 'center',
    // width: 200,
    // height: 44,
  },
  input: {
    marginTop: hp('2%'),
    width: wp('90%'),
    height: hp('5%'),
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    borderRadius: 15,
  },
  customBtnText: {
    marginTop: 5,
    color: '#707070',
    fontSize: 30,
    fontWeight: '400',
    color: "white",
    alignSelf: 'center',
  },
  customBtnBG: {
    marginBottom: '10%',
    backgroundColor: "#FFC045",
    borderColor: 'black',
    width: 225,
    height: 60,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30,
    alignSelf: 'center',
  }


});