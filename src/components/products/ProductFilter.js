import React from 'react'
import {connect} from 'react-redux'
import { View, Image } from 'react-native'
import { formatMoney } from '../../helpers'
import Text from '../../utils/Text'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/Feather'
import styles from './Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { getFilteredProduct, showCartModal } from '../../redux/actions/product/productActions'


const ProductFilter = (props) => {
    let { productName, priceOptions, cover } = props.item
  
    if (productName.length > 20) {
        productName = productName.slice(0, 18) + '...'
    }
    const productId = props.id
    const price = priceOptions[0].options[0].price
    const renderImageSource = cover ? {uri : cover} : require('./../../../assets/images/img-not-loaded.jpg')

    const handleGetDetails = () => {
        if (productId) {
            props.getFilteredProduct(productId)
            props.navigation.navigate('ProductDetail')
        }
    }
    
    return (
        <View style={styles.productCard}>
            <View style={styles.productHeart}>
                <TouchableOpacity activeOpacity={0.6} onPress={() => handleGetDetails() }>
                    <Icon style={styles.productHeartIcon} name={'shopping-cart'} size={24} />
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
            <TouchableOpacity activeOpacity={0.8} onPress={() => handleGetDetails() }>
                <View style={styles.productDescWrapper}>
                    <Text style={styles.productName}>{productName}</Text>
                    <Text style={styles.productPrice}>&#8369; {formatMoney(price)}</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    )
}

const mapStateToProps = state => {
    return {
        showCartModalState: state.products.showCartModal,
    }
}
const mapDispatchToProps = { getFilteredProduct, showCartModal }
export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ProductFilter))
