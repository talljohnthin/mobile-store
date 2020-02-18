import { StyleSheet } from 'react-native'
import {
    primaryColor,
    secondaryColor,
    tertiaryColor,
    fourthColor,
    fifthColor,
    primaryFont,
    secondaryFont
} from './Variables'

export default HomeStyles = StyleSheet.create({
    wrapper: {
        flex:1,
        justifyContent:'space-between'
    },
    footerTab: {
        backgroundColor: '#fff'
    },
    footerTabIcon: {
        color: primaryColor
    }
});