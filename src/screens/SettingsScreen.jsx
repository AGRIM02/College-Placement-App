import React from 'react';
import { SafeAreaView, Text, StyleSheet,View} from 'react-native';
import { Switch} from 'react-native-paper';


const SettingsScreen = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    
    return(
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.txt}>Dark Mode</Text>
           <Switch color='#068FFF' value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'flex-start',
        marginTop:10
    },
    txt: {
        marginRight:100,
        padding:10,
        marginLeft:60,
        fontSize:18
    },
    
})

export default SettingsScreen
