import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux'
import { showToast, formatMoney } from './../../helpers'
import { getProduct } from './../../redux/actions/product/productActions'
import { addToBasket, sumProductsInBasket } from './../../redux/actions/basket/basketActions'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import { Tabs, Button, Tab, TabHeading } from 'native-base'
import Text from '../../utils/Text'
import { ScrollView } from 'react-native-gesture-handler';

import { LinearGradient } from 'expo-linear-gradient';
import { linearDark, linearLight } from './../../styles/Variables'

import {
    primaryColor,
    fifthColor,
    primaryFont,
    tertiaryFont,
    fourthFont,
} from '../../styles/Variables'

const initialPhoto = [
    { url: "https://fast-reef-40576.herokuapp.com/products/5e3bf24926d16c00174c9f9c/1.png",}
]

const ProductDetail = (props) => {
    const { productName, priceOptions, descriptions, cover, productImages  } = props.product.name
    const [activeTab, setActiveTab] = useState(0)
    const [productImage, setProductImage] = useState(initialPhoto)
    const [price, setPrice] = useState(0)

    const [variationOption, setVariationOption] = useState([])
    const [selectedVariation, setSelectedVariation] = useState(0)
    const [selectedVariationOption, setSelectedVariationOption] = useState('')

    const deviceWidth = Math.round(Dimensions.get('window').width)

    const renderPhotos = ({ item, index }) => {
        return (
            <View>
                <Image source={{ uri: item.url }} style={{ height: 400 }} />
            </View>
        );
    }

    const handleSelectedVariation = index => {
        if ( index !== undefined && index !== '') {
            setVariationOption(priceOptions[index].options)
            setSelectedVariation(index)
            setSelectedVariationOption('')
        }
    }

    const handleSelectedOptions = item => {
        if (item) setSelectedVariationOption(item)
        if (item) setPrice(item.price)
    }

    useEffect(()=> {
        formatProductImages()
        setVariationOption(priceOptions[0].options)
    }, [props.product])

    const formatProductImages = () => {
        let imageArrObj = []
        productImages.map(item => {
            imageArrObj.push(
                { url: item }
            )
        })
        setProductImage(imageArrObj)
    }

    const renderVariation = () => {
        return priceOptions.map((item, index) => {
            return (
                <TouchableOpacity
                    activeOpacity={0.9}
                    key={index}
                    onPress={() => handleSelectedVariation(index)}
                >
                    <Text style={[
                        styles.variationText,
                        selectedVariation == index && styles.selectedVariationText
                    ]}>
                    {item.variation}
                    </Text>
                </TouchableOpacity>
            )
        })
    }

    const renderVariationOption = () => {
        return variationOption.map((item, index) => {
            return (
                <TouchableOpacity
                    activeOpacity={0.9}
                    key={index}
                    onPress={() => handleSelectedOptions(item)}
                >
                    <Text
                        style={[
                            styles.variationOptionText,
                            selectedVariationOption == item && styles.selectedVariationOptionText
                        ]}>
                        {item.option}
                    </Text>
                </TouchableOpacity>
            )
        })
    }

    const addToBasket = () => {
        const productObj = {
            id: props.product.id,
            name: productName,
            price: price, 
            variation: priceOptions[selectedVariation].variation,
            option: selectedVariationOption.option,
            cover,
            qty:1,
            total: Number(price),
        }
        if (productObj.id == '' || productObj.id === null) {
            showToast('Error: Please close product details and click the product again.', 'error')
            return
        }
        if (productObj.name == '' || productObj.name === null) {
            showToast('Error: Please close product details and click the product again.', 'error')
            return
        }
        if (productObj.cover == '' || productObj.cover === null) {
            showToast('Error: Please close product details and click the product again.', 'error')
            return
        }
        if (productObj.variation == '' || productObj.variation === null) {
            showToast('Error: Please select a variation', 'error')
            return
        }
        if (productObj.option == '' || productObj.option === undefined) {
            showToast('Error: Please select an option.', 'error')
            return
        }
        if (productObj.price == '' || productObj.price === null) {
            showToast('Error: Please close product details and click the product again.', 'error')
            return
        }
        props.addToBasket(productObj)
        props.sumProductsInBasket()
        props.navigation.navigate('Explore')
        showToast('Success: New Product added to bag.', 'success')
    }

    const carousel = () => {
        return (
            <Fragment>
                <Carousel
                    data={productImage}
                    renderItem={renderPhotos}
                    sliderWidth={deviceWidth}
                    itemWidth={deviceWidth}
                    onSnapToItem={i => setActiveTab(i)}
                />
                <Pagination
                    dotsLength={productImages.length}
                    containerStyle={styles.pagination}
                    dotStyle={styles.ww}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    activeDotIndex={activeTab}
                />
            </Fragment>
        )
    }
    
    const renderCarousel = productImage.length > 0 ? carousel() : null

    return (

        <ScrollView style={{ padding: 0, backgroundColor: '#fff' }}>
            { renderCarousel }
            <View style={styles.productDetailWrapper}>
                <Text style={styles.productDetailName}>{ productName }</Text>
                <Text style={styles.productDetailPrice}>&#8369; { price ? formatMoney(price) : formatMoney(priceOptions[0].options[0].price) }</Text>
            </View>
            <ScrollView
                style={styles.variationWrapper}
                horizontal={true}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
            >
                {renderVariation()}
            </ScrollView>
            <ScrollView
                style={styles.variationOptionWrapper}
                horizontal={true}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
            >
                {renderVariationOption()}
            </ScrollView>
            <View style={styles.btnWishListWrapper}>
                <TouchableOpacity activeOpacity={0.9} 
                    onPress={()=> addToBasket()}>
                    <LinearGradient
                        start={[0, 1]} end={[1, 0]}
                        colors={[linearDark, linearLight]}
                        style={[SharedStyles.linearButton]}>
                        <Text style={styles.btnWishListText}>Add To Basket</Text>
                    </LinearGradient>
                 </TouchableOpacity>
            </View>
            <View>
                <Tabs
                    tabContainerStyle={styles.tabContainerStyle}
                    tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
                >
                    <Tab
                        heading={<TabHeading style={styles.tabHeading}><Text>Descriptions</Text></TabHeading>}
                        activeTextStyle={styles.activeTextStyle}
                        activeTabStyle={styles.activeTabStyle}
                        textStyle={styles.textStyle}
                        tabStyle={styles.tabStyle}
                        tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
                    >
                        <View style={styles.productDetailDescription}>
                            <Text style={styles.productDetailDescriptionText}>{ descriptions }</Text>
                        </View>
                    </Tab>
                    <Tab
                        heading={<TabHeading style={styles.tabHeading}><Text>Shipping Info</Text></TabHeading>}
                        activeTextStyle={styles.activeTextStyle}
                        activeTabStyle={styles.activeTabStyle}
                        textStyle={styles.textStyle}
                        tabStyle={styles.tabStyle}
                        tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
                    >
                        <View style={styles.productDetailDescription}>
                            <Text style={styles.productDetailDescriptionText}>Shipping info here</Text>
                        </View>
                    </Tab>
                </Tabs>

            </View>
           
        </ScrollView>
    )
}
ProductDetail.navigationOptions = {
    headerShown: true,
    title:'Product Information'
};

const styles = StyleSheet.create({
    //carousel
    ww:{
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 0, 
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    pagination: {
        backgroundColor: 'transparent',
        padding:0,
        marginBottom:-10 
    },
    //product info
    productDetailWrapper: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
    },
    productDetailName: {
        fontSize: 20,
        fontFamily: tertiaryFont,
    },
    productDetailPrice: {
        fontSize: 22,
        color: fifthColor,
        marginBottom:20
    },
    productDetailDescription: {
        padding: 20,
        backgroundColor: '#efefef'
    },
    productDetailDescriptionText: {
        lineHeight: 22,
        fontSize: 16
    },
    variationWrapper: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#f8f8f8',
        textAlign: 'center'
    },
    variationText: {
        backgroundColor: '#efefef',
        paddingTop: 6,
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 3,
        marginRight: 6,
        color: '#333',
        borderRadius: 4,
        minWidth: 40,
        textAlign: 'center',
        fontSize: 17
    },
    selectedVariationText: {
        backgroundColor: primaryColor,
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
        borderRadius: 4,
        minWidth: 40,
        textAlign: 'center',
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
    // button wish list
    btnWishListWrapper: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#f8f8f8',
    },
    btnWishListText: {
        color: "#fff",
        fontFamily:primaryFont,
    }
})

const mapStateToProps = state => {
    return {
        product:state.products.product,
        loading: state.products.productLoading
    }
}

const mapDispatchToProps = { getProduct, addToBasket, sumProductsInBasket }

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)