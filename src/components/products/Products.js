import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import { getAllProducts, showCartModal } from './../../redux/actions/product/productActions'
import { View , SafeAreaView, FlatList,StyleSheet} from 'react-native'
import Product from './Product'
import styles from './Styles'
import { Spinner } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import { withNavigation } from 'react-navigation'
import { TouchableOpacity} from 'react-native-gesture-handler';

const Products = (props) => {

    const [products, setProducts] = useState([])
    const [hasProduct, setHasProduct] = useState(false)
 
    useEffect(() => {
        if ( props.products < 1 ) {
            props.getAllProducts()
        }  
        setProducts(props.products)
    }, [props.products])

    useEffect(() => {
        Object.keys(props.product).length > 0 && setHasProduct(true)
    }, [props.product])


    const productList = props.loading ? <Spinner style={styles.spinner} color={fifthColor} /> : (
        <FlatList
            numColumns={2} 
            columnWrapperStyle={{flex: 1,justifyContent: "space-around"}}
            data={products}
            renderItem={({ item }) => <Product item={item.name} id={item.id} />}
            keyExtractor={item => item.id.toString()}
        />
    )

    return (
        <SafeAreaView style={styles.productWrapper}>
           { productList }
        </SafeAreaView>
    )
}
Products.navigationOptions = ({ navigation }) => ({
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
        products:state.products.products,
        product:state.products.product,
        showCartModalState: state.products.showCartModal,
        loading: state.products.productLoading
    }
}

const mapDispatchToProps = { getAllProducts, showCartModal }
export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Products))
