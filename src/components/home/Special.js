import React from 'react'
import { View, Image } from 'react-native'
import styles from './Styles'

const Special = (props) => {
    const { url } = props.item.name
    return (
        <View>
            <Image
                source={ url !== undefined ? {uri: url } : require('./../../../assets/images/img-not-loaded.jpg') }
                style={ styles.specialImage}
            />
        </View>
    )
}
export default Special
