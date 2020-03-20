import { StyleSheet } from 'react-native'
import {
    primaryColor,
    fifthColor,
    primaryFont,
    fourthFont
} from './Variables'

export default SharedStyles = StyleSheet.create({
    //scrollable tabs
    tabBarUnderlineStyle: {
        backgroundColor: fifthColor,
        height:2,
    },
    tabHeading: {
        backgroundColor:'transparent'
    },
    tabHeadingText: {
        fontSize:16,
        marginLeft:0
    },
    activeTextStyle: {
        color: primaryColor,
        fontFamily:fourthFont
    },
    activeTabStyle: {
        backgroundColor:'#efefef'
    },
    tabStyle: {
        backgroundColor:'transparent',
    },
    textStyle: {
        color:primaryColor,
        fontFamily:primaryFont
    },
    ScrollableTab: {
        backgroundColor:'transparent',
        borderColor:'#f5f5f5',
        paddingTop:0,
        paddingBottom:0,
        height:75,
    },
    //linearButton
    linearButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        height:60,
        borderRadius:4,
        width:'100%'
    },
    linearText: {
        color:'#fff'
    },
    //Button reset
    ButtonReset: {
        backgroundColor: "transparent", 
        elevation: 0,
        width:"100%"
    }
  });