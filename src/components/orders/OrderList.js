import React from 'react'
import {connect} from 'react-redux'
import { withNavigation } from 'react-navigation'
import { Spinner } from 'native-base'
import { getOrders } from '../../redux/actions/order/orderActions'
import  { SafeAreaView, FlatList } from 'react-native'
import Order from './Order'

import {
    fifthColor
} from '../../styles/Variables'

import styles from './Styles'
const OrderList = (props) => {
    const { orders } = props
    const sortedOrders = [...orders].sort((a, b) => b.name.timestamp - a.name.timestamp)
    const listOrders= props.loading ? <Spinner style={styles.spinner} color={fifthColor} /> : (
        <FlatList
            data={sortedOrders}
            renderItem={({ item, index }) => <Order item={item} index={ index + 1} />}
            keyExtractor={item => item.id.toString()}
        />
    )
    return (
        <SafeAreaView style={styles.orderWrapper}>
            { listOrders }
        </SafeAreaView>
    )
}
OrderList.navigationOptions = {
    headerShown: true,
    title:'Your Orders'
};


const mapStateToProps = state => {
    return {
        orders:state.orders.orders,
        ordersLoading: state.orders.ordersLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
      getOrders,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(OrderList))
