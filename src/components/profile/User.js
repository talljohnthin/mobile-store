import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'

import styles from './Styles'
const User = (props) => {
    const hasPicture = false
    const nameFirstChar = props.user.name || 'G'

    const avatar = hasPicture ? 
        <Image 
            source={{uri : 'https://firebasestorage.googleapis.com/v0/b/shop-39810.appspot.com/o/images%2Ff3855dfc-0dd2-44af-9fef-62629971b371.jpg?alt=media&token=d0e6a969-f396-4260-905f-257a572ab25e',}}
            style={styles.userImage} 
        /> :
        <Text style={styles.userNotImage} >{ nameFirstChar.slice(0,1) }</Text>

    return (
        <View style={styles.userCard}>
            <View style={styles.userImageWrapper}>
               { avatar }
            </View>
            <View style={styles.userDescWrapper}>
                <Text style={styles.userName}>{props.user.name || 'Guess'}</Text>
                <Text style={styles.userEmail}>{props.user.email || 'Profile'}</Text>
            </View>
        </View>
    )
}


const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}
export default connect(mapStateToProps)(User)
