import React, { useState } from 'react'
import { View, SafeAreaView, TouchableOpacity } from 'react-native'
import { Item, Input, List, ListItem } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import Text from '../../utils/Text'
import styles from './Styles'
const Filter = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View>
                <Text style={styles.filterTitle}>Filter Options: </Text>
            </View>
            <List style={styles.filterList} >
                <ListItem style={styles.filterItem}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text style={styles.filterItemText}>Low Price</Text>
                    </TouchableOpacity>
                </ListItem>
                <ListItem style={styles.filterItem}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text style={styles.filterItemText}>High Price</Text>
                    </TouchableOpacity>
                </ListItem>
                <ListItem style={styles.filterItem}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text style={styles.filterItemText}>Most Recent</Text>
                    </TouchableOpacity>
                </ListItem>
                <ListItem style={styles.filterItem}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Text style={styles.filterItemText}>On Sale</Text>
                    </TouchableOpacity>
                </ListItem>
            </List>
        </SafeAreaView>
    )
}
Filter.navigationOptions = {
    headerShown: false
}
export default Filter
