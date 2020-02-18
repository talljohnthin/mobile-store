import React from 'react'
import { View, Image, Alert, TouchableOpacity } from 'react-native'
import Text from '../../utils/Text'
import Icon from 'react-native-vector-icons/AntDesign'

import styles from './Styles'

const Wish = (props) => {
    let title = props.item.title
    if (title.length > 20) {
        title = title.slice(0, 25) + '...'
    }
    const url = props.item.url
    return (
        <View style={styles.wishCard}>
            <View style={styles.wishImageWrapper}>
                <Image
                    source={{ uri: url, }}
                    style={styles.wishImage}
                />
            </View>
            <View style={styles.wishDescWrapper}>
                <View style={styles.wishTopWrapper}>
                    <Text style={styles.wishName}>{title}</Text>
                    <Text style={styles.wishVariation}>Red</Text>
                    <Text style={styles.wishOption}>Small</Text>
                </View>
                <View style={styles.wishButtomWrapper}>
                    <Text style={styles.wishTotal}>P20</Text>
                    <View style={styles.wishCounter}>
                        <TouchableOpacity onPress={()=> console.log('minus')}><Icon style={styles.wishMinus} name={'minuscircleo'} size={20} /></TouchableOpacity>
                        <Text style={styles.wishCount}>2</Text>
                        <TouchableOpacity onPress={()=> console.log('plus')}><Icon style={styles.wishPlus} name={'pluscircleo'} size={20} /></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Wish
