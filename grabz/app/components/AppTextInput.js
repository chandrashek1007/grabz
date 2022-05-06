import React from 'react';
import {StyleSheet, View , TextInput} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../../config/colors';
import defaultstyles from '../../config/styles';

function AppTextInput({ icon , ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons size={30} name={icon} style={styles.icon}/> }
            <TextInput style={defaultstyles.text}  {...otherProps} />
        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    textInput: {
        color: colors.black,
        ...Platform.select({
            ios: {
                fontSize: 18,
                fontFamily: "Avenir"
            },
            android:{
                fontSize: 20,
                fontFamily: "Roboto"
            }
        })
    },
    icon:{
        margin: 10,
        color: colors.dark
    }
    
})
export default AppTextInput;