import React from "react";
import{Text,View,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const IconText = (props)=> {
    const {iconName, iconColor, bodyText, bodyTextStyles} = props
    return(
        <View style={styles.container}>
            <Feather name={iconName} size={50} color={iconColor}/>
            <Text style={[bodyTextStyles ,styles.texttheme]}>{bodyText}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    texttheme: {
        fontWeight:'bold'
    },

    container: {
        alignItems:'center'
    }
})
export default IconText