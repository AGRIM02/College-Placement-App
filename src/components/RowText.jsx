import React from "react";
import {View, Text} from 'react-native';

const RowText = (props) =>{
    const {messageone, messagetwo, containerstyles, messageonestyles, messagetwostyles} = props;
    return(
    <View style={containerstyles}>
      <Text style={messageonestyles}>{messageone}</Text>
      <Text style={messagetwostyles}>{messagetwo}</Text>
    </View>
    )
}

export default RowText