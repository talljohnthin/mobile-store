import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import { SafeAreaView, FlatList} from 'react-native'
import Text from './../../utils/Text'
import ProductFilter from './ProductFilter'
import { requestRestProductSegmentCategory } from './../../redux/actions/product/productActions'
import styles from './Styles'
import { Spinner } from 'native-base'
import { withNavigation } from 'react-navigation'

import {
    fifthColor
} from '../../styles/Variables'

const ProductFilterByCategory = (props) => {
    const { requestRestProductSegmentCategory, navigation } = props
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(props.products)
    }, [props.products])

    const handleOnScrolledEnd = () => {
       const filterCategory = navigation.state.params.filterCategory
       const segment = navigation.state.params.segment
       if(products.length) {
        requestRestProductSegmentCategory(segment, filterCategory, products.length + 30)
       }
    }
    const handleCheckProducts = () => {
         if ( products.length > 0 ) {
             return  <FlatList
                numColumns={2} 
                columnWrapperStyle={{flex: 1,justifyContent: "space-around"}}
                data={products}
                renderItem={({ item }) => <ProductFilter item={item.name} id={item.id}  />}
                keyExtractor={item => item.id.toString()}
                onEndReached={()=> handleOnScrolledEnd() }
                onEndReachedThreshold={0.5}
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
    title: `Category: ${ navigation.state.params.filterCategory }`
})

const mapStateToProps = state => {
    return {
        products:state.products.selectedCategories,
        loading: state.products.productLoading
    }
}

const mapDispatchToProps = { requestRestProductSegmentCategory }


export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ProductFilterByCategory))

