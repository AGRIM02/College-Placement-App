import React from "react";
import {Text,SafeAreaView,StyleSheet,FlatList,View , StatusBar, ImageBackground} from 'react-native';
import ListItem from "../components/ListItem";

const DATA = [
    {
      dt_txt: "2023-08-21 12:00:00",
      main: {
        temp_min: 8.75,
        temp_max: 7.87,
      },
      weather: [
        {
          main: "Rain",
        }
    ]
    },
    {
        dt_txt: "2023-08-21 15:00:00",
        main: {
          temp_min: 10.75,
          temp_max: 15.87,
        },
        weather: [
          {
            main: "Clear",
          }
      ]
    },
    {
        dt_txt: "2023-08-21 18:00:00",
        main: {
          temp_min: 12.75,
          temp_max: 13.80,
        },
        weather: [
          {
            main: "Sunny",
          }
      ]  
    }
]


const UpcomingWeather = ()=> {
    const renderItem = ({item})=> (
        <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
    )
    const {container , image} = styles;
    return(
        <SafeAreaView style={container}>
         <ImageBackground source={require('../../assets/Upcoming-background.jpg')} style = {image}>
         <Text style={styles.weathertext}>
                Upcoming Weather
            </Text>
            <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.dt_txt}/>
         </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor:'black',
        justifyContent:'center',
        alignContent:'center'
    },

    image: {
        flex:1,
        alignItems:'center'

    },

    weathertext: {
      fontSize:30,
      color:'white',
      alignItems:'center',
      justifyContent:'center',
      alignContent:'center',
      fontWeight:'bold',
      textShadowColor:'black',
      textShadowOffset:2,
      textShadowRadius:10
    }
})
export default UpcomingWeather