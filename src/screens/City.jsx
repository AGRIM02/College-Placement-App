import React from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View} from 'react-native';
import {Feather} from '@expo/vector-icons';
import IconText from "../components/IconText";

const City = () => {
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/City-background.jpg')} style={styles.imagelayout}>
                <Text style={[styles.citytext ,styles.cityname]}>Kurukshetra</Text>
                <Text style={[styles.citytext, styles.countryname]}>India</Text>
                <View style={[styles.rowlayout,styles.populationwrapper]}> 
                  <IconText iconName={'user'} iconColor={'red'} bodyText={'80000'} bodyTextStyles ={styles.populationtext}/>
                </View>
                <View style={[styles.rowlayout, styles.risesetwrapper]}>
                  <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'10:46:58 am'} bodyTextStyles ={styles.risesettext}/>
                  <IconText iconName={'sunset'} iconColor={'white'} bodyText={'17:28:15 pm'} bodyTextStyles ={styles.risesettext}/>  
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor:'black'
    },
    imagelayout: {
        flex:1,
    },
    cityname: {
        fontSize:40
    },
    countryname: {
        fontSize:30
    },

    citytext:{
        justifyContent:'center',
        alignSelf:'center',
        fontWeight:'bold',
        color:'white'
    },
    populationwrapper: {
        justifyContent:'center',
        marginTop:30
    },

    populationtext: {
        fontSize:25,
        marginLeft:7.5,
        color:'red',
    },
    risesetwrapper: {
        justifyContent:'space-around',
        marginTop:30
    },

    risesettext: {
        fontSize:20,
        color:'white',
    },
    rowlayout: {
        flexDirection:'row',
        alignItems:'center'
    }
})
export default City