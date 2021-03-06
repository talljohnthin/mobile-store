import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Products from './../components/products/Products'
const Explore = () => {
    return (<Products />)
}
Explore.navigationOptions = ({ navigation }) => ({
    headerTitleAlign: 'left',
    headerRight: () => (
        <View style={styles.searchAndFilter}>
            <TouchableOpacity activeOpacity={0.9} onPress={ () => navigation.navigate('Categories')}>
                <Icon style={styles.filterIcon} name={'filter'} size={20} />
            </TouchableOpacity>
        </View>
    )
})


//Filter and Search in the header
const styles = StyleSheet.create({
    searchAndFilter: {
        flexDirection:'row',
    },
    searchIcon: {
        marginRight:6
    },
    filterIcon: {
        marginRight:20
    }
})
export default Explore
