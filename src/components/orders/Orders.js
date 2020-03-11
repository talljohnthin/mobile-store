import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { Spinner } from 'native-base'
import { getOrders } from './../../redux/actions/order/orderActions'
import {SafeAreaView, FlatList} from 'react-native'
import Order from './Order'

import {
    fifthColor
} from '../../styles/Variables'

import styles from './Styles'
const Orders = (props) => {
    const [orders, setOrders] = useState([])


    const listOrders= props.loading ? <Spinner style={styles.spinner} color={fifthColor} /> : (
        <FlatList
            data={orders}
            renderItem={({ item }) => <Order item={item} segment={segment} />}
            keyExtractor={item => item.id.toString()}
        />
    )
    return (
        <SafeAreaView style={styles.categoryWrapper}>
            { listOrders }
        </SafeAreaView>
    )
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Orders)

