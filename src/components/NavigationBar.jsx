import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar} from 'react-native-paper';
import SearchComponent from './SearchComponent';
import { NavigationContainer } from '@react-navigation/native';
import OTP from '../screens/OTP';
import BottomBar from './BottomBar';



const NavigationBar = ({navigation}) => {
  return (
    <Appbar.Header style={styles.appbar} elevated='true'>
      <Appbar.BackAction color='#068FFF' onPress={()=>navigation.navigate('otp')}/>
      <Appbar.Content color='black' titleStyle={styles.txt} title="Home"/>
      <Appbar.Action icon="magnify" iconColor='#068FFF' onPress={()=>{}}/>
    </Appbar.Header>
    
  )
}

const styles = StyleSheet.create({
  appbar: {
    marginTop:-25,
    backfaceVisibility:'visible',
    alignItems:'flex-end',
    backgroundColor:'white'
  },
  txt: {
    fontWeight:'bold',
    fontSize:22,
    paddingBottom:10
  }
})
export default NavigationBar
