import React, { useEffect, useState} from 'react';
import {connect} from 'react-redux'
import { getSegments } from './../redux/actions/segment/segmentActions'
import { Image } from 'react-native'
import { Container, TabHeading, Tab, Tabs, ScrollableTab, Spinner } from 'native-base'
import CategoryList from './../components/categories/CategoryList'
import Text from './../utils/Text'

import SharedStyles from '../styles/SharedStyles'
import { fifthColor } from './../styles/Variables'

const Categories = (props) => {
    const [segments, setSegments] = useState([])

    useEffect(() => {
        if (props.segments.length < 1) {
           props.getSegments()
        }
        console.log(segments)
    }, [])
    useEffect(() => {
        props.segments && setSegments( props.segments )
        
    },[props.segments])

    return (
        <Container>
           <Text>Hi</Text>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        segments:state.segments.segments
    }
}

const mapDispatchToProps = { getSegments }

export default connect(mapStateToProps, mapDispatchToProps)(Categories)

