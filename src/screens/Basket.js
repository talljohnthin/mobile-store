import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/AntDesign'
import { orderProducts, orderReset } from './../redux/actions/order/orderActions'
import { emptyBasket } from './../redux/actions/basket/basketActions'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import {Root, Button, Form, Item, Input, Textarea, CheckBox } from 'native-base'
import { SafeAreaView, FlatList, Text, View, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import BasketProduct from '../components/basket/BasketProduct'
import BasketProductTotal from '../components/basket/BasketProductTotal'
import { Loader }  from './../loader/Loader'
import styles from '../components/basket/Styles'
import { showToast } from './../helpers'

import {
    primaryColor,
    fifthColor,
    primaryFont,
} from './../styles/Variables'

const mobileNumberValidtor = (number) => {
    const commaSpaceDot = /[.,\s]/g;
    const result = number.toString().replace(commaSpaceDot, '')
      if(result.length >=10 && result.length <= 11) {
          return true
    } else {
          return false
    }
}

const Basket = (props) => {
    const { basket, basketTotal, navigation, user, orderProducts, isSuccess, emptyBasket, orderReset } = props
    const [ fullName, setFullName] = useState('')
    const [ phone, setPhone] = useState('')
    const [ address, setAddress] = useState('')
    const [ notes, setNotes] = useState('')
    const [ useProfile, setUseProfile] = useState(false)
    const [ showModal, setShowModal ] = useState(false)
    const [ loading, setLoading] = useState(false)

    useEffect(()=> {
        if(isSuccess) {
           navigation.navigate('OrderSuccess')
           setLoading(false)
           setShowModal(false)
           emptyBasket()
        }
        return () => {
            orderReset()
        }
    }, [isSuccess])

    const handleShowModal = () => {
        setShowModal(!showModal)
    }

    const handleUseProfile = () => {
        if(user) {
            if(!useProfile) {
                setUseProfile(true)
                setFullName(user.name)
            } else {
                setUseProfile(false)
                setFullName('')
            }
        }
    }

    const handleOrderProducts = () => {
        const orderObj = {
            transaction_id : `${user.uid}${Date.parse(new Date())}${Math.random() * 100000}`.replace(".",""), 
            uid: user.uid,
            products : basket,
            shipping_fee:0,
            total_amount: basketTotal,
            shipping_details:{
                name: fullName,
                phone,
                address
            },
            status:"On Review",
            notes:"notes"
        }
        // check phone number
        if (mobileNumberValidtor(orderObj.shipping_details.phone) === false) {
            showToast("Ohh no.. Your mobile number is invalid!", "error")
            return
        }
        // check address
        if (orderObj.shipping_details.address.toString().trim().length <= 3) {
            showToast("Ohh no.. Please add your complete address!", "error")
            return
        }
        // check transaction id
        if (orderObj.transaction_id == '' || orderObj.transaction_id == null || orderObj.transaction_id === undefined) {
            showToast("System Error: Restart the app to continue!", "error")
            return
        }
        // check user id
        if (orderObj.uid == '' || orderObj.uid == null || orderObj.uid === undefined) {
            showToast("System Error: Restart the app to continue!", "error")
            return
        }
        // check if has order
        if (orderObj.total_amount == 0 || orderObj.total_amount === undefined || orderObj.total_amount == null) {
            showToast("System Error: Restart the app to continue!", "error")
            return
        }
        orderProducts(orderObj)
        setLoading(true)
    }

    const isBasketEmpty = () => {
        if (basket.length) {
            return<SafeAreaView style={styles.wishWrapper}>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 100 }}
                    data={basket}
                    renderItem={({ item, index }) => <BasketProduct item={item} index={index} />}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={() => <BasketProductTotal showModal={handleShowModal} navigation={ navigation }/>}
                />
                <Loader loading={ loading } />
                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={showModal}
                    onRequestClose={() => {
                        setShowModal(!showModal)
                    }}>
                    <Root>
                    <View>
                        <Form style={Styles.form}>
                            <Text style={Styles.formTitle}>Add shipping details: </Text>
                            <TouchableOpacity activeOpacity={0.8} onPress={()=> handleUseProfile()}>
                                <View style={Styles.checkWrapper}>
                                    <CheckBox checked={useProfile} color={fifthColor}/>
                                    <Text style={Styles.checkLabel}>Use profile data</Text>
                                </View>
                            </TouchableOpacity>
                            <Item style={Styles.item}>
                                <Icon name='user' style={Styles.IconStyle}/>
                                <Input value={ fullName } onChangeText={text => setFullName(text)} placeholder='Delivery Name' style={Styles.input}/>
                            </Item>
                            <Item style={Styles.item}>
                                <Icon name='phone' style={Styles.IconStyle}/>
                                <Input 
                                    value={ phone } 
                                    onChangeText={text => setPhone(text)} 
                                    placeholder='Phone Number' 
                                    style={Styles.input}
                                    underlineColorAndroid='transparent'  
                                    keyboardType={'numeric'}
                                />
                            </Item>
                            <Item style={Styles.item}>
                                <EvilIcons name='location' style={[Styles.IconStyle, Styles.IconStyleLocation]}/>
                                <Textarea 
                                    value={ address } 
                                    onChangeText={text => setAddress(text)} 
                                    placeholder='Delivery Address: Street / Barangay / City / Province' 
                                    style={Styles.textArea}
                                />
                            </Item>
                            <Item style={Styles.item}>
                                <EvilIcons name='pencil' style={[Styles.IconStyle, Styles.IconStyleLocation]}/>
                                <Textarea 
                                    value={ notes } 
                                    onChangeText={text => setNotes(text)} 
                                    placeholder='You can add notes here if you have questions about the order.' 
                                    style={Styles.textArea}
                                />
                            </Item>
                            <Button
                                style={styles.btnOrder}
                                onPress={() => handleOrderProducts() } >
                                <Text style={styles.btnOrderText}>Order </Text>
                            </Button>
                            <Button
                                style={styles.basketEmptyButton}
                                onPress={() => setShowModal(!showModal)} >
                                <Text style={styles.btnOrderText}>Cancel</Text>
                            </Button>
                        </Form>
                    </View>
                    </Root>
                </Modal>
            </SafeAreaView>
        } else {
            return <SafeAreaView style={styles.basketEmptyWrapper}>
                <Text style={styles.basketEmptyText}>Basket is empty. Choose a product by clicking the button below.</Text>
                <Button
                    style={styles.basketEmptyButton}
                    onPress={() => navigation.navigate('Explore')} >
                    <Text style={styles.basketEmptyButtonText}>Go to Products</Text>
                </Button>
            </SafeAreaView>
        }
    }

    return isBasketEmpty()
}

Basket.navigationOptions = {
    title: 'Products in Basket'
}

const mapStateToProps = state => {
    return {
        basket: state.basket.basket,
        basketTotal: state.basket.basketTotal,
        user: state.user.user,
        isSuccess: state.orders.isSuccess
    }
}

const mapDispatchToProps = { orderProducts, emptyBasket, orderReset }

export default connect(mapStateToProps, mapDispatchToProps)(Basket)

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


