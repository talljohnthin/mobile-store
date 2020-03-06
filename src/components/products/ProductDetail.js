import React, { useEffect, useState, Fragment } from 'react';
import {connect} from 'react-redux'
import { getProduct } from './../../redux/actions/product/productActions'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import { Tabs, Button, Tab, TabHeading } from 'native-base'
import Text from '../../utils/Text'
import { ScrollView } from 'react-native-gesture-handler';

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
            name: productName,
            price: price, 
            variation: variationOption[selectedVariation],
            option: selectedVariationOption.option,
            cover: 'image'
        }
        console.log(productObj)
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
                <Text style={styles.productDetailPrice}>P { price ? price : priceOptions[0].options[0].price }</Text>
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
            <View style={styles.btnWishListWrapper}>
                <Button style={styles.btnWishList} large rounded onPress={()=> addToBasket()}>
                    <Text style={styles.btnWishListText}>ADD TO CART</Text>
                </Button>
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
        fontSize: 24,
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
        borderRadius: 30,
        minWidth: 40,
        textAlign: 'center',
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
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#f8f8f8',
    },
    btnWishList: {
        color: '#fff',
        backgroundColor: fifthColor,
        justifyContent: 'center',
        height: 50
    },
    btnWishListText: {
        color: '#fff',
        paddingLeft: 30,
        paddingRight: 30
    }
})

const mapStateToProps = state => {
    return {
        product:state.products.product,
        loading: state.products.productLoading
    }
}

const mapDispatchToProps = { getProduct }

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)