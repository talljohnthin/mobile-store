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
        borderRadius:4,
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
        backgroundColor:'#efefef',
        padding:0,
        flex:1
    },
    orderCard: {
        width: '100%',
        position:'relative',
        backgroundColor:'#fff',
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
        width: 265,
        flexDirection:'row'
    },
    orderDate: {
        fontFamily: primaryFont,
        fontSize:17,
        paddingTop:0,
        width:'85%',
        paddingLeft:10
    },
    orderStatus: {
        fontSize:14,
        color:"gray"
    },
    orderStatusReady: {
        color:fifthColor
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
        color:"#fff",
        textAlign:'center',
        borderRadius:28,
        paddingTop:3
    },
    // order total
    orderSumWrapper: {
        
    },
    orderShipping: {
        padding:20,
        borderWidth:1,
        borderColor:'#f4f4f4',
    },
    orderShippingText: {
        fontFamily: tertiaryFont,
        lineHeight:26,
        paddingTop:5
    },
    orderSum: {
        padding: 20,
        paddingBottom: 0,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    orderSumLabel: {
        fontFamily: tertiaryFont,
    },
    orderSumValue: {
        fontSize:22,
        fontFamily: tertiaryFont
    },
    buttonWrapper: {
        paddingLeft:20,
        paddingRight:20
    },
    btnOrder: {
        borderRadius:4,
        height:60,
        backgroundColor:fifthColor,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginTop:25
    },
    btnCancel: {
        borderRadius:4,
        height:60,
        backgroundColor:"#000",
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginTop:10
    },
    btnOrderText: {
        textTransform:'uppercase',
        color:'#fff',
        fontSize:18,
        fontFamily: primaryFont,
    },
    // On ship text
    OnShipText: {
        fontSize:20,
        marginTop:30,
        textAlign:'center',
        color:fifthColor
    }
});