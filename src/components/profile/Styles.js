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
    profileWrapper: {
        backgroundColor:'#fff',
    },
    // Users
    userCard: {
        width: '100%',
        marginBottom:20,
        position:'relative',
        padding:20,
        paddingTop:30,
        flexDirection:'row'
    },
    userImageWrapper: {
        backgroundColor:fifthColor,
        borderRadius:6,
        overflow:'hidden',
        borderRadius:60,
        width:60, 
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
    userImage: {
        width:60, 
        height:60,
    },
    userNotImage: {
        fontSize:30,
        fontFamily:tertiaryFont,
        color:'#fff'
    },
    userDescWrapper: {
        paddingLeft:15
    },
    userName: {
        fontFamily: tertiaryFont,
        paddingTop:7,
        marginTop:7,
        fontSize:18,
        lineHeight:22,
        paddingRight:28
    },
    userEmail: {
        color:"#c2c2c2",
        fontSize:17,
        marginTop:-6,
    },
    // Orders
    ordersWrapper: {
        padding:20,
        paddingTop:15,
        paddingBottom:25,
        marginBottom:60,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#f8f8f8',
    },
    orderTitle: {
        fontFamily: tertiaryFont,
        paddingTop:7,
        marginTop:7,
        fontSize:20,
        lineHeight:22,
        paddingRight:28,
        paddingBottom:10
    },
    ordersStatusWrapper: {
        justifyContent:'flex-start',
        flexDirection:'row'
    },
    ordersStatus: {
        alignItems:'center',
        marginRight:20
    },
    ordersLabel: {
        color:"#333",
        fontSize:15,
        paddingTop:5
    },
    iconBag: {
        fontSize:27
    },
    iconPackage: {
        fontSize:27
    },
    iconCar: {
        fontSize:27
    },
    ordersBadge: {
        position:'absolute',
        right:5,
        width:20,
        height:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:fifthColor
    },
    ordersBadgeText: {
        color:'#fff',
        fontSize:13
    },
    //user options
    userOptionsWrapper: {
        width: '100%',
        marginBottom:40,
        position:'relative',
        padding:20,
        paddingTop:0,
        marginTop:-40,
        flexDirection:'row'
    },
    listItem: {
        height: 55
    },
    UserOptionsButton: {
        marginLeft:-12,
        backgroundColor:'transparent',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        elevation:0
    },
    UserOptionsIcon: {
        fontSize:22
    },
    UserOptionsText: {
        fontFamily:primaryFont,
        fontSize:17,
    },
    //logout
    buttonLogoutWrapper: {
        padding:20,
        paddingTop:0,
        position:'relative',
        top:-20,
    },
    buttonLogout: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontFamily : primaryFont,
        height:60,
        borderRadius:50,
        backgroundColor:primaryColor,
    },
    buttonEditUser: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontFamily : primaryFont,
        height:60,
        borderRadius:50,
        marginTop:10,
        backgroundColor:fifthColor,
    },
    buttonTextColor: {
        color: '#fff',
        fontFamily:tertiaryFont,
        letterSpacing:1,
        fontSize:16
    },
    //sign up
    signUpWrapper: {
        marginBottom:20,
        marginTop:-40
    }
});