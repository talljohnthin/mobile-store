import React from 'react'
import { View} from 'react-native'
import { Button } from 'native-base'
import Text from '../../utils/Text'

import styles from './Styles'
import SharedStyles from '../../styles/SharedStyles'

export default ViewOrdersTotal = ({ total, status, orderId, cancelOrder }) => {

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

    const formatedValue = formatMoney(total)

    const handleProceedOrder = () => {
        console.log('proceed')
    }
    const handleCancelOrder = () => {
        cancelOrder()
    }
    return (
        <View style={styles.orderSumWrapper}>
            <View style={styles.orderShipping}>
                <Text style={styles.orderShippingText}>Shipping Fee will be added after product availablity verification.</Text>
            </View>
            <View style={styles.orderSum}>
                <Text style={styles.orderSumLabel}>Order Total:</Text>
                <Text style={styles.orderSumValue}>&#8369; {formatedValue}</Text>
            </View>
            <View style={styles.buttonWrapper}>
                { status !== 'On Review' && <Button style={[SharedStyles.buttonSolid, styles.btnOrder]} onPress={()=> handleProceedOrder()}><Text style={[SharedStyles.buttonTextColor, styles.btnOrderText]}>Proceed Order</Text></Button>}
                <Button style={[SharedStyles.buttonSolid, styles.btnCancel]} onPress={()=> handleCancelOrder()}><Text style={[SharedStyles.buttonTextColor, styles.btnOrderText]}>Cancel Order</Text></Button>
            </View>
        </View>
    )
}

