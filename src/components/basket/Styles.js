import { StyleSheet, Dimensions } from 'react-native'
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

let deviceWidth = Dimensions.get('window').width

export default Styles = StyleSheet.create({
    wishWrapper: { 
        backgroundColor:'#fff',
        padding:0
    },
    wishCard: {
        width: '100%',
        position:'relative',
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingLeft:20,
        borderBottomWidth:1,
        borderColor:'#f4f4f4',
        paddingTop:30,
        paddingBottom:30
    },
    wishImageWrapper: {
        backgroundColor:"#ededed",
        borderRadius:6,
        overflow:'hidden',
        width:140,
        height:160
    },
    wishImage: {
        width: 140, 
        height:160
    },
    wishDescWrapper: {
        alignItems:'flex-start',
        justifyContent:'flex-start',
        padding:0,
        marginLeft:15,
        width:deviceWidth - 195,
    },
    wishName: {
        fontFamily: tertiaryFont,
        fontSize:17,
        lineHeight:17,
        paddingTop:7,
        marginBottom:3
    },
    wishOption: {
        color:"#c2c2c2",
        fontSize:15,
        marginTop:-4,
        width:'100%'
    },
    wishVariation: {
        color:"#c2c2c2",
        fontSize:15,
        marginTop:-2,
        width:'100%'
    },
    wishButtomWrapper: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        marginTop:20
    },
    wishTotal: {
        fontFamily: tertiaryFont,
        fontSize:17
    },
    wishCounter: {
        flexDirection:'row',
        alignItems:'center',
    },
    wishCount: {
        paddingLeft:5,
        paddingRight:5,
        fontSize:18,
        color:'#a6a6a6'
    },
    wishPlus: {
        color:'#a6a6a6',
        fontSize:20
    },
    wishMinus: {
        color:'#a6a6a6',
        fontSize:20
    },
    wishTopWrapper: {
        width:'100%'
    },
    wishRemove: {
        position:"absolute",
        right:0,
        top:-15,
    },
    wishRemoveIcon: {
        fontSize:22,
        color:'#a6a6a6',
    },
    // wish total
    wishSumWrapper: {
        
    },
    wishShipping: {
        padding:20,
        borderWidth:1,
        borderColor:'#f4f4f4',
    },
    wishShippingText: {
        fontFamily: tertiaryFont,
        lineHeight:26,
        paddingTop:5
    },
    wishSum: {
        padding: 20,
        paddingBottom: 0,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    wishSumLabel: {
        fontFamily: tertiaryFont,
    },
    wishSumValue: {
        fontSize:22,
        fontFamily: tertiaryFont
    },
    buttonWrapper: {
        paddingLeft:20,
        paddingRight:20
    },
    btnOrder: {
        borderRadius:50,
        height:60,
        backgroundColor:fifthColor,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginTop:25
    },
    btnOrderText: {
        textTransform:'capitalize',
        letterSpacing:0,
        color:'#fff',
        fontSize:18
    },
    //empty basket
    basketEmptyWrapper: {
        padding:20,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    basketEmptyText: {
        fontFamily: primaryFont,
        fontSize:17,
        color:'#a6a6a6',
        textAlign:'center',
        lineHeight:22,
        fontWeight:'300'
    },
    basketEmptyButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontFamily : primaryFont,
        height:60,
        borderRadius:50,
        marginTop:10,
        paddingLeft:30,
        paddingRight:30,
        backgroundColor:'#000',
    },
    basketEmptyButtonText: {
        color:'#fff'
    }
});