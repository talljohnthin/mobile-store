import React from 'react'
import {SafeAreaView, FlatList, Text} from 'react-native'
import Wish from './../components/wish/Wish'
import WishTotal from './../components/wish/WishTotal'
import DATA from './../CATEGORY_DATA'

import styles from './../components/wish/Styles'
const Wishes = () => {
    return (
        <SafeAreaView style={styles.wishWrapper}>
            <FlatList
                contentContainerStyle={{ paddingBottom: 100}}
                data={DATA}
                renderItem={({ item }) => <Wish item={item}  />}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent = { () => <WishTotal/>}
            />
        </SafeAreaView>
    )
}

Wishes.navigationOptions = {
    title: 'Wish List'
}

export default Wishes
