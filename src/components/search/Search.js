import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { requestProductHint, clearProductHint, searchRequestProducts } from './../../redux/actions/product/productActions'
import { View, SafeAreaView, TouchableOpacity } from 'react-native'
import { Item, Input, List, ListItem } from 'native-base'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/AntDesign'
import Text from '../../utils/Text'
import styles from './Styles'

const Search = (props) => {
    const [ search, setSearch] = useState('')
    const { requestProductHint, searchHint, clearProductHint, searchRequestProducts  } = props

    const handleSearchHint = ( textQuery ) => {
        setSearch(textQuery)
        requestProductHint(textQuery)
        textQuery == '' ? clearProductHint() : null 
    }

    const handleSearch = (textQuery) => {
        setSearch(textQuery)
        searchRequestProducts(textQuery)
        if (textQuery) {
            props.navigation.navigate('SearchAndFilter', { searchKey: textQuery})
        }
    }
/*
    const renderHint = () => {
        if (searchHint.length > 0) {
            return searchHint.map(item => {
                return (
                    <ListItem style={styles.searchGuessItem} key={item._id}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => handleSearch(item.product_name)}>
                            <Text style={styles.searchGuessItemText}>{item.product_name}</Text>
                        </TouchableOpacity>
                    </ListItem>
                )
            })
        }
    }
*/
    useEffect(() => {
      //  renderHint()
    },[searchHint, search])

    return (
        <SafeAreaView style={styles.wrapper}>
            <Item style={styles.searchItem} regular>
                <Input value={search} onChangeText={ text => handleSearchHint(text) } style={styles.input} placeholder='Search' />
                <TouchableOpacity activeOpacity={0.9} onPress={() => handleSearch(search)}>
                    <Icon style={styles.searchIcon} name={'search1'} size={25} />
                </TouchableOpacity>
            </Item>
            <List style={styles.searchGuess} >
              
            </List>
            <View>
                <Text style={styles.recentSearchTitle}>Recent searches</Text>
            </View>
            <View style={styles.recentSearchList}>
                <TouchableOpacity activeOpacity={0.8}><Text style={styles.recentSearchItem}>Watch you dog men</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}><Text style={styles.recentSearchItem}>Bag</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}><Text style={styles.recentSearchItem}>Sandal</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}><Text style={styles.recentSearchItem}>Cantoon</Text></TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}><Text style={styles.recentSearchItem}>Samsung Phone</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

Search.navigationOptions = {
    headerShown: false
}

const mapStateToProps = state => {
    return {
        searchHint: state.products.searchHint,
    }
}

const mapDispatchToProps = { requestProductHint, clearProductHint, searchRequestProducts}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Search))


