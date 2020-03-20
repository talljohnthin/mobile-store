import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { linearDark,linearLight } from './../../styles/Variables'

import styles from './Styles'
const User = (props) => {
    const hasPicture = false
    const nameFirstChar = props.user.name || 'G'

    const avatar = hasPicture ? 
        <Image 
            source={{uri : 'https://firebasestorage.googleapis.com/v0/b/shop-39810.appspot.com/o/images%2Ff3855dfc-0dd2-44af-9fef-62629971b371.jpg?alt=media&token=d0e6a969-f396-4260-905f-257a572ab25e',}}
            style={styles.userImage} 
        /> :
        <LinearGradient
            start={[0, 1]} end={[1, 0]}
            colors={[linearDark, linearLight]}
            style={[SharedStyles.linearButton]}>
            <Text style={styles.userNotImageText}>{ nameFirstChar.slice(0,1) }</Text>
        </LinearGradient>
        

    return (
        <View style={styles.userCard}>
            <View style={styles.userImageWrapper}>
               { avatar }
            </View>
            <View style={styles.userDescWrapper}>
                <Text style={styles.userName}>{props.user.name || 'Guess'}</Text>
                <Text style={styles.userEmail}>{props.user.email || 'User'}</Text>
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
