import React from 'react'
import {connect} from 'react-redux'
import { View } from 'react-native'
import { Badge } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import Text from '../../utils/Text'
import { withNavigation } from 'react-navigation';

import styles from './Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Orders = (props) => {
    const { basket, orders } = props
    const basketBadgeCount = basket.length
    const ordersBadgeCount = orders.filter(e => e.name.status !== 'Received').length
    return (
        <View style={styles.ordersWrapper}>
            <Text  style={styles.orderTitle} >My Order</Text>
            <View style={styles.ordersStatusWrapper} >
                <TouchableOpacity activeOpacity={.8} onPress={ () => props.navigation.navigate('Basket')}>
                    <View style={styles.ordersStatus}>
                        <Icon style={styles.iconBag} name="shoppingcart"/>
                        <Text style={styles.ordersLabel}> Basket </Text>
                        { 
                            basketBadgeCount >= 1 ? <Badge warning style={styles.ordersBadge}>
                                <Text style={styles.ordersBadgeText}>{basketBadgeCount}</Text>
                            </Badge> : null
                        }
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={!props.isLogin && {display:'none'}} onPress={ () => props.navigation.navigate('OrderList')}>
                    <View style={styles.ordersStatus} >
                        <Icon style={styles.iconPackage} name="inbox"/>
                        <Text style={styles.ordersLabel} > Orders </Text>
                        { 
                            ordersBadgeCount >= 1 ? <Badge warning style={styles.ordersBadge}>
                                <Text style={styles.ordersBadgeText}>{ordersBadgeCount}</Text>
                            </Badge> : null
                        }
                        
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        isLogin: state.user.isLogin,
        basket:state.basket.basket,
        orders: state.orders.orders
    }
}

export default connect(mapStateToProps)(withNavigation(Orders))
