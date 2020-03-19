import React from 'react'
import {connect} from 'react-redux'
import { View, Image, TouchableOpacity } from 'react-native'
import Text from '../../utils/Text'
import { addQuantity, subtractQuantity, removeToBasket, sumProductsInBasket } from './../../redux/actions/basket/basketActions'
import Icon from 'react-native-vector-icons/AntDesign'

import styles from './../basket/Styles'

const OrdersProduct = (props) => {

    const { name, price, variation, option, cover, qty } = props.item
    if (name.length > 20) {
        name = title.slice(0, 25) + '...'
    }
    const url = cover

    const formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
        try {
          decimalCount = Math.abs(decimalCount);
          decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
          const negativeSign = amount < 0 ? "-" : "";
          let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
          let j = (i.length > 3) ? i.length % 3 : 0;
          return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        } catch (e) {
          console.log(e)
        }
    };
    const formatedPrice = formatMoney(price)

    const handleAddQty = () => {
        if(props.index !== null || props.index !== undefined) {
           // props.addQuantity(props.index)
           // props.sumProductsInBasket()
        }
    }
    const handleSubtractQty = () => {
        if(props.index !== null || props.index !== undefined) {
           // props.subtractQuantity(props.index)
           // props.sumProductsInBasket()
        }
    }
    const handleRemove = () => {
        if(props.index !== null || props.index !== undefined) {
           // props.removeToBasket(props.index)
           // props.sumProductsInBasket()
        }
    }
    return (
        <View style={styles.wishCard}>
            <View style={styles.wishImageWrapper}>
                <Image
                    source={{ uri: url, }}
                    style={styles.wishImage}
                />
            </View>
            <View style={styles.wishDescWrapper}>
                <View style={styles.wishTopWrapper}>
                    <TouchableOpacity style={styles.wishRemove} onPress={()=> handleRemove() }><Icon style={styles.wishRemoveIcon} name={'close'} size={20} /></TouchableOpacity>
                    <Text style={styles.wishName}>{name}</Text>
                    <Text style={styles.wishVariation}>{variation}</Text>
                    <Text style={styles.wishOption}>{option}</Text>
                </View>
                <View style={styles.wishButtomWrapper}>
                    <Text style={styles.wishTotal}>&#8369; {formatedPrice}</Text>
                    <View style={styles.wishCounter}>
                        <TouchableOpacity onPress={()=> handleSubtractQty()}><Icon style={styles.wishMinus} name={'minuscircleo'} size={20} /></TouchableOpacity>
                        <Text style={styles.wishCount}>{qty}</Text>
                        <TouchableOpacity onPress={()=> handleAddQty()}><Icon style={styles.wishPlus} name={'pluscircleo'} size={20} /></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const mapDispatchToProps = { addQuantity, subtractQuantity, removeToBasket, sumProductsInBasket }

export default connect(null, mapDispatchToProps)(OrdersProduct)
