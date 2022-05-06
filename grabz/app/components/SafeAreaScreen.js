import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import Constants from 'expo-constants';

function SafeAreaScreen({children, style}) {
    return (
        
            <View style={[styles.listView, style]}>{children}</View>
        
        
    );
}

const styles = StyleSheet.create({
    listView:{
        padding:20,
        paddingTop: Constants.statusBarHeight,
        flex:1
    }
})

export default SafeAreaScreen;