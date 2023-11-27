import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { Button, Divider } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
        <View style={styles.topcontainer}>
        <View style={styles.imgbox}><MaterialCommunityIcons style={styles.icon} name="account" size={50} color='black'/></View>
        <Text style={styles.headtxt}>Agrim Kumar Singh</Text>
        <Text style={styles.subheadtxt}>20BCS9861</Text>
        </View>
        <Divider style={styles.div}/>
        <Button style={styles.btn} icon='arrow-right'  mode='contained' onPress={()=> navigation.navigate('profile')}>
            <Text style={styles.btntext}>Edit Profile</Text>
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    btn: {
        marginLeft:70,
        marginRight:70,
        marginTop:10,
        backgroundColor:'#068FFF'
        
    },
    topcontainer: {
        
    },
    imgbox:{
        height:100,
        width:100,
        marginTop:50,
        borderRadius:999,
        marginBottom:-80,
        marginLeft:10,
        backgroundColor:'gray',
        alignItems:'center'
    },
    icon:{
        marginTop:20
    },
    btntext: {
        fontSize:18,
        justifyContent:"center",
        alignItems:"center"
    },
    headtxt: {
        marginLeft:130,
        fontWeight:'bold',
        fontSize:22,
    },
    subheadtxt: {
        marginLeft:130,
        fontSize:16,
        marginTop:10,
        marginBottom:40
    },
    div: {
        marginTop:10,
        marginLeft:10,
        marginRight:10
    }
})
export default ProfileScreen;
