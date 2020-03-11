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
    OrderSuccessWrapper: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fdfdfd'
    },
    OrderSuccessButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontFamily : primaryFont,
        height:60,
        borderRadius:50,
        marginTop:10,
        paddingLeft:30,
        paddingRight:30,
        backgroundColor:fifthColor,
    },
    OrderSuccessButtonText: {
        color:'#fff'
    },
    OrderSuccessText: {
        fontSize:24
    }
});