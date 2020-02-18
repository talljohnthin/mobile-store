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
    })
    useEffect(() => {
        props.segments && setSegments( props.segments )
    },[props.segments])

    const renderTab = () => {
        return props.segments.map(item => {
            return (
                <Tab key={ item._id } heading={<TabHeading 
                    activeTabContainerStyle={{backgroundColor:'red'}}
                    style={SharedStyles.tabHeading}
                    >
                        <Image 
                            style={{ width: 50, height: 50, borderRadius: 50 }} 
                            source={{ uri : item.photos[0].url}}
                        />
                        <Text style={SharedStyles.tabHeadingText}>{item.segment_name}</Text>
                    </TabHeading>}
                        textStyle={SharedStyles.textStyle}
                        tabStyle={SharedStyles.tabStyle}
                        tabBarUnderlineStyle={SharedStyles.tabBarUnderlineStyle}
                    >
                    <CategoryList segmentId={item._id} />
                </Tab>
            )
        })
    }
    const renderTabs = () => {
        return <Tabs
            tabBarUnderlineStyle={SharedStyles.tabBarUnderlineStyle}
            renderTabBar={() => <ScrollableTab style={SharedStyles.ScrollableTab} />}
        >
            { renderTab() }
        </Tabs>
    }

    return (
        <Container>
            {
                segments.length > 0 ?  renderTabs() : <Spinner style={{marginTop:30}} color={ fifthColor } />
            }
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

