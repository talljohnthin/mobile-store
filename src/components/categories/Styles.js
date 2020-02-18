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
        marginTop:20,
        position:'relative',
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingLeft:20
    },
    categoryImageWrapper: {
        backgroundColor:"#ededed",
        borderRadius:6,
        overflow:'hidden',
        width: 100, 
        height:90
    },
    categoryImage: {
        width: 100, 
        height:90
    },
    categoryDescWrapper: {
        alignItems:'center',
        justifyContent:'center'
    },
    categoryName: {
        fontFamily: tertiaryFont,
        fontSize:17,
        lineHeight:17,
        paddingTop:7,
        width:'85%'
    },
    categoryTotal: {
        color:"#c2c2c2",
        fontSize:17,
        marginTop:-2,
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