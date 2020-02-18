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
    const segmentId = props.segmentId
    useEffect(() => {
       props.categories.length > 0 ? props.cancelLoading() : props.getCategories()
    },[])

    useEffect(() => {
        filterSegment()
    }, [props.categories])

    const filterSegment = ( ) => {
        const filteredCategory = props.categories.filter(item => {
            const findCategory = item.segment_id.find( i => i.segment_id == segmentId)
            if ( findCategory === 'undefined') {
                return 
            } else {
                return findCategory
            }
        })
        setCategories(filteredCategory)
    }

    const listCategories = props.loading ? <Spinner style={styles.spinner} color={fifthColor} /> : (
        <FlatList
            data={categories}
            renderItem={({ item }) => <Category item={item} segmentId={segmentId} />}
            keyExtractor={item => item._id.toString()}
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

