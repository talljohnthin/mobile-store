import React, {useState} from 'react'
import { connect } from 'react-redux'
import { SafeAreaView, FlatList, StyleSheet, Text } from 'react-native'
import Modal, { ModalContent, ModalFooter, ModalButton } from 'react-native-modals';
import { deleteOrder } from './../../redux/actions/order/orderActions'
import OrdersProduct  from './OrdersProduct'
import { withNavigation } from 'react-navigation'
import ViewOrdersTotal from './ViewOrdersTotal'
import styles from './../basket/Styles'

import {
    primaryColor,
    fifthColor,
    primaryFont,
} from './../../styles/Variables'

const ViewOrders = ({selectedOrderId, orders, navigation}) => {
    const [showModal, setShowModal] = useState(false)
    const listOrders = orders.filter(e => e.id === selectedOrderId)
    let products = []
    let total = 0
    let status = "On Review"
    products = listOrders.length && listOrders[0].name.products
    total = listOrders.length && listOrders[0].name.total_amount
    status = listOrders.length && listOrders[0].name.status

    const handleCancelOrder = () => {
        setShowModal(!showModal)
    }
    const handleDeleteOrder = () => {
        if (selectedOrderId) {
            deleteOrder(selectedOrderId)
            navigation.navigate('OrderList')
            setShowModal(!showModal)
        }
        console.log(orders)
    }
    return <SafeAreaView style={styles.wishWrapper}>
        <Modal
            visible={showModal}
            footer={
            <ModalFooter>
                <ModalButton
                text="Cancel"
                onPress={() => setShowModal(!showModal)}
                />
                <ModalButton
                text="Ok"
                onPress={() => handleDeleteOrder() }
                />
            </ModalFooter>
            }
        >
            <ModalContent>
                <Text> Are you sure you want to cancel this order? </Text>
            </ModalContent>
        </Modal>
        <FlatList
            contentContainerStyle={{ paddingBottom: 100 }}
            data={products}
            renderItem={({ item, index }) => <OrdersProduct item={item} index={index} />}
            keyExtractor={(item) => item.id.toString()}
            ListFooterComponent={()=> <ViewOrdersTotal 
                total={total} 
                status={status} 
                orderId={selectedOrderId}
                cancelOrder = { ()=> handleCancelOrder() }
            /> }
        />
    </SafeAreaView>
}

ViewOrders.navigationOptions = {
    title: 'View Orders'
}

const mapStateToProps = state => {
    return {
        orders:state.orders.orders,
        selectedOrderId: state.orders.selectedOrderId
    }
}

const mapDispatchToProps = { deleteOrder }

export default connect(mapStateToProps)(withNavigation(ViewOrders))

const Styles = StyleSheet.create({
    //form
    form : {
        padding:20
    },
    // input item
    item : {
        paddingBottom:4,
        marginLeft:0,
        borderBottomWidth:1,
        borderColor:'#eee',
        justifyContent:'flex-start',
        alignItems: 'flex-start'
    },
    // inputs 
    input : {
        fontFamily : primaryFont,
        fontSize : 17,
        marginTop:8,
    },
    textArea: {
        height:140,
        paddingLeft:0,
        paddingTop:8,
        width:'100%',
        fontFamily : primaryFont,
        fontSize : 17,
        marginTop:8,
    },
    IconStyle: {
        color:primaryColor,
        marginTop:17,
        fontSize:22,
        marginRight:10
    },
    IconStyleLocation: {
        fontSize:30,
        marginRight:2
    },
    formTitle: {
        fontFamily: primaryFont,
        lineHeight:30,
        marginTop:30,
        fontSize:22
    },
    checkWrapper: {
        flexDirection:'row',
        alignItems:'center',
        marginLeft:-10
    },
    checkLabel: {
        fontFamily : primaryFont,
        fontSize : 17,
        marginLeft:15,
        position:'relative',
        top:2,
    }
})


