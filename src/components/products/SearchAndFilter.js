import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import { View , SafeAreaView, FlatList} from 'react-native'
import Product from './Product'
import styles from './Styles'
import { Spinner } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import { withNavigation } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Text from './../../utils/Text'

import {
    fifthColor
} from '../../styles/Variables'

const SearchAndFilter = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(props.products)
    }, [props.products])

    const isProductArray = Array.isArray(props.products)
    
    const renderList = isProductArray ? <FlatList
        numColumns={2} 
        columnWrapperStyle={{flex: 1,justifyContent: "space-around"}}
        data={products}
        renderItem={({ item }) => <Product item={item}  />}
        keyExtractor={item => item._id.toString()}
    /> : <Text>{props.products.message}</Text>

    const productList = props.loading ? <Spinner style={styles.spinner} color={fifthColor} /> : renderList

    return (
        <SafeAreaView style={ styles.productWrapper }>
           { productList }
        </SafeAreaView>
    )
}
SearchAndFilter.navigationOptions = ({ navigation }) => ({
    title: `Search: ${ navigation.state.params.searchKey }`,
    headerRight: () => (
        <View style={styles.searchAndFilter}>
            <TouchableOpacity activeOpacity={0.9} onPress={ () => navigation.navigate('Search')}>
                <Icon style={styles.searchIcon} name={'search1'} size={25} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={ () => navigation.navigate('Filter')}>
                <Icon style={styles.filterIcon} name={'filter'} size={25} />
            </TouchableOpacity>
        </View>
    )
})

const mapStateToProps = state => {
    return {
        products:state.products.searchAndFilters,
        loading: state.products.productLoading
    }
}

export default connect(mapStateToProps)(withNavigation(SearchAndFilter))

