import React from 'react'
import {connect} from 'react-redux'
import { View, Image } from 'react-native'
import Text from '../../utils/Text'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/AntDesign'
import styles from './Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { GET_PRODUCT } from '../../redux/actions/product/productTypes'

const ProductHorizontal = (props) => {
    const { cover, productName } = props.item.name
    const productId = props.item.id
    const price = props.item.name.priceOptions[0].options[0].price
    const url = cover
    const renderImageSource = url ? {uri : url} : require('./../../../assets/images/img-not-loaded.jpg')
    
    const handleGetDetails = () => {
        if (productId) {
            props.getProduct(productId)
            props.navigation.navigate('ProductDetail')
        }
    }
    
    return (
        <View style={styles.productHorizontalCard}>
            <View style={styles.productHorizontalHeart}>
                <Icon style={styles.productHeartIcon} name={'hearto'} size={25} />
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => handleGetDetails()}>
                <View style={styles.productHorizontalImageWrapper}>
                    <Image 
                        source={ renderImageSource }
                        style={styles.productHorizontalImage}
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
      getProduct: ( productId ) =>  dispatch({type: GET_PRODUCT, payload: productId})
    }
  }

export default connect(null, mapDispatchToProps)(withNavigation(ProductHorizontal))
