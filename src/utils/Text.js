import * as React from 'react';
import { Text } from 'react-native';
import {
    primaryColor,
    secondaryColor,
    tertiaryColor,
    fourthColor,
    fifthColor,
    primaryFont,
    secondaryFont,
    tertiaryFont
} from '../styles/Variables'

export default (props) => {
    const defaultStyle = { 
        fontFamily: primaryFont,
        fontSize:18, 
        color: '#272727' 
    };
    const incomingStyle = Array.isArray(props.style) ? props.style : [props.style];
    return <Text {...props} style={[defaultStyle, ...incomingStyle]} />;
};