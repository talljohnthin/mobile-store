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
                    <Text style={styles.wishName}>{name}</Text>
                    <Text style={styles.wishVariation}>{variation}</Text>
                    <Text style={styles.wishOption}>{option}</Text>
                </View>
                <View style={styles.wishButtomWrapper}>
                    <Text style={styles.wishTotal}>&#8369; {formatedPrice}</Text>
                </View>
            </View>
        </View>
    )
}

const mapDispatchToProps = { addQuantity, subtractQuantity, removeToBasket, sumProductsInBasket }

export default connect(null, mapDispatchToProps)(OrdersProduct)
