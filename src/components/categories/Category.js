import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import { withNavigation } from 'react-navigation'
import { requestProductSegmentCategory } from './../../redux/actions/product/productActions'
import Text from '../../utils/Text'
import Icon from 'react-native-vector-icons/AntDesign'

import styles from './Styles'

const Category = (props) => {
    let category_name = props.item.category_name
    const categoryId = props.item._id
    const segmentId = props.segmentId
    if (category_name.length > 20) {
        category_name = category_name.slice(0, 25) + '...'
    }
    const url = props.item.photos[0].url

    const handleGetProducts = () => {
        props.requestProductSegmentCategory(segmentId, categoryId)
        props.navigation.navigate('ProductFilterByCategory', { filterCategory: category_name })
    }
    return (
        <TouchableOpacity activeOpacity={.8} onPress={handleGetProducts}>
            <View style={styles.categoryCard}>
                <View style={styles.categoryImageWrapper}>
                    <Image
                        source={{ uri: url, }}
                        style={styles.categoryImage}
                    />
                </View>
                <View style={styles.categoryDescWrapper}>

                    <Text style={styles.categoryName}>{category_name}</Text>
                    <Text style={styles.categoryTotal}>2000 items</Text>
                </View>
                <View style={styles.categoryArrowIconWrapper}>
                    <Icon name={'arrowright'} size={20} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const mapDispatchToProps = { requestProductSegmentCategory }

export default connect(null, mapDispatchToProps)(withNavigation(Category))

