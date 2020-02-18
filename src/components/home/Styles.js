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
        backgroundColor:'#fff'
    },
    imageOpacity: {
        height:370,
    },
    imageBackground: {
        flex: 1,
    },
    productWrapper: {
        minHeight:300
    },
    productTitleWrapper: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:12,
        paddingRight:12,
        paddingTop:12,
        backgroundColor:'#fff',   
    },
    productTitle: {
        fontFamily:tertiaryFont,
        fontSize:20
    },
    productShowLink: {
        fontSize: 14,
        textTransform:'uppercase'
    },
    spinner: {
        top:50
    }
});