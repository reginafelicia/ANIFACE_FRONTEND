import { StyleSheet, Text, TextInput, View, ImageBackground, Image, TouchableOpacity, Keyboard } from 'react-native';
import React from 'react';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
// for making responsive screen

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Content } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      verification: null,
    };
  }
  componentDidMount() {
    this.getPermissionAsync();
  }
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status1 } = await Permissions.askAsync(Permissions.CAMERA);
      const { status2 } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    }
  }

  verify() {
    let collection = {}
    
    collection.email = this.state.email.toLowerCase(),
    collection.password = this.state.password
    console.warn = (collection);
    console.log(collection);
    var url = 'http://35.186.155.113:5000/loginApp';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(collection),
      headers:new Headers({
        'Content-Type':'application/json'
      })
    }).then(res => res.json())
      .catch(error => console.error('Error: ', error))
      .then(res => {
        console.log('Success: ', res)
        if(res.message == 'Login successful!'){
          this.props.navigation.navigate('CheckAnimalFaceComponent',
          {email: collection.email});
        } else {alert(res.message)}
    }
    )


  }


  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        enableOnAndroid={true}
        extraScrollHeight={hp("25%")} //To push things up
      >
        <View style={styles.container}>
          <ImageBackground style={styles.imageBG} onPress={Keyboard.dismiss} alert={"dismissed"}>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <Image source={require('../assets/logo_transparent.png')} style={styles.logo} />

              <View style={styles.rectangle}>
                <Text style={styles.textsignin}>SIGN IN TO YOUR ACCOUNT</Text>
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
                <Content>
                  <Text
                    onPress={() => this.props.navigation.navigate('RegisterComponent')}
                    style={styles.textreg} >
                    Don't have an account? Register Here!
              </Text>

                  <TouchableOpacity
                    style={styles.customBtnBG}
                    onPress={() => this.verify()
                    // this.props.navigation.navigate('CheckAnimalFaceComponent')
                    }>
                    <Text style={styles.customBtnText}>Sign In</Text>
                  </TouchableOpacity>

                  <Text
                    onPress={() => this.props.navigation.navigate('ChangePass')}
                    style={styles.textforgot} >
                    Forgot Password
              </Text>

                  {/* <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}
                disabled={this.state.isSigninInProgress} 
              /> */}
                </Content>
              </View>
            </TouchableWithoutFeedback>
          </ImageBackground>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  rectangle: {
    width: wp('80%'),
    height: hp('60%'),
    backgroundColor: 'white',
    marginHorizontal: wp('10%'),
    marginVertical: hp('5%'),
    borderWidth: 1,
    borderRadius: 30,
    // position: 'absolute',
    // top: '35%',
    // left: '10%',
  },
  imageBG: {
    width: wp('100%'),
    height: hp('100%'),
    // position: 'absolute',
  },
  logo: {
    marginTop: hp('10%'),
    width: wp('80%'),
    height: hp('20%'),
    resizeMode: 'contain',
    alignSelf: 'center',
    // position: 'absolute',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: '5%',
    fontSize: 15,
    color: 'gray',
    marginLeft: '9%',
    // position: 'absolute',
    // alignSelf: 'center',
    // width: 200,
    // height: 44,
    // backgroundColor: 'white',
  },
  input: {
    marginTop: '5%',
    width: 280,
    height: 44,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    alignSelf: 'center',
    borderRadius: 12,
    // position: 'absolute',
  },
  customBtnText: {
    // fontSize: '20%',
    fontWeight: '400',
    color: "#707070",
    alignSelf: 'center',
    marginTop: '5%',
    //position: 'center',
  },
  customBtnBG: {
    marginTop: '5%',
    backgroundColor: "#FFC045",
    width: 225,
    height: 40,
    paddingHorizontal: 30,
    paddingVertical: 0,
    borderRadius: 15,
    alignSelf: 'center',
    // position: 'absolute',
  },
  textreg: {
    marginTop: '5%',
    fontSize: 15,
    color: "gray",
    alignSelf: 'center',
    textDecorationLine: 'underline',
    // position: 'absolute',
  },
  textsignin: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: '10%'
    // position: 'absolute',
  },
  textforgot: {
    marginTop: '5%',
    fontSize: 15,
    color: "gray",
    alignSelf: 'center',
    textDecorationLine: 'underline',
    // position: 'absolute',
  }
});