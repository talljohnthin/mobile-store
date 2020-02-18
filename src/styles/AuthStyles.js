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
} from './Variables'

export default AuthStyles = StyleSheet.create({
    //login
    button: {
        marginTop: 20,
    },
    //form
    form : {
        padding:0
    },
    // input item
    item : {
        paddingBottom:4,
        marginLeft:0,
        borderBottomWidth:1,
        borderColor:'#eee',
        justifyContent:'flex-start',
        alignItems: 'flex-start'
    },
    // inputs 
    input : {
        fontFamily : primaryFont,
        fontSize : 17,
        marginTop:8,
    },
    textArea: {
        height:140,
        paddingLeft:0,
        paddingTop:8,
        width:'100%'
    },
    IconStyle: {
        color:primaryColor,
        marginTop:17
    },
    // wrappers
    wrapper: {
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor:'#fff'
    },
    // headline
    headline: {
        padding:40,
        paddingLeft:30,
        paddingRight:30,
        backgroundColor:'#fff'
    },
    headlineTitle: {
        fontSize: 45,
        fontFamily: fourthFont,
        marginBottom: 5,
        color:primaryColor,
        textAlign:'center'
    },
    headlineText: {
        fontFamily: primaryFont,
        marginBottom: 0,
        color:'#777',
        textAlign:'center'
    },
    //buttons
    buttonSolid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontFamily : primaryFont,
        height:60,
        borderRadius:50,
        backgroundColor:primaryColor,
        marginTop: 30
    },
    buttonTextColor : {
        color: '#fff',
        fontFamily:tertiaryFont,
        letterSpacing:1,
        fontSize:16
    },
    forgotPassword: {
        paddingTop:15,
        textAlign:'center',
        color:'#777',
        fontFamily:tertiaryFont,
        fontSize:17
    },
    signUp: {
        paddingTop:15,
        textAlign:'center',
        color:'#777',
        marginTop:5,
        fontSize:17
    },
    signUpText: {
        fontFamily:fourthFont,
        color:primaryColor,
        fontSize:17
    }
});