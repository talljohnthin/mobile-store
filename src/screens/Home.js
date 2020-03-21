import React, { useEffect} from 'react'
import {connect} from 'react-redux'
import { getSegments } from './../redux/actions/segment/segmentActions'
import { getCategories } from './../redux/actions/category/categoryActions'
import { getAllSpecials } from './../redux/actions/special/specialActions'
import { View } from 'react-native'
import Specials from './../components/home/Specials'

import styles from './../components/home/Styles'
const Home = (props) => {
    let isMounted = false
    useEffect(() => {
       isMounted = true
       if(isMounted) {
        props.getSegments()
        props.getCategories()
        props.getAllSpecials()
       }
       return () => {
           isMounted = false
       }
    }, [])
    return (
        <View style={styles.homeWrapper}>
            <Specials />
        </View>
    )
}

const mapDispatchToProps = { getSegments, getCategories, getAllSpecials }

export default connect(null, mapDispatchToProps)(Home)


