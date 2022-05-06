import React from 'react';
import { View, Image, StyleSheet , TouchableHighlight, TouchableWithoutFeedback} from "react-native";
import colors from '../../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.deleteView}>
                <MaterialCommunityIcons name="trash-can" color="white" size={35}/>
            </View>
        </TouchableWithoutFeedback>
        
        
    );
}
const styles = StyleSheet.create({
    deleteView:{
        backgroundColor: colors.danger,
        justifyContent: "center",
        alignItems: "center",
        width: 70
    }
})
export default ListItemDeleteAction;