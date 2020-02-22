import { StyleSheet} from 'react-native'
import {
    fifthColor,
    tertiaryFont,
} from '../../styles/Variables'

export default Styles = StyleSheet.create({
    //Filter and Search in the header
    searchAndFilter: {
        flexDirection:'row',
    },
    searchIcon: {
        marginRight:6
    },
    filterIcon: {
        marginRight:20
    },
    //Products
    productWrapper: { 
        alignItems: 'center',
        flexDirection: 'row', 
        backgroundColor:'#fff',
        flexWrap:'wrap',
        justifyContent:'space-between',
        padding:6,
        paddingTop:15,
        paddingBottom:0,
        width:'100%',
        flex:1
    },
    productCard: {
        width: '46%',
        height:280,
        marginBottom:20,
        position:'relative',
        padding:0
    },
    productHeart: {
        position:'absolute',
        right:-10,
        bottom:70,
        zIndex:1,
        justifyContent:'center',
        alignItems:'center',
        width:80,
        height:80,
        elevation:4,
        shadowOpacity: 0.2,
        shadowRadius: 20,
        padding:0
    },
    productHeartIcon: {
        color:fifthColor
    },
    productImageWrapper: {
        backgroundColor:'#f5f5f5',
        borderRadius:6,
        overflow:'hidden'
    },
    productImage: {
        width: '100%', 
        height:200
    },
    productDescWrapper: {
        paddingLeft:8,
        paddingRight:8
    },
    productPrice: {
        fontFamily: tertiaryFont,
        paddingTop:0,
        marginTop:0,
        fontSize:15,
        color:fifthColor
    },
    productName: {
        fontSize:15,
        marginTop:12,
        paddingTop:8,
        lineHeight:17,
        fontFamily:tertiaryFont,
    },
    productHeartIcon: {
        
    },
    // Product Horizontal
    productHorizontalCard: {
        backgroundColor:'#fff',
        paddingTop:12,
        paddingBottom:12,
        paddingLeft:12,
        width:140
    },
    productHorizontalImageWrapper: {
        backgroundColor:'#f5f5f5',
        borderRadius:6
    },
    productHorizontalImage: {
        width: '100%', 
        height:150
    },
    productHorizontalHeart: {
        position:'absolute',
        right:-6,
        bottom:92,
        zIndex:1,
        justifyContent:'center',
        alignItems:'center',
        width:60,
        height:60,
        backgroundColor:'#fff',
        borderRadius:50,
        elevation:4,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "grey",
        shadowOpacity: 0.2,
        shadowRadius: 20,
        transform: [
            { scale: 0.5},
        ]
    },
    //spinner
    spinner: {
        marginLeft:'auto',
        marginRight:'auto',
        transform: [{translateY: 100}]
    }
});