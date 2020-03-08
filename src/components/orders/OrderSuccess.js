import React from 'react'
import { View} from 'react-native'
import { Button } from 'native-base'
import Text from '../../utils/Text'
import styles from './Styles'

const OrderSuccess = () => {
    return (
        <View style={styles.OrderSuccessWrapper}>
            <Text>Ordered Successfully!</Text>
            <Button><Text>Go to Orders</Text></Button>
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

