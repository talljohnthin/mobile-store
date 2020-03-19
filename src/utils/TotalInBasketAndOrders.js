import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { Badge, Text } from 'native-base'
import { fifthColor, primaryColor } from '../styles/Variables';

const TotalInBasketAndOrders = () => {
    return <Badge warning style={styles.userBadge}>
    <Text style={styles.userBadgeCount}>3</Text>
  </Badge>
}
  
const mapStateToProps = state => {
    return {
        basket:state.basket.basket,
        orders:state.orders.orders
    }
}
  
export default connect(mapStateToProps)(TotalInBasketAndOrders)

const styles = StyleSheet.create({
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