import React from 'react'
import { connect } from 'react-redux'
import { View} from 'react-native'
import { Button } from 'native-base'
import Text from '../../utils/Text'

import styles from './Styles'
import SharedStyles from '../../styles/SharedStyles'

const BasketProductTotal = ({basketTotal}) => {
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
    const formatedValue = formatMoney(basketTotal)
    return (
        <View style={styles.wishSumWrapper}>
            <View style={styles.wishShipping}>
                <Text style={styles.wishShippingText}>Shipping Fee will be added after product availablity verification.</Text>
            </View>
            <View style={styles.wishSum}>
                <Text style={styles.wishSumLabel}>Order Total:</Text>
                <Text style={styles.wishSumValue}>&#8369; {formatedValue}</Text>
            </View>
            <View style={styles.buttonWrapper}>
                <Button style={[SharedStyles.buttonSolid, styles.btnOrder]}><Text style={[SharedStyles.buttonTextColor, styles.btnOrderText]}>Order Now</Text></Button>
            </View>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        basketTotal:state.basket.basketTotal
    }
}

export default connect(mapStateToProps)(BasketProductTotal)

