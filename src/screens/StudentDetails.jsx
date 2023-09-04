import React from "react";
import { SafeAreaView, Text, StyleSheet, View, ScrollView,KeyboardAvoidingView} from "react-native";
import { Button, TextInput, Appbar ,Divider} from "react-native-paper";
import UploadImage from "../components/UploadImage";

const StudentDetails = ({navigation})=>{
    const [text1, setText1] = React.useState("");
    const [text2, setText2] = React.useState("");
    const [text3, setText3] = React.useState("");
    const [text4, setText4] = React.useState("");
    return(
        <View style={styles.conatiner}>
            <Appbar.Header style={styles.appbar} elevated='true'>
                <Appbar.BackAction color='#068FFF' onPress={()=>{}}/>
                <Appbar.Content color='black' titleStyle={styles.txt} title='Profile'/>
            </Appbar.Header>
            <ScrollView style={styles.scroll}>
                <View style={styles.upload}><UploadImage/></View>
                <Text style={styles.headline}>Personal Details</Text>
                <Text style={styles.subhead}>First Name:</Text>   
               <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF'value={text1} onChangeText={text1 => setText1(text1)}/>
               <Text style={styles.subhead}>Last Name:</Text> 
               <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF' value={text2} onChangeText={text2 => setText2(text2)}/>
               <Text style={styles.subhead}>Personal Mail:</Text> 
                <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF' value={text2} onChangeText={text2 => setText2(text2)}/>
                <Text style={styles.subhead}>College Mail:</Text> 
                <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF' value={text2} onChangeText={text2 => setText2(text2)}/>
               <Text style={styles.subhead}>Phone Number:</Text> 
               <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF'  value={text3} onChangeText={text3 => setText3(text3)}/>
               <Text style={styles.subhead}>UID:</Text> 
               <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF' value={text4} onChangeText={text4 => setText4(text4)}/>
               <Text style={styles.headline}>Education Details</Text>
               <Text style={styles.subhead}>College Name:</Text>   
               <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF'value={text1} onChangeText={text1 => setText1(text1)}/>
               <Text style={styles.subhead}>Stream:</Text> 
               <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF' value={text2} onChangeText={text2 => setText2(text2)}/>
               <Text style={styles.subhead}>Course:</Text>   
               <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF'value={text1} onChangeText={text1 => setText1(text1)}/>
               <Text style={styles.subhead}>CGPA:</Text> 
               <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF' value={text2} onChangeText={text2 => setText2(text2)}/>
               <Text style={styles.subhead}>Graduation Year:</Text>   
               <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF'value={text1} onChangeText={text1 => setText1(text1)}/>
               <Text style={styles.subhead}>10th Board:</Text> 
               <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF' value={text2} onChangeText={text2 => setText2(text2)}/>
               <Text style={styles.subhead}>10th Percentage:</Text>   
               <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF'value={text1} onChangeText={text1 => setText1(text1)}/>
               <Text style={styles.subhead}>10th Board:</Text> 
               <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF' value={text2} onChangeText={text2 => setText2(text2)}/>
               <Text style={styles.subhead}>12th Percentage:</Text>   
               <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF'value={text1} onChangeText={text1 => setText1(text1)}/>
               <Text style={styles.subhead}>12th Board:</Text> 
               <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF' value={text2} onChangeText={text2 => setText2(text2)}/>
               <Text style={styles.headline}>Location Details</Text>
                <Text style={styles.subhead}>Country/Region:</Text>   
                <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF'value={text1} onChangeText={text1 => setText1(text1)}/>
                <Text style={styles.subhead}>City:</Text> 
                <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF' value={text2} onChangeText={text2 => setText2(text2)}/>
                <Text style={styles.subhead}>State:</Text> 
                <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF' value={text2} onChangeText={text2 => setText2(text2)}/>
                <Text style={styles.subhead}>PinCode:</Text> 
                <TextInput style={styles.inbox} mode="outlined" activeOutlineColor='#068FFF' value={text2} onChangeText={text2 => setText2(text2)}/>
            </ScrollView>
            <View style={styles.bottom}>
                <Button style={styles.btn} mode='contained' onPress={()=> navigation.navigate('otp')} buttonColor="#068FFF">
                    <Text style={styles.btntext}> Save </Text>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        flex:1,
        backgroundColor:'white'
    
    },
    upload: {
        alignItems:'center',
        marginTop:10,
    },
    scroll: {
        marginBottom:82
    },
    txt: {
        fontWeight:'bold',
        fontSize:22,
        paddingBottom:10
    },
    appbar: {
        marginTop:-25,
        alignItems:'flex-end',
        backgroundColor:'white'
    },
    bottom: {
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        height:80,
        backgroundColor:'white',
        borderTopWidth:0.5,
        borderTopColor:'gray'
    },

    btn: {
        marginLeft:40,
        marginRight:40,
        marginBottom:10,
        marginTop:15

    },

    btntext: {
        fontSize:20,
        justifyContent:"center",
        alignItems:"center"
    },

    headline: {
        fontSize:22,
        fontWeight:'bold',
        marginTop:20,
        marginLeft:10,
        marginBottom:15
    },

    subhead: {
        fontSize:16,
        paddingLeft:15,
        marginTop:8

    },

    inbox: {
        paddingLeft:18,
        paddingRight:15,
        marginLeft:18,
        marginRight:18
    }
})

export default StudentDetails