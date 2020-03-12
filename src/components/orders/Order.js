import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import Text from '../../utils/Text'
import Icon from 'react-native-vector-icons/AntDesign'

import styles from './Styles'

const Order = (props) => {
    const { id } = props.item
    return (
        <TouchableOpacity activeOpacity={.6}>
            <View style={styles.orderCard}>
                <View style={styles.orderDescWrapper}>
                    <Text style={styles.orderName}>{ id }</Text>
                </View>
                <View style={styles.orderArrowIconWrapper}>
                    <Icon name={'arrowright'} size={20} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default withNavigation(Order)

