import React from "react";
import { SafeAreaView , Text,StyleSheet, Image, View} from "react-native";
import { Button, TextInput, Appbar } from "react-native-paper";
import { OtpInput } from "react-native-otp-entry";


const OTP = ({navigation,route})=>{
    return(
        <SafeAreaView style={styles.container}>
            <Image style={styles.image}source={require("../../assets/otpicon.png")}/>
            <Text style={styles.maintxt}>Verify OTP</Text>
            <View style={styles.otpview}>
            <OtpInput 
               numberOfDigits={6}
               focusColor="#068FFF"
               inputsContainerStyle={styles.inputsContainer}
               pinCodeContainerStyle={styles.pinCodeContainer}
               pinCodeTextStyle={styles.pinCodeText}
               focusStickStyle={styles.focusStick}
               focusStickBlinkingDuration={500}
             />
            </View>
            <Button style={styles.button} textColor="white" mode="flat" buttonColor="#068FFF" onPress={()=> navigation.navigate('otp')}>
                <Text style={styles.btntext}>SUBMIT</Text>
            </Button>
            <View style={styles.lastview}>
            <Text> 
                Did not recieve the OTP?
            </Text>
            <Button mode="text" textColor="#068FFF" style={styles.lasttxt2} onPress={()=> console.log('pressed')}>
                Resend
            </Button>
            </View>
        </SafeAreaView>
    )
        
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        backgroundColor:'white'
    },
    otpcontainer:{

    },
    button: {
        marginTop:50,
        fontSize:50,
        width:150
    },
    btntext: {
        fontSize:20,
        justifyContent:"center",
        alignItems:"center"
    },
    inputsContainer:{
        marginRight:10
    },
    textin: {
        marginTop:40,
        height:60,
        width:40,
        marginRight:15
    },
    maintxt: {
        justifyContent:"center",
        alignItems:"center",
        fontWeight:"bold",
        fontSize:30,
        textAlign:"center",
        color:"black",

    },
    image: {
        alignItems:'center',
        height:300,
        width:300
    },
    lastview: {
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center',
        marginTop:30,
        padding:10
    },
    
    lasttxt2:{
        fontWeight:'bold',
        color:"#068FFF",
        marginLeft:-5,
        marginTop:-1
    },
    otpview:{
        justifyContent:'center',
        alignContent:'center',
        marginRight:250,
        marginTop:20
    }
})
export default OTP