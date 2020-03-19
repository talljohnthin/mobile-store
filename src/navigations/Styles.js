import { StyleSheet } from 'react-native'
import { fifthColor, primaryColor } from '../styles/Variables';

export default Styles = StyleSheet.create({
    userBadge: { 
        position:'absolute',
        right:-13,
        top:-5,
        height:21,
        paddingTop:2,
        borderRadius:21,
        backgroundColor:fifthColor
    },
    userBadgeCount: {
        color:primaryColor,
        fontSize:12,
        paddingLeft:1,
        paddingRight:1,
        top:-2,
        position:"relative"
    }
});