import React, { useState, useEffect, Fragment } from 'react'
import Modal, { ModalContent, ModalTitle} from 'react-native-modals';
import { withNavigation } from 'react-navigation'
import {StyleSheet, ScrollView} from 'react-native'
import Text from '../../utils/Text'
import {connect} from 'react-redux'
import { showCartModal } from './../../redux/actions/product/productActions'

import {
    primaryColor,
    fifthColor,
    primaryFont,
    fourthFont,
} from '../../styles/Variables'

const ProductCartModal = props => {

    const [variationOption, setVariationOption] = useState([])
    const [selectedVariation, setSelectedVariation] = useState(0)
    const [selectedVariationOption, setSelectedVariationOption] = useState('')
    const [price, setPrice] = useState(0)

    const { priceOptions, productName } = props.product.name
    const variations = priceOptions || []

    
    useEffect(()=> {
        if (priceOptions.length) {
            setPrice(priceOptions[0].options[0].price)
            setVariationOption(priceOptions[0].options)
        }
        return () => {
            props.showCartModal(false)
        }
    },[])

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

    const renderVariation = () => {
        if (variations.length > 0) {
            return variations.map((item, index) => {
                return <Text
                style={[
                    inlineStyles.variationText,
                    selectedVariation == index && inlineStyles.selectedVariationText
                ]} 
                key={index} 
                onPress={()=> handleSelectedVariation(index)}>{item.variation}</Text>
            })
        }
    }
    const renderVariationOption = () => {
        const options = () => {
            if (variations.length > 0) {
                return variationOption.map((item, index) => {
                    return <Text 
                    style={[
                        inlineStyles.variationOptionText,
                        selectedVariationOption == item && inlineStyles.selectedVariationOptionText
                    ]} 
                    key={index}
                    onPress={()=> handleSelectedOptions(item)}>{item.option}</Text>
                })
            }  
        }
        return (
            <Fragment>
                <Text>Selections:</Text>
                <ScrollView
                    style={inlineStyles.variationOptionWrapper}
                    horizontal={true}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
                >
                { options() }
                </ScrollView>
            </Fragment>
        )
        
    }


    return (
        <Modal.BottomModal
            visible={ props.showCartModalState }
            modalTitle={<ModalTitle title={productName} />}
            pointerEvents="auto"
            animationDuration={80}
            onTouchOutside={() => {
                props.showCartModal(false)
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
                { renderVariationOption() }
                
                <Text style={[
                    inlineStyles.variationOptionText,
                    inlineStyles.selectedVariationOptionText
                ]} 
                onPress={()=> console.log('add to wishlist')}>Add to wishlist</Text>
            </ModalContent>
        </Modal.BottomModal>
    )
}

const mapStateToProps = state => {
    return {
        product:state.products.product,
        showCartModalState: state.products.showCartModal,
        loading: state.products.productLoading
    }
}

const mapDispatchToProps = { showCartModal }

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ProductCartModal))



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