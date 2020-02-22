import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import { View , SafeAreaView, FlatList} from 'react-native'
import Text from './../../utils/Text'
import Product from './Product'
import styles from './Styles'
import { Spinner } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import { withNavigation } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
    fifthColor
} from '../../styles/Variables'

const ProductFilterByCategory = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(props.products)
    }, [props.products])

    const handleCheckProducts = () => {
         if ( products.length > 0 ) {
             return  <FlatList
                numColumns={2} 
                columnWrapperStyle={{flex: 1,justifyContent: "space-around"}}
                data={products}
                renderItem={({ item }) => <Product item={item.name} id={item.id}  />}
                keyExtractor={item => item.id.toString()}
            />
         } else {
            return <Text>No product on this category at this time.</Text>
         }
    }

    const productList = props.loading ? <Spinner style={styles.spinner} color={fifthColor} /> : handleCheckProducts()


    return (
        <SafeAreaView style={ styles.productWrapper }>
           { productList }
        </SafeAreaView>
    )
}
ProductFilterByCategory.navigationOptions = ({navigation}) => ({
    title: `Category: ${ navigation.state.params.filterCategory }`,
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
        products:state.products.selectedCategories,
        loading: state.products.productLoading
    }
}

export default connect(mapStateToProps)(withNavigation(ProductFilterByCategory))

