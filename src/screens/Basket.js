import React from 'react'
import {connect} from 'react-redux'
import { Button } from 'native-base'
import {SafeAreaView, FlatList, Text, View} from 'react-native'
import BasketProduct from '../components/basket/BasketProduct'
import BasketProductTotal from '../components/basket/BasketProductTotal'

import styles from '../components/basket/Styles'
const Basket = (props) => {
    const { basket, navigation } = props
    const isBasketEmpty = () => {
        if (basket.length) {
            return <SafeAreaView style={styles.wishWrapper}>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 100}}
                    data={basket}
                    renderItem={({ item, index }) => <BasketProduct item={item} index={index} />}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent = { () => <BasketProductTotal/>}
                />
             </SafeAreaView>
        } else {
            return  <SafeAreaView style={styles.basketEmptyWrapper}>
                <Text style={styles.basketEmptyText}>Basket is empty. Choose a product by clicking the button below.</Text>
                <Button 
                    style={styles.basketEmptyButton}
                    onPress={ () => navigation.navigate('Explore') } >
                    <Text style={styles.basketEmptyButtonText}>Go to Products</Text>
                </Button>
            </SafeAreaView>
        }
    }
    return isBasketEmpty()
}

Basket.navigationOptions = {
    title: 'Products in Basket'
}

const mapStateToProps = state => {
    return {
        basket: state.basket.basket
    }
}

export default connect(mapStateToProps)(Basket)


