import React from "react";
import{View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import OTP from "./src/screens/OTP";
import { PaperProvider } from "react-native-paper";
import NavigationBar from "./src/components/NavigationBar";
import SearchComponent from "./src/components/SearchComponent";
import BottomBar from "./src/components/BottomBar";
import StudentDetails from "./src/screens/StudentDetails";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from "./src/screens/ProfileScreen";


const Stack = createNativeStackNavigator();
const App = ()=> {
  return(
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
      />
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={OTP}
          options={{headerShown:false}}
          />
        <Stack.Screen
          name="otp"
          component={BottomBar}
          options={{headerShown:true,title:'The College Placement', headerBackVisible:false}}
        />
        <Stack.Screen
         name="profilee"
         component={ProfileScreen}
        />
        <Stack.Screen
          name="profile"
          component={StudentDetails}
          options={{headerShown:false}}
          />
      </Stack.Navigator>
    </NavigationContainer>
  
  )
}


export default App