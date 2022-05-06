import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text} from "react-native"
import AppButton from '../components/AppButton';


function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={10} style={styles.background} source={require("../assets/background.jpg")} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
                <Text style={styles.tagline}> Sell What You Don't Need</Text>
            </View>
            
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => console.log("Tapped")}/>
                <AppButton title="Register" onPress={() => console.log("Tapped")}  color="secondary"/>
                {/* <View style={styles.loginbutton} ></View> */}
                {/* <View style={styles.registerbutton} ></View> */}
            </View>
            
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
      },
    loginbutton:{
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65"
    },
    registerbutton:{
        width: "100%",
        height: 70,
        backgroundColor: "#4ECDC4"
    },
    logo:{
        width: 100,
        height: 100,
        // position: "absolute",
        // top: 70
    },
    logoContainer:{
        alignItems : "center",
        position: "absolute",
        top: 70
    },
    buttonContainer:{
        padding: 20,
        width: "100%"
    },
    tagline:{
        fontSize:25,
        fontWeight: "600",
        paddingVertical: 20
    }

})

export default WelcomeScreen;