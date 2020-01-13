import React, { Component } from 'react';
import { BackHandler,ToastAndroid,ActivityIndicator, Button, Clipboard, Image, Share, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
let backPressed = 0;

export default class App extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
  }
  handleBackButton() {
    if (backPressed > 0) {
      BackHandler.exitApp();
      backPressed = 0;
    } else {
      backPressed++;
      ToastAndroid.show("Press Again To Exit", ToastAndroid.SHORT);
      setTimeout(() => { backPressed = 0 }, 2000);
      return true;
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.navigation.getParam("email",null),
      image: null,
      uploading: null,
      responseResult: "unknown",
      responded:null,
      backPressed: 1
    }
  }
  
  render() {
    let { image} = this.state;
    let {responseResult} = this.state;
    let {responded} = this.state;
    let text;
    if (responseResult == 'Cat') {
        text = 'Cat type faces have sharper features, typically with cat-like eyes. They have rounder and larger eyes than fox types.'
      } else if(responseResult == 'Fox') {
        text = 'This type looks similar to cat types. However, their eyes are slightly more narrow and slanted upwards'
      }else if(responseResult == 'Dog'){
        text = 'People with this face type have innocent, kind eyes and bright smiles.'
      }else if(responseResult == 'Panda'){
        text = 'People with this face type are quiet, collected, and focused'
      }else if(responseResult == 'Gorilla'){
        text = 'People with this face type are defined by their big energy.They are show-stealers by design: outgoing, energetic, and clever.'
      }else if(responseResult == 'Hamster'){
        text = 'People with this face type are naturally nocturnal, so they sleep during the day and they\'re active at night'
      }else if(responseResult == 'Horse'){
        text = 'This type has a long face and sometimes also has a long nose. People with this face are Energetic, Passionate, Upright'
      }else if(responseResult == 'Koala'){
        text = 'People with this face type are deeply emotional, and on top of that they have a way of burying their feelings to keep them secret'
      }else if(responseResult == 'Lion'){
        text = 'People with this face type are visionary, practical, productive, strong-willed, independent'
      }else if(responseResult == 'Chimpanzee'){
        text = 'People with this face type are quiet, collected, and focused'
      }else{
        text = 'You can see the description '
      }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Which Animal Face Type Are You?</Text>
        <Text style={styles.text}>Find out which animal face types suit your preferences as well as which category your favorite stars belong to.</Text>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.camera}
            onPress={this._takePhoto}  >
            <Text style={styles.customBtnCamera}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.upload}
            onPress={this._pickImage}  >
            <Text style={styles.customBtnUpload}>Upload Image</Text>
          </TouchableOpacity>
        </View>

        {responded ?
          <Image source={{ uri: image }} style={styles.image} />
          :
          <Image source={require('../assets/profile.png')} style={styles.image} />
        }

        <View style={styles.txtResult}>
          <Text style={styles.result}>You Are A </Text>

          <Text style={styles.resultAnimal}>{this.state.responseResult}</Text>
          
          <Text style={styles.result}> Type!</Text>
        </View>

        <Text style={styles.desc}>{text} </Text>
        <View style={styles.btn}>
            <TouchableOpacity
                style={styles.AniFact}
                onPress={() => this.props.navigation.navigate('AniFact')}  >
                <Text style={styles.customBtnAniFact}>AniFact</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
                style={styles.AniFilter}
                onPress={() => this.props.navigation.navigate('AniFilter')}  >
                <Text style={styles.customBtnAniFilter}>AniFilter</Text>
            </TouchableOpacity> */}
      </View>

      </View>
    );
  }


  _takePhoto = async () => {
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
        aspect: [4, 3],
      });

      console.log(pickerResult);
      if (!pickerResult.cancelled) {
        this.setState({ responded:null,image: pickerResult.uri,responseResult:"unknown"})
      }

      this._handleImagePicked(pickerResult);
    }
  };

  _pickImage = async () => {
    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        aspect: [4, 3],
      });

      console.log(pickerResult);
      if (!pickerResult.cancelled) {
        this.setState({responded:null,image: pickerResult.uri,responseResult:"unknown" })
      }

      this._handleImagePicked(pickerResult);
    }
  };

  _handleImagePicked = async pickerResult => {
    let uploadResponse, uploadResult;

    try {
      this.setState({
        uploading: true
      });

      if (!pickerResult.cancelled) {
        uploadResponse = await this.uploadImageAsync(pickerResult.uri);
        uploadResult = await uploadResponse.json();
      }

    } finally {
      this.setState({
        uploading: false
      });
    }
  };


  uploadImageAsync = (uri) =>  {
    let apiUrl = 'http://35.186.155.113:5000/encodeFace';
  
    let uriParts = uri.split('.');
    let fileType = uriParts[uriParts.length - 1];
  
    let formData = new FormData();
    formData.append('im_path', {
      uri,
      name: `${this.state.email}.${fileType}`,
      type: `image/${fileType}`,
    });
  
    let options = {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    };
    fetch(apiUrl, options)
      .then(response => response.json())
      .then(response => {
        console.log("upload success", response.message);
        if(response.message == "There can only be a single face in the photo!"){
          alert(response.message);
        }else{
          this.setState({responseResult:response.message,responded:true});
          alert("YAY!");
        }
      })
      .catch(error => {
        console.log("fail", error)
      })
  
      
  };
}

const styles = StyleSheet.create({
  exampleText: {
    fontSize: 20,
    marginBottom: 20,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  maybeRenderUploading: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
  },
  maybeRenderContainer: {
    borderRadius: 3,
    elevation: 2,
    marginTop: 30,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    width: 250,
  },
  maybeRenderImageContainer: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor:'red'
    // overflow: 'hidden',
  },
  maybeRenderImage: {
    height: 250,
    width: 250,
  },
  maybeRenderImageText: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },


  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    color: '#0A91AB',
    textAlign: 'center',
    fontSize: 41,
    height: hp('15%'),
    width: wp('80%'),
    top: hp('8%'),
    fontWeight: 'bold'
  },

  text: {
    height: hp('12%'),
    width: wp('80%'),
    top: hp('8%'),
    fontSize: 20,
    textAlign: 'center',
    color: '#707070'
  },

  btn: {
    flexDirection: 'row'
  },

  camera: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FFC045',
    width: wp('40%'),
    top: hp('8%'),
    left: hp('-2%')

  },

  customBtnCamera: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFC045',
  },

  upload: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#0A91AB',
    width: wp('40%'),
    top: hp('8%'),
    left: hp('2%')

  },
  image: {
    backgroundColor: 'red',
    top: hp('10%'),
    width: wp('50%'),
    height: hp('30%')
  },

  customBtnUpload: {
    textAlign: 'center',
    fontSize: 20,
    color: '#0A91AB',
  },
  image: {
    backgroundColor: 'red',
    top: hp('10%'),
    width: wp('50%'),
    height: hp('30%')
},

txtResult: {
    flexDirection: 'row',
    top: hp('12%'),
},

result: {
    fontSize: 27,
    color: '#707070',
},

resultAnimal: {
    fontSize: 27,
    color: '#0A91AB',
    fontWeight: 'bold'
},

desc: {
    // backgroundColor:'red',
    fontSize: 20,
    color: '#707070',
    textAlign: 'center',
    top: hp('15%'),
    width: wp('85%'),
    height: hp('8%')
},

AniFact: {
    backgroundColor: '#FFC045',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FFC045',
    width: wp('40%'),
    top: hp('15%')
    // left: hp('-2%')

},

customBtnAniFact: {
    textAlign: 'center',
    fontSize: 20,
    color: '#707070',
},

AniFilter: {
    backgroundColor: '#0A91AB',
    color: '#707070',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#0A91AB',
    width: wp('40%'),
    top: hp('15%'),
    left: hp('2%')

},

customBtnAniFilter: {
    textAlign: 'center',
    fontSize: 20,
    color: '#707070',
},
});