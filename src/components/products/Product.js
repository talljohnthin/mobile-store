import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import { View, Image, StyleSheet } from 'react-native'
import Text from '../../utils/Text'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GET_PRODUCT, SHOW_WISH_MODAL } from './../../redux/actions/product/productTypes'

const Product = (props) => {
    let productName = props.item.product_name
  
    if (productName.length > 20) {
        productName = productName.slice(0, 18) + '...'
    }
    const productFeatured = props.item.photos.filter((product) => {
        return product.featured === true
    })
    const productId = props.item._id
    const price = props.item.price_options[0].options[0].price
    const url = productFeatured && productFeatured[0].url
    const renderImageSource = url ? {uri : url} : require('./../../../assets/images/img-not-loaded.jpg')
    
    const handleGetDetails = () => {
        if (productId) {
            props.getProduct(productId)
            props.navigation.navigate('ProductDetail')
        }
    }
    
    const handleWishModal = () => {
        if (productId) {
            props.getProduct(productId)
            props.showWishModal(true)
        }
    }
    return (
        <View style={styles.productCard}>
            
            <View style={styles.productHeart}>
                <TouchableOpacity activeOpacity={0.6} onPress={() => handleWishModal() }>
                    <Icon style={styles.productHeartIcon} name={'hearto'} size={25} />
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity activeOpacity={0.8} onPress={() => handleGetDetails() }>
                <View style={styles.productImageWrapper}>
                    <Image
                        source={ renderImageSource }
                        style={styles.productImage}
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.productDescWrapper}>
                <Text style={styles.productName}>{productName}</Text>
                <Text style={styles.productPrice}>&#8369;{price}</Text>
            </View>
        </View>
    )
}


const mapDispatchToProps = dispatch => {
    return {
      showWishModal: ( data ) =>  dispatch({type: SHOW_WISH_MODAL, payload: data }),
      getProduct: ( id ) =>  dispatch({type: GET_PRODUCT, payload: id})
    }
}

export default connect(null, mapDispatchToProps)(withNavigation(Product))
