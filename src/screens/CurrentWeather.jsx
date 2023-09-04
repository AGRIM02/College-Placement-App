import React from "react";
import{View,Text,SafeAreaView,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
import RowText from "../components/RowText";

const CurrentWeather = ()=> {
  return(
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black"/>
      <Text style={styles.temp}>6</Text>
      <Text style={styles.feels}> Feels Like 5</Text>
      <RowText messageone={'High: 8'} messagetwo={'Low: 6'} containerstyles={styles.highlowwrapper} messageonestyles={styles.highlow} messagetwostyles={styles.highlow}/>
      </View>
      <RowText messageone={'Its sunny'} messagetwo={'Its perfect T-shirt weather'} containerstyles={styles.bodywrapper} messageonestyles={styles.desc} messagetwostyles={styles.msg}/>
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center' 
  },
  wrapper: {
    flex:1,
    backgroundColor:'pink',
  },

  temp: {
    color: 'black',
    fontSize:48
  },

  feels: {
    color:'black',
    fontSize:30
  },

  highlow: {
    color:'black',
    fontSize:20
  },

  highlowwrapper: {
    flexDirection:'row'
  },

  bodywrapper: {
    justifyContent:'flex-end',
    alignItems:'flex-start',
    paddingLeft:25,
    marginBottom:40
  },
  desc: {
    fontSize:48
  },
  msg: {
     fontSize:30
  }
})
export default CurrentWeather