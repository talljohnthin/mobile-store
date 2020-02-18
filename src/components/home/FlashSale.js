import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import { getAllProducts } from '../../redux/actions/product/productActions'
import { View, SafeAreaView, FlatList , TouchableOpacity } from 'react-native'
import ProductHorizontal from '../products/ProductHorizontal'
import { Spinner } from 'native-base'
import Icon from 'react-native-vector-icons/Entypo'
import { withNavigation } from 'react-navigation'
import Text from '../../utils/Text'
import styles from './Styles'

import {
    fifthColor
} from '../../styles/Variables'

const FlashSale = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        props.getAllProducts()
    },[])

    useEffect(() => {
        setProducts(props.products)
    }, [props.products])
    
    const productList = props.loading ? <Spinner style={styles.spinner} color={fifthColor} /> : (
        <FlatList
            horizontal
            ItemSeparatorComponent={
                () => <View style={{ width: 0, backgroundColor: '#fff' }}/>
            }
            data={products}
            renderItem={({ item }) => <ProductHorizontal item={item}  />}
            keyExtractor={item => item.id.toString()}
        />
    )

    return (
        <SafeAreaView style={styles.productWrapper}>
            <View style={styles.productTitleWrapper}>
                <Text style={styles.productTitle}>
                    <Icon style={styles.productHeartIcon} name={'flash'} size={20} />
                    Flash Sale
                    </Text>
                <TouchableOpacity activeOpacity={0.8}
                    onPress={ () => props.navigation.navigate('Products')}>
                    <Text style={styles.productShowLink}>See All</Text>
                </TouchableOpacity>
            </View>
            { productList }
        </SafeAreaView>
    )
}

const mapStateToProps = state => {
    return {
        products:state.products.products,
        loading: state.products.productLoading
    }
}

const mapDispatchToProps = { getAllProducts }

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(FlashSale))
