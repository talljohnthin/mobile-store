import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import { withNavigation } from 'react-navigation'
import { requestProductSegmentCategory, resetGetFilteredProductSize } from './../../redux/actions/product/productActions'
import Text from '../../utils/Text'
import Icon from 'react-native-vector-icons/AntDesign'

import styles from './Styles'

const Category = (props) => {
    let category_name = props.item.name.name
    const categoryId = props.item.id
    const segment = props.segment
    const index = props.index
    if (category_name.length > 20) {
        category_name = category_name.slice(0, 25) + '...'
    }
    const handleGetProducts = () => {
        props.resetGetFilteredProductSize()
        props.requestProductSegmentCategory(segment, category_name)
        props.navigation.navigate('ProductFilterByCategory', { filterCategory: category_name, segment: segment })
    }
    return (
        <TouchableOpacity activeOpacity={.6} onPress={handleGetProducts}>
            <View style={[styles.categoryCard, index % 2 === 0 && {backgroundColor:'#fbfbfb'}]}>
                <View style={styles.categoryDescWrapper}>
                    <Text style={styles.categoryName}>{category_name}</Text>
                </View>
                <View style={styles.categoryArrowIconWrapper}>
                    <Icon name={'arrowright'} size={20} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const mapDispatchToProps = { requestProductSegmentCategory, resetGetFilteredProductSize }

export default connect(null, mapDispatchToProps)(withNavigation(Category))

