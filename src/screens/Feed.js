import React from 'react';
import { Container, Header, TabHeading, Tab, Tabs, ScrollableTab } from 'native-base'
import Featured from './../components/feeds/Featured'
import Hot from './../components/feeds/Hot'
import Trendy from './../components/feeds/Trendy'
import OnSale from './../components/feeds/OnSale'
import New from './../components/feeds/New'

import SharedStyles from '../styles/SharedStyles'
import styles from './../components/feeds/Styles'

const Feed = () => {
    
    return (
        <Container>
            <Tabs
                tabBarUnderlineStyle={SharedStyles.tabBarUnderlineStyle}
                renderTabBar={() => <ScrollableTab style={SharedStyles.ScrollableTab} />}
            >
                <Tab heading="Featured"
                    activeTextStyle={SharedStyles.activeTextStyle}
                    activeTabStyle={SharedStyles.activeTabStyle}
                    textStyle={SharedStyles.textStyle}
                    tabStyle={SharedStyles.tabStyle}
                    tabBarUnderlineStyle={SharedStyles.tabBarUnderlineStyle}
                >
                    <Featured />
                </Tab>
                <Tab heading="Hot"
                    activeTextStyle={SharedStyles.activeTextStyle}
                    activeTabStyle={SharedStyles.activeTabStyle}
                    textStyle={SharedStyles.textStyle}
                    tabStyle={SharedStyles.tabStyle}
                    tabBarUnderlineStyle={SharedStyles.tabBarUnderlineStyle}
                >
                    <Hot />
                </Tab>
                <Tab heading="Trendy"
                    activeTextStyle={SharedStyles.activeTextStyle}
                    activeTabStyle={SharedStyles.activeTabStyle}
                    textStyle={SharedStyles.textStyle}
                    tabStyle={SharedStyles.tabStyle}
                    tabBarUnderlineStyle={SharedStyles.tabBarUnderlineStyle}
                >
                    <Trendy />
                </Tab>
                <Tab heading="On Sale"
                    activeTextStyle={SharedStyles.activeTextStyle}
                    activeTabStyle={SharedStyles.activeTabStyle}
                    textStyle={SharedStyles.textStyle}
                    tabStyle={SharedStyles.tabStyle}
                    tabBarUnderlineStyle={SharedStyles.tabBarUnderlineStyle}
                >
                    <OnSale />
                </Tab>
                <Tab heading="New Listing"
                    activeTextStyle={SharedStyles.activeTextStyle}
                    activeTabStyle={SharedStyles.activeTabStyle}
                    textStyle={SharedStyles.textStyle}
                    tabStyle={SharedStyles.tabStyle}
                    tabBarUnderlineStyle={SharedStyles.tabBarUnderlineStyle}
                >
                    <New />
                </Tab>
            </Tabs>
        </Container>
    )
}

Feed.navigationOptions = (props) => ({
    headerMode: 'none'
})
export default Feed
