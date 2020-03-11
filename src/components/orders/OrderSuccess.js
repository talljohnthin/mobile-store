import React from 'react'
import { View } from 'react-native'
import { Button } from 'native-base'
import Text from '../../utils/Text'
import styles from './Styles'

export default OrderSuccess = ({ navigation }) => {
    return (
        <View style={styles.OrderSuccessWrapper}>
            <Text style={styles.OrderSuccessText}>Your order is Successfull!</Text>
            <Button 
                style={styles.OrderSuccessButton}
                onPress={() => navigation.navigate("Orders")}
                >
                <Text style={styles.OrderSuccessButtonText}>View Orders</Text>
            </Button>
        </View>
    )
}


