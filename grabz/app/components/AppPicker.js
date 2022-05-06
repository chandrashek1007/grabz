import React , { useState } from 'react';
import {StyleSheet, View , FlatList, TextInput, Button, Modal,TouchableWithoutFeedback} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../../config/colors';
import defaultstyles from '../../config/styles';
import AppText from './AppText';
import SafeAreaScreen from './SafeAreaScreen';
import PickerItem from "./PickerItem";


function AppPicker({ icon ,placeholder, selectedItem, onSelectItem, items, ...otherProps }) {
    const [modalVisble, setmodalvisible] = useState(false);
    return (
        <React.Fragment>
        <TouchableWithoutFeedback onPress={() => setmodalvisible(true)}>
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons size={30} name={icon} style={styles.icon}/> }
                <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                <MaterialCommunityIcons color={colors.dark} size={20} name='chevron-down' />
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisble} animationType="slide">
            <SafeAreaScreen>
                <Button title="Close" onPress={() => setmodalvisible(false)}></Button>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.value.toString()}
                    renderItem={({ item }) => (
                    <PickerItem
                        label={item.label}
                        onPress={() => {
                            console.log(item);
                            setmodalvisible(false);
                            onSelectItem(item)
                        }}
                    />
                    )}
          />
            </SafeAreaScreen>
            
        </Modal>
        </React.Fragment>
    );
}
const styles = StyleSheet.create({
    container : {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
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
        marginRight: 10,
        color: colors.dark
    },
    text:{
        flex:1
    }
    
})
export default AppPicker;