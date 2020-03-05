import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { View } from 'react-native'
import { logoutUser, userLoading, signIn } from './../redux/actions/user/userActions'
import User from './../components/profile/User'
import Orders from './../components/profile/Orders'
import UserOptions from './../components/profile/UserOptions'
import Text from './../utils/Text'
import { Button,  Spinner } from 'native-base'
import firebase from './../config/firebase'

import styles from './../components/profile/Styles'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'


const Profile = (props) => {
    const [isLoading, setIsLoading] = useState(false)

    const handleLogOut = () => {
        props.userLoading()
        setIsLoading(!isLoading)
        props.logoutUser(props.token)
    }

    useEffect(() => {
        authState()
    })

    const authState = () => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                const name = user.displayName;
                const email = user.email;
                const uid = user.uid;
                const userObj = {
                    name,
                    email,
                    uid
                }
                props.signIn(userObj)
            }
        });
    }

    return (
        <ScrollView style={styles.profileWrapper}>
            <User />
            <Orders />
            { props.isLogin && <UserOptions /> }
            <View style={styles.buttonLogoutWrapper}>
                <Button 
                    style={[styles.buttonLogout, props.isLogin && {display: 'none'}]}
                    onPress={ () => props.navigation.navigate('Login')} >
                    { props.loading ? <Spinner color='#fff' /> : <Text style={styles.buttonTextColor}>LOGIN</Text> }
                </Button>
                <Button 
                    style={[styles.buttonLogout, !props.isLogin && {display: 'none'}]}
                    onPress={ () => handleLogOut() } >
                    { props.loading ? <Spinner color='#fff' /> : <Text style={styles.buttonTextColor}>LOGOUT</Text> }
                </Button>
                <Button 
                    style={[styles.buttonEditUser, !props.isLogin && {display: 'none'}]}
                    onPress={ () => console.log('update user') } >
                    <Text style={styles.buttonTextColor}>EDIT USER</Text>
                </Button>
            </View>
            { props.isLogin ? null : <TouchableOpacity style={styles.signUpWrapper} activeOpacity={0.9} onPress={ () => props.navigation.navigate('SignUp')}><Text style={AuthStyles.signUp} >Don't have an account? <Text  style={AuthStyles.signUpText}>Sign Up</Text></Text></TouchableOpacity> }
        
        </ScrollView>
    )
}

Profile.navigationOptions = (props) => ({
     title: 'Profile',
     headerTitleAlign:'Center',
})
const mapStateToProps = state => {
    return {
        isLogin: state.user.isLogin,
        token:state.user.user.token,
        loading: state.user.loading
    }
}

const mapDispatchToProps = { userLoading, logoutUser, signIn }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

