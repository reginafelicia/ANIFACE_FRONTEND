import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default class App extends React.Component {
  // onPress = () =>{
  //   count: this.state.count+1
  // } // NO USAGE AS OF YET
  
  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
        enableOnAndroid={true}
        extraScrollHeight={hp("25%")} //To push things up
      >
        <Image style={{ width: wp("73%") }}
          source={require('../assets/logo_transparent.png')}
        />
        <TextInput
          style={styles.TextInputStyle} // ref to bottom
          returnKeyType={"next"}
          onSubmitEditing={() => { this.secondTextInput.focus() }}
          placeholder='email'
        />
        <TextInput
          ref={(input) => { this.secondTextInput = input; }} //reference from the previous input
          style={styles.TextInputStyle}
          onSubmitEditing={() => { this.thirdTextInput.focus() }}
          placeholder='new password'
          secureTextEntry={true} //To hide text input
        />
        <TextInput
          ref={(input) => { this.thirdTextInput = input; }}
          style={styles.TextInputStyle}
          placeholder='confirm new password'
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.TouchStyle}
          // onPress={this.onPress} //NO USAGE AS OF YET
        >
          <Text
            style={styles.TextStyle}
          >Change Password
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  TextInputStyle: {
    textAlign: 'center',
    height: hp('5.7%'),
    width: wp('73%'),
    marginBottom: hp('3.15%'),
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 15
  },

  TouchStyle:{
    alignItems: 'center',
    backgroundColor: '#FFC045',
    height: hp('5.7%'),
    width: wp('73%'),
    borderColor: '#FFC045',
    borderWidth: 1,
    borderRadius: 15
  },
  
  TextStyle:{
    paddingVertical: 8,
    textAlign:'left',
    color:'#707070',
  }
});
