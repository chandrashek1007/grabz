import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, TextInput ,SafeAreaview,Switch, TouchableOpacity, TouchableWithoutFeedback,View, Alert, Image, ImageBackground, Platform, Dimensions} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingsDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import SafeAreaScreen from './app/components/SafeAreaScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';


const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
];



export default function App() {
  console.log(useDimensions())

  // return (

  //   <View style={styles.container}>
  //     {/* <Text style={styles.text}>Hello </Text>
  //     <AppText>Hello World</AppText> */}
  //     <AppButton title="Login" onPress={() => console.log("Tapped")}/>
  //     {/* <MaterialCommunityIcons color="dodgerblue" size={200} name='email' /> */}
  //   </View>

  // );
  // return <View style={{
  //   backgroundColor: "#f8f4f4",
  //   padding: 20,
  //   paddingTop: 100

  // }}>
  //   <Card 
  //     title="Red jacket for sale"
  //     subTitle="$100" 
  //     image={require("./app/assets/jacket.jpg")} />
  // </View> ;

  //return <ListingDetailsScreen />;
  //return <WelcomeScreen /> ;
  //  return <ViewImageScreen />;
   //return <MessageScreen />
   //return <AccountScreen />
  //  const [firstName, setFirstName] = useState('');
  //  return( <SafeAreaScreen>
  //    <Text>{firstName}</Text>
  //    <TextInput
  //    keyboardType='numeric'
  //    clearButtonMode='always'
  //    onChangeText={(text)=> setFirstName(text)}
  //    placeholder="First Name"
  //    style={{
  //      padding: 5,
  //      borderBottomColor: "#ccc",
  //      borderBottomWidth: 1,
  //    }}
  //    ></TextInput>

  //  </SafeAreaScreen>);

  // return (
  //     <SafeAreaScreen>
  //         <AppTextInput placeholder={"Username"} icon="email"></AppTextInput>
  //     </SafeAreaScreen>
  // );
  // const [isNew, setIsnew] = useState(false);
  // return (
  // <SafeAreaScreen>
  //   <Switch value={isNew} onValueChange={newValue => setIsnew(newValue)} />
  // </SafeAreaScreen>
  // );
  const [category, setCategory] = useState(categories[0]);

  return (
    <SafeAreaScreen>
      <AppPicker selectedItem={category} onSelectItem={(item) => setCategory(item)} icon="apps" items={categories} placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email"/>
    </SafeAreaScreen>
  )

  //  return <ListingsScreen />

    // <View style={styles.container}>
    //   {/* <Button title="Click Me" onPress={() => alert("Button Tapped")} />
    //   <Button title="Alert Me" onPress={() => Alert.alert("Button Tapped", "Approve this", [{text:"Approve", onPress:() => console.log("Yes")}, {text:"Deny", onPress:() => console.log("No")}])} />
    //   <Button title="Prompt Me" onPress={() => Alert.prompt("Enter Name", "Enter your name",text => console.log(text))} /> */}
    //   <Text numberOfLines={1}>Hello World</Text>
    //   <ImageBackground style={{width: "100%", height: "80%"}} source={require("./assets/background.jpg")} />
    //   {/* <TouchableWithoutFeedback onPress={() => console.log(Dimensions.get('window'))}>
    //   <Image 
    //   blurRadius={10}
    //   fadeDuration={1000}
    //   source={{
    //     width: "100%",

    //     height: "30%",
        
    //     uri:"https://picsum.photos/200/300"}} />
    //   </TouchableWithoutFeedback> */}
    //   <View style={{flex: 1,
    //     justifyContent: "center",
    //     backgroundColor: '#fc5c65'}}>
    //   </View>
    //   <View style={{flex: 1,
    //     justifyContent: "center",
    //     backgroundColor: '#4ECDC4'}}>

    //   </View>
      
    //   <StatusBar style="auto" />
    // </View>
  


}
    
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
    // alignItems:"center",
    // paddingTop: Platform.OS === "android" ? 20 : 0

  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: "tomato"

}
});
