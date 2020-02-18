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
    fourthFont
} from '../../styles/Variables'

export default Styles = StyleSheet.create({
    wrapper: {
        backgroundColor:'#fff',
        flex:1,
        padding:20
    },
    FilterList: {
        paddingLeft:0,
        marginLeft:0
    },
    filterItem: {
        paddingLeft:0,
        marginLeft:0
    },
    filterItemText: {
        fontSize:17
    },
    filterTitle: {
        fontFamily:tertiaryFont,
        fontSize:20,
        marginTop:30,
    }
});