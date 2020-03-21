import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import {connect} from 'react-redux'
import { selectOrder } from './../../redux/actions/order/orderActions'
import Text from '../../utils/Text'
import Icon from 'react-native-vector-icons/AntDesign'

import styles from './Styles'

const Order = (props) => {
    const { index, selectOrder, navigation } = props
    const { id: orderId } = props.item
    const { order_date, status } = props.item.name
    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const dateSplitted = order_date.split("-")
    const orderDate = `${ months[dateSplitted[1]] } ${ dateSplitted[2] }, ${ dateSplitted[0] }`
    const handleSelectOrder = () => {
        selectOrder(orderId)
        navigation.navigate('ViewOrders')
    }
    return (
        <TouchableOpacity 
        activeOpacity={.6} 
        onPress={ ()=> handleSelectOrder()}>
            <View style={styles.orderCard}>
                <View style={styles.orderDescWrapper}>
                    <Text style={styles.orderItem}>{ index }</Text>
                    <Text style={styles.orderDate}>{ orderDate } / <Text style={[styles.orderStatus, status == 'Reviewed' && styles.orderStatusReady]}> { status } </Text></Text>
                </View>
                <View style={styles.orderArrowIconWrapper}>
                    <Icon name={'arrowright'} size={20} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const mapDispatchToProps = { selectOrder }

export default connect(null, mapDispatchToProps)(withNavigation(Order))


