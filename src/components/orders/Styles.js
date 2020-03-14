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
    },
    orderWrapper: { 
        backgroundColor:'#fff',
        padding:0,
    },
    orderCard: {
        width: '100%',
        position:'relative',
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingLeft:20,
        paddingTop:22,
        paddingBottom:22,
        borderBottomWidth:1,
        borderColor:'#efefef',
    },
    orderDescWrapper: {
        alignItems:'center',
        justifyContent:'center',
        width: 190,
        flexDirection:'row'
    },
    orderDate: {
        fontFamily: primaryFont,
        fontSize:18,
        paddingTop:0,
        width:'85%',
        paddingLeft:10
    },
    orderArrowIconWrapper: {
        width:100,
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight:20
    },
    orderItem: {
        width:28,
        height:28,
        justifyContent:'center',
        alignItems:'center',
        fontSize:16,
        display:'flex',
        backgroundColor:fifthColor,
        color:'#fff',
        textAlign:'center',
        borderRadius:28,
        paddingTop:3
    }
});