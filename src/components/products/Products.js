import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import { getAllProducts } from './../../redux/actions/product/productActions'
import { View , SafeAreaView, FlatList, Button, StyleSheet, ScrollView} from 'react-native'
import Modal, { ModalContent, ModalTitle, ModalFooter, ModalButton } from 'react-native-modals';
import Product from './Product'
import styles from './Styles'
import { Spinner } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import { withNavigation } from 'react-navigation'
import { TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../../utils/Text'
import { SHOW_WISH_MODAL } from './../../redux/actions/product/productTypes'

import {
    primaryColor,
    fifthColor,
    primaryFont,
    fourthFont,
} from '../../styles/Variables'

const Products = (props) => {
    const [showDetailModal, setShowDetailModal] = useState(false)
    const [products, setProducts] = useState([])
    const {price_options, product_name} = props.product
    const variations = price_options || []
    const [variationOption, setVariationOption] = useState([])
    const [selectedVariation, setSelectedVariation] = useState(0)
    const [selectedVariationOption, setSelectedVariationOption] = useState('')
    const [price, setPrice] = useState(0)

    const handleSelectedVariation = index => {
        if ( index !== undefined && index !== '') {
            setVariationOption(price_options[index].options)
            setSelectedVariation(index)
        }
    }

    const handleSelectedOptions = item => {
        if (item) setSelectedVariationOption(item)
        if (item) setPrice(item.price)
    }

    const renderVariation = () => {
        if (variations.length > 0) {
            return variations.map((item, index) => {
                return <Text
                style={[
                    inlineStyles.variationText,
                    selectedVariation == index && inlineStyles.selectedVariationText
                ]} 
                key={index} 
                onPress={()=> handleSelectedVariation(index)}>{item.variation_name}</Text>
            })
        }
    }

    const renderVariationOption = () => {
        if (variations.length > 0) {
            return variationOption.map((item, index) => {
                return <Text 
                style={[
                    inlineStyles.variationOptionText,
                    selectedVariationOption == item && inlineStyles.selectedVariationOptionText
                ]} 
                key={index}
                onPress={()=> handleSelectedOptions(item)}>{item.option_name}</Text>
            })
        }
        
    }

    useEffect(() => {
        if ( props.products < 1 ) {
            props.getAllProducts()
        }  
        setProducts(props.products)

    }, [props.products])

    useEffect(() => {
        setShowDetailModal(true)
    })

    const productList = props.loading ? <Spinner style={styles.spinner} color={fifthColor} /> : (
        <FlatList
            numColumns={2} 
            columnWrapperStyle={{flex: 1,justifyContent: "space-around"}}
            data={products}
            renderItem={({ item }) => <Product item={item}  />}
            keyExtractor={item => item._id.toString()}
        />
    )

    return (
        <SafeAreaView style={ inlineStyles.productWrapper }>
           { productList }
           <Modal.BottomModal
                visible={showDetailModal}
                modalTitle={<ModalTitle title={product_name} />}
                onTouchOutside={() => {
                    setShowDetailModal(false);
                    props.showWishModal(!props.showWishModal)
                }}
            >
                <ModalContent>
                    <Text>Price:</Text>
                    <Text>{'P', price}</Text>
                    <Text>Variations:</Text>
                    <ScrollView
                        style={inlineStyles.variationWrapper}
                        horizontal={true}
                        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
                    >
                        {renderVariation()}
                    </ScrollView>
                    <Text>Selections:</Text>
                    <ScrollView
                        style={inlineStyles.variationOptionWrapper}
                        horizontal={true}
                        contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
                    >
                        {renderVariationOption()}
                    </ScrollView>
                    <Text style={[
                        inlineStyles.variationOptionText,
                        inlineStyles.selectedVariationOptionText
                    ]} 
                    onPress={()=> console.log('add to wishlist')}>Add to wishlist</Text>
                </ModalContent>
            </Modal.BottomModal>
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
        showWishModal: state.products.showWishModal,
        loading: state.products.productLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
      getAllProducts,
      showWishModal: ( data ) =>  dispatch({type: SHOW_WISH_MODAL, payload: data }),
    }
}


const inlineStyles = StyleSheet.create({
    variationWrapper: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#f8f8f8',
        
    },
    variationText: {
        backgroundColor: '#efefef',
        paddingTop: 6,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 3,
        marginRight: 6,
        color: '#333',
        borderRadius: 30,
        minWidth: 40,
        fontSize: 17
    },
    selectedVariationText: {
        backgroundColor: fifthColor,
        color: "#fff"
    },
    variationOptionWrapper: {
        flexDirection: 'row',
        padding: 20,
    },
    variationOptionText: {
        backgroundColor: '#efefef',
        paddingTop: 6,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 3,
        marginRight: 6,
        color: '#333',
        borderRadius: 30,
        minWidth: 40,
        textAlign: 'left',
        fontSize: 17
    },
    selectedVariationOptionText: {
        backgroundColor: fifthColor,
        color: "#fff"
    },
    tabContainerStyle: {
        height: 60
    },
    tabBarUnderlineStyle: {
        backgroundColor: fifthColor,
        height: 3,
    },
    tabHeading: {
        backgroundColor: '#fff',
    },
    activeTextStyle: {
        color: primaryColor,
        fontFamily: fourthFont
    },
    activeTabStyle: {
        backgroundColor: 'transparent'
    },
    tabStyle: {
        backgroundColor: 'transparent',
    },
    textStyle: {
        color: primaryColor,
        fontFamily: primaryFont
    },
    ScrollableTab: {
        backgroundColor: 'transparent',
        borderColor: '#f5f5f5',
        paddingTop: 5,
        paddingBottom: 0,
        height: 60,
    },
    
})

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Products))

