import React from 'react';
import {Platform} from 'react-native';
import colors from './colors';



export default {
    text: {
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
    }
};