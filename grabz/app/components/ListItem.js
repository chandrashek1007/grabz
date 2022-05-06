import React from 'react';
import Swipeable  from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View, Image, StyleSheet , TouchableHighlight} from "react-native";
import AppText from './AppText';
import colors from '../../config/colors';


function ListItem({title, subTitle, image,IconComponent, onPress, renderRightActions}) {
    console.log(renderRightActions);
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                underlayColor={colors.medium}
                onPress={onPress}
                >
                    <View style={styles.container}>
                        {IconComponent}
                        {image && <Image style={styles.image} source={image} />}
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                        </View>
                        </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35
    },
    title: {
        color: colors.black,
        fontSize: 24,
        fontWeight: "600",
    },
    subTitle:{
    color: colors.medium
    }
})
export default ListItem;