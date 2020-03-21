import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import { Badge, Text } from 'native-base'
import { fifthColor, primaryColor } from '../styles/Variables';

const TotalInBasketAndOrders = (props) => {
    const { basket, orders, isLogin } = props
    const total = basket.length + orders.filter(e => e.name.status !== 'Received').length
    const basketTotal = basket.length

    const totalTemplate = total <= 0 ? null : <Badge warning style={styles.userBadge}>
        <Text style={styles.userBadgeCount}>{ total }</Text>
    </Badge>

    const basketTemplate = basketTotal <= 0 ? null : <Badge warning style={styles.userBadge}>
        <Text style={styles.userBadgeCount}>{ basketTotal }</Text>
    </Badge>

    return isLogin ? totalTemplate : basketTemplate;
}
  
const mapStateToProps = state => {
    return {
        basket:state.basket.basket,
        orders:state.orders.orders,
        isLogin: state.user.isLogin
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
        color:'#fff',
        fontSize:12,
        paddingLeft:1,
        paddingRight:1,
        top:-4,
        position:"relative"
    }
});