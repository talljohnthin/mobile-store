import React from 'react'
import { View} from 'react-native'
import { Button } from 'native-base'
import Text from '../../utils/Text'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient';
import { linearDark, linearLight } from './../../styles/Variables'
import styles from './Styles'
import SharedStyles from '../../styles/SharedStyles'

export default ViewOrdersTotal = ({ total, status, orderId, cancelOrder, proceedOrder }) => {

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
        proceedOrder()
    }
    const handleReceiveOrder = () => {
        console.log('complete')
    }
    const handleCancelOrder = () => {
        cancelOrder()
    }

    const ProceedOrder = <TouchableOpacity activeOpacity={0.9} 
            style={{marginTop:20}}
            onPress={()=> handleProceedOrder()} >
                <LinearGradient
                    start={[0, 1]} end={[1, 0]}
                    colors={[linearDark, linearLight]}
                    style={[SharedStyles.linearButton]}>
                    <Text style={[styles.btnOrderText]}>PROCEED ORDER</Text>
                </LinearGradient>
        </TouchableOpacity>

    const CompleteOrder = <TouchableOpacity activeOpacity={0.9} 
            style={{marginTop:20}}
            onPress={()=> handleReceiveOrder()} >
                <LinearGradient
                    start={[0, 1]} end={[1, 0]}
                    colors={[linearDark, linearLight]}
                    style={[SharedStyles.linearButton]}>
                    <Text style={[styles.btnOrderText]}>Received Order</Text>
                </LinearGradient>
        </TouchableOpacity>

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
                { status === 'Shipped' && CompleteOrder}
                { status == 'On Ship' && <Text style={styles.OnShipText}>This order is now being prepared. Please dont forget to complete if the parcel arive. Thank you!</Text> }
                { status == 'Reviewed' && ProceedOrder }
                { status == 'Reviewed' && <Button style={[SharedStyles.buttonSolid, styles.btnCancel]} onPress={()=> handleCancelOrder()}><Text style={[SharedStyles.buttonTextColor, styles.btnOrderText]}>Cancel Order</Text></Button> }
                { status == 'On Review' && <Text style={styles.OnShipText}>This order is now being review for stocks availablity, will get back to you shortly.</Text> }
                { status == 'On Review' && <Button style={[SharedStyles.buttonSolid, styles.btnCancel]} onPress={()=> handleCancelOrder()}><Text style={[SharedStyles.buttonTextColor, styles.btnOrderText]}>Cancel Order</Text></Button> }
            </View>
        </View>
    )
}

