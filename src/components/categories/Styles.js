import { StyleSheet } from 'react-native'
import {
    primaryColor,
    secondaryColor,
    tertiaryColor,
    fourthColor,
    fifthColor,
    primaryFont,
    secondaryFont,
    tertiaryFont
} from '../../styles/Variables'

export default Styles = StyleSheet.create({
    categoryWrapper: { 
        backgroundColor:'#fff',
        padding:0,
    },
    categoryCard: {
        width: '100%',
        position:'relative',
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingLeft:20,
        paddingTop:20,
        paddingBottom:20,
        borderBottomWidth:1,
        borderColor:'#efefef',
    },
    categoryDescWrapper: {
        alignItems:'center',
        justifyContent:'center',
        width: 190
    },
    categoryName: {
        fontFamily: primaryFont,
        fontSize:16,
        paddingTop:0,
        width:'85%'
    },
    categoryArrowIconWrapper: {
        width:100,
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight:20
    }
});