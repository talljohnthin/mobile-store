import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { Spinner } from 'native-base'
import { getCategories } from './../../redux/actions/category/categoryActions'
import {SafeAreaView, FlatList} from 'react-native'
import Category from './Category'

import { CATEGORY_CANCEL_LOADING } from './../../redux/actions/category/categoryTypes'

import {
    fifthColor
} from '../../styles/Variables'

import styles from './Styles'
const CategoryList = (props) => {
    const [categories, setCategories] = useState([])
    const segment = props.segment
    useEffect(() => {
       props.categories.length > 0 ? props.cancelLoading() : props.getCategories()
       props.categories.length > 0 && setCategories(props.categories)
    },[])

    const listCategories = props.loading ? <Spinner style={styles.spinner} color={fifthColor} /> : (
        <FlatList
            data={categories}
            renderItem={({ item }) => <Category item={item} segment={segment} />}
            keyExtractor={item => item.id.toString()}
        />
    )
    return (
        <SafeAreaView style={styles.categoryWrapper}>
            { listCategories }
        </SafeAreaView>
    )
}

const mapStateToProps = state => {
    return {
        categories:state.categories.categories,
        loading: state.categories.categoryLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
      getCategories,
      cancelLoading : () =>  dispatch({type: CATEGORY_CANCEL_LOADING})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)

