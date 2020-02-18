import React from 'react'
import { View, Image, Alert, TouchableOpacity } from 'react-native'
import { Button } from 'native-base'
import Text from '../../utils/Text'

import styles from './Styles'
import SharedStyles from './../../styles/SharedStyles'

const WishTotal = (props) => {
    return (
        <View style={styles.wishSumWrapper}>
            <View style={styles.wishShipping}>
                <Text style={styles.wishShippingText}>Shipping Fee will be added after product availablity verification.</Text>
            </View>
            <View style={styles.wishSum}>
                <Text style={styles.wishSumLabel}>Order Total:</Text>
                <Text style={styles.wishSumValue}>P 3,000</Text>
            </View>
            <View style={styles.buttonWrapper}>
                <Button style={[SharedStyles.buttonSolid, styles.btnOrder]}><Text style={[SharedStyles.buttonTextColor, styles.btnOrderText]}>Order</Text></Button>
            </View>
            
        </View>
    )
}

export default WishTotal
