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
    //search input
    searchItem: {
        borderRadius:50,
        marginTop:30
    },
    input: {
        fontFamily:primaryFont,
        fontSize:18,
        paddingLeft:20,
        paddingRight: 6
    },
    searchIcon: {
        paddingRight:16
    },
    //search guess
    searchGuess: {
        paddingLeft:0,
        marginLeft:0
    },
    searchGuessItem: {
        paddingLeft:0,
        marginLeft:0,
        fontSize:15
    },
    searchGuessItemText: {
        fontSize:17
    },
    //recent search
    recentSearchTitle: {
        fontFamily:tertiaryFont,
        fontSize:20,
        marginTop:20,
        marginBottom:20
    },
    recentSearchList: {
        flexDirection:'row',
        flexWrap:'wrap'
    },
    recentSearchItem: {
        marginRight:8,
        borderWidth:1,
        borderColor:'#efefef',
        lineHeight:18,
        padding:20,
        paddingTop:14,
        borderRadius:50,
        backgroundColor:'#efefef',
        paddingBottom:0,
        marginBottom:10,
        fontSize:17
    }
});