import React from 'react'
import { View } from 'react-native'
import { Button } from 'native-base'
import Text from '../../utils/Text'
import styles from './Styles'
import { withNavigation  } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { LinearGradient } from 'expo-linear-gradient';
import { linearDark, linearLight } from './../../styles/Variables'

import SharedStyles from './../../styles/SharedStyles'

const OrderSuccess = ({ navigation }) => {
    return (
        <View style={styles.OrderSuccessWrapper}>
            <Text style={styles.OrderSuccessText}>Your order is Successfull!</Text>
            <TouchableOpacity activeOpacity={0.9}
                style={{marginTop:10}}
                onPress={() => navigation.navigate("OrderList")}>
                    <LinearGradient
                        start={[0, 1]} end={[1, 0]}
                        colors={[linearDark, linearLight]}
                        style={[SharedStyles.linearButton]}>
                        <Text style={styles.OrderSuccessButtonText}>View Orders</Text>
                    </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}
OrderSuccess.navigationOptions = {
    title: 'Order Success'
}
export default withNavigation(OrderSuccess)
