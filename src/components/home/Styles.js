import { StyleSheet } from 'react-native'
import {
    primaryColor,
    secondaryColor,
    tertiaryColor,
    fourthColor,
    fifthColor,
    primaryFont,
    secondaryFont,
    tertiaryFont,
    fourthFont,
    fiftFont
} from '../../styles/Variables'

export default Styles = StyleSheet.create({
    homeWrapper: {
        flex:1,
        height:'100%',
        backgroundColor:'#fff',
    },
    specialsWrapper: {
        padding:15
    },
    specialImage: {
        width: "100%", 
        height: 210,
        marginBottom:15,
        borderRadius:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    }
});