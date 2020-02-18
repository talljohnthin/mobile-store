import React, { useEffect} from 'react'
import {connect} from 'react-redux'
import { getSegments } from './../redux/actions/segment/segmentActions'
import { getCategories } from './../redux/actions/category/categoryActions'
import { View, Text } from 'react-native'
import Hero from './../components/home/Hero'
import FlashSale from '../components/home/FlashSale'

import styles from './../components/home/Styles'
const Home = (props) => {
    useEffect(() => {
        props.getSegments()
        props.getCategories()
    }, [])
    return (
        <View style={styles.homeWrapper}>
            <Hero />
            <FlashSale />
        </View>
    )
}

const mapDispatchToProps = { getSegments, getCategories }

export default connect(null, mapDispatchToProps)(Home)


