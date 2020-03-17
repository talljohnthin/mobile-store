import React from 'react'
import { connect } from 'react-redux'
import { formatMoney } from './../../helpers'
import { View} from 'react-native'
import { Button } from 'native-base'
import Text from '../../utils/Text'
import { showToast } from './../../helpers'

import styles from './Styles'
import SharedStyles from '../../styles/SharedStyles'

const BasketProductTotal = (props) => {
    const {basketTotal, showModal, user, navigation} = props

    const handleContinueOrder = () => {
        
        if(user.isLogin) {
            showModal()
        } else {
           showToast('Sign-In to continue', 'error')
           navigation.navigate('Login')
        }
    }
    return (
        <View style={styles.wishSumWrapper}>
            <View style={styles.wishShipping}>
                <Text style={styles.wishShippingText}>Shipping Fee will be added after product availablity verification.</Text>
            </View>
            <View style={styles.wishSum}>
                <Text style={styles.wishSumLabel}>Order Total:</Text>
                <Text style={styles.wishSumValue}>&#8369; {formatMoney(basketTotal)}</Text>
            </View>
            <View style={styles.buttonWrapper}>
                <Button style={[SharedStyles.buttonSolid, styles.btnOrder]} onPress={()=> handleContinueOrder()}><Text style={[SharedStyles.buttonTextColor, styles.btnOrderText]}>Order Now</Text></Button>
            </View>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        basketTotal:state.basket.basketTotal,
        user: state.user
    }
}

export default connect(mapStateToProps)(BasketProductTotal)

