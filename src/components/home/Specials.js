import React, { useEffect, useState } from 'react'
import { Spinner } from 'native-base'
import {SafeAreaView, FlatList} from 'react-native'
import Special from './Special'
import { connect } from 'react-redux'

import styles from './Styles'
const Specials = ({ allSpecials }) => {
    const [specials, setSpecials ] = useState([])
    let isMounted = false

    useEffect(() => {
        isMounted = true
        if(isMounted) {
            setSpecials(allSpecials)
        }
        return () => {
            isMounted = false
        }
    }, [allSpecials])
    const listSpecials = specials.length <= 0 ? <Spinner style={styles.spinner} /> : (
        <FlatList
            style={styles.FlatListStyle}
            data={ specials }
            renderItem={({ item }) => <Special item={item}/>}
            keyExtractor={(item, index) => index.toString()}
        />
    )
    return (
        <SafeAreaView style={styles.specialsWrapper}>
            { listSpecials }
        </SafeAreaView>
    )
}


const mapStateToProps = state => {
    return {
        allSpecials: state.specials.specials
    }
}

export default connect(mapStateToProps)(Specials)

