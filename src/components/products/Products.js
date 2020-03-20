import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import { getAllProducts, getRestProducts, showCartModal } from './../../redux/actions/product/productActions'
import { View , SafeAreaView, FlatList,StyleSheet} from 'react-native'
import Product from './Product'
import styles from './Styles'
import { Spinner } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import { withNavigation } from 'react-navigation'
import { TouchableOpacity} from 'react-native-gesture-handler';

import {
    fifthColor,
    tertiaryFont,
} from '../../styles/Variables'

const Products = (props) => {
    const [products, setProducts] = useState([])
    const [hasProduct, setHasProduct] = useState(false)
    let isMounted = false
    useEffect(() => {
        isMounted = true
        if (isMounted) {
            if ( props.products < 1 ) {
                props.getAllProducts()
            }  
            setProducts(props.products)
        }
        return ()=> {
            isMounted = false
        }
    }, [props.products])

    useEffect(() => {
        Object.keys(props.product).length > 0 && setHasProduct(true)
    }, [props.product])

    const handleOnScrolledEnd = () => {
        if(products.length && products.length < props.productsTotal && props.productsTotal !== 0) {
            props.getRestProducts(products.length + 50)
        }
    }
    const productList = props.loading ? <Spinner style={styles.spinner} color={fifthColor} /> : (
        <FlatList
            numColumns={2} 
            columnWrapperStyle={{flex: 1,justifyContent: "space-around"}}
            data={products}
            renderItem={({ item }) => <Product item={item.name} id={item.id} />}
            keyExtractor={item => item.id.toString()}
            onEndReached={()=> handleOnScrolledEnd() }
            onEndReachedThreshold={0.5}
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
        productsTotal:state.products.productsTotal,
        showCartModalState: state.products.showCartModal,
        loading: state.products.productLoading
    }
}

const mapDispatchToProps = { getAllProducts, getRestProducts, showCartModal }
export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Products))
