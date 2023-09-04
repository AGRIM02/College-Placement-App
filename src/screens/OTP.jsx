import React from "react";
import { SafeAreaView , Text,StyleSheet, Image, View} from "react-native";
import { Button, TextInput, Appbar } from "react-native-paper";


const OTP = ({navigation,route})=>{
    const [text1, setText1] = React.useState("");
    const [text2, setText2] = React.useState("");
    const [text3, setText3] = React.useState("");
    const [text4, setText4] = React.useState("");
    const [text5, setText5] = React.useState("");
    const [text6, setText6] = React.useState("");
    return(
        <SafeAreaView style={styles.container}>
            <Image style={styles.image}source={require("../../assets/otpicon.png")}/>
            <Text style={styles.maintxt}>Verify OTP</Text>
            <View style={styles.otpview}> 
            <TextInput style={styles.textin}selectionColor='#068FFF' activeOutlineColor='#068FFF'mode="outlined" textAlign="center"textContentType="oneTimeCode" maxLength={1}value={text1}onChangeText={text1 => setText1(text1)}/>
            <TextInput style={styles.textin}selectionColor='#068FFF' activeOutlineColor='#068FFF'mode="outlined" textAlign="center"textContentType="oneTimeCode" maxLength={1}value={text2}onChangeText={text2 => setText2(text2)}/>
            <TextInput style={styles.textin}selectionColor='#068FFF' activeOutlineColor='#068FFF'mode="outlined" textAlign="center"textContentType="oneTimeCode" maxLength={1}value={text3}onChangeText={text3 => setText3(text3)}/>
            <TextInput style={styles.textin}selectionColor='#068FFF' activeOutlineColor='#068FFF'mode="outlined" textAlign="center"textContentType="oneTimeCode" maxLength={1}value={text4}onChangeText={text4 => setText4(text4)}/>
            <TextInput style={styles.textin}selectionColor='#068FFF' activeOutlineColor='#068FFF'mode="outlined" textAlign="center"textContentType="oneTimeCode" maxLength={1}value={text5}onChangeText={text5 => setText5(text5)}/>
            <TextInput style={styles.textin}selectionColor='#068FFF' activeOutlineColor='#068FFF'mode="outlined" textAlign="center"textContentType="oneTimeCode" maxLength={1}value={text6}onChangeText={text6 => setText6(text6)}/>

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
        flexDirection:'row',
        marginLeft:10,
        marginTop:-10
    }
})
export default OTP