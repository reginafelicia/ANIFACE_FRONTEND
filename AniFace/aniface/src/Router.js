import { createStackNavigator} from 'react-navigation-stack';
import LoginComponent from './screen/LoginComponent';
import RegisterComponent from './screen/RegisterComponent';
import CheckAnimalFaceComponent from './screen/CheckAnimalFaceComponent';
import AniFact from './screen/AniFact';
import AniFilter from './screen/AniFilter';
import Cat from './screen/Cat';
import Dog from './screen/Dog';
import Fox from './screen/Fox';
import Horse from './screen/Horse';
import Chimpanzee from './screen/Chimpanzee';
import Gorilla from './screen/Gorilla';
import Hamster from './screen/Hamster';
import Koala from './screen/Koala';
import Lion from './screen/Lion';
import Panda from './screen/Panda';

import {createAppContainer} from 'react-navigation';
import ChangePass from './screen/ChangePass';



const Navigation = createStackNavigator({
  LoginComponent : {screen:LoginComponent},
  RegisterComponent : {screen:RegisterComponent},
  CheckAnimalFaceComponent : {screen: CheckAnimalFaceComponent },
  AniFact :{screen: AniFact},
  AniFilter : {screen:AniFilter},
  Cat :{screen:Cat},
  Dog :{screen:Dog},
  Fox :{screen:Fox},
  Horse :{screen:Horse},
  Chimpanzee :{screen:Chimpanzee},
  Gorilla :{screen:Gorilla},
  Hamster :{screen:Hamster},
  Koala :{screen:Koala},
  Lion :{screen:Lion},
  Panda :{screen:Panda},
  ChangePass:{screen:ChangePass}
}, {headerMode: 'none'});

const Router = createAppContainer(Navigation);

export default Router;
