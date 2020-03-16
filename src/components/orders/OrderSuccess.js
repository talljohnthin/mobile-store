import React from 'react'
import { View } from 'react-native'
import { Button } from 'native-base'
import Text from '../../utils/Text'
import styles from './Styles'
import { withNavigation  } from 'react-navigation'

const OrderSuccess = ({ navigation }) => {
    return (
        <View style={styles.OrderSuccessWrapper}>
            <Text style={styles.OrderSuccessText}>Your order is Successfull!</Text>
            <Button 
                style={styles.OrderSuccessButton}
                onPress={() => navigation.navigate("OrderList")}
                >
                <Text style={styles.OrderSuccessButtonText}>View Orders</Text>
            </Button>
        </View>
    )
}
OrderSuccess.navigationOptions = {
    title: 'Order Success'
}
export default withNavigation(OrderSuccess)
