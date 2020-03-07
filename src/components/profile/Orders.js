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
    return (
        <View style={styles.ordersWrapper}>
            <Text  style={styles.orderTitle} >My Order</Text>
            <View style={styles.ordersStatusWrapper} >
                <TouchableOpacity activeOpacity={.8} onPress={ () => props.navigation.navigate('Basket')}>
                    <View style={styles.ordersStatus}>
                        <Icon style={styles.iconBag} name="shoppingcart"/>
                        <Text style={styles.ordersLabel}> Basket </Text>
                        <Badge warning style={styles.ordersBadge}>
                            <Text style={styles.ordersBadgeText}>2</Text>
                        </Badge>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={!props.isLogin && {display:'none'}}>
                    <View style={styles.ordersStatus} >
                        <Icon style={styles.iconPackage} name="inbox"/>
                        <Text style={styles.ordersLabel} > Orders </Text>
                        <Badge warning style={styles.ordersBadge}>
                            <Text style={styles.ordersBadgeText}>2</Text>
                        </Badge>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={!props.isLogin && {display:'none'}}>
                    <View style={styles.ordersStatus} >
                        <Icon style={styles.iconCar} name="rocket1"/>
                        <Text style={styles.ordersLabel} > Shipped </Text>
                        <Badge warning style={styles.ordersBadge}>
                            <Text style={styles.ordersBadgeText}>2</Text>
                        </Badge>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        isLogin: state.user.isLogin
    }
}

export default connect(mapStateToProps)(withNavigation(Orders))
