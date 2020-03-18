import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { View } from 'react-native'
import { logoutUser, userLoading, signIn } from './../redux/actions/user/userActions'
import { getOrders } from './../redux/actions/order/orderActions'
import User from './../components/profile/User'
import Orders from './../components/profile/Orders'
import UserOptions from './../components/profile/UserOptions'
import Text from './../utils/Text'
import { Button,  Spinner } from 'native-base'
import firebase from './../config/firebase'

import styles from './../components/profile/Styles'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'


const Profile = (props) => {
    const { isLogin, uid, orders } = props
    const [isLoading, setIsLoading] = useState(false)

    const handleLogOut = () => {
        props.userLoading()
        setIsLoading(!isLoading)
        props.logoutUser()
    }

    useEffect(() => {
        authState()
        if(isLogin) {
            props.getOrders(uid)
        }
    }, [isLogin])

    const authState = () => {
        firebase.auth().onAuthStateChanged(user => {
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
                    onPress={ () => props.navigation.navigate('ProfileUpdate') } >
                    <Text style={styles.buttonUpdateTextColor}>UPDATE USER</Text>
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
        uid:state.user.user.uid,
        loading: state.user.loading,
        orders: state.orders.orders
    }
}

const mapDispatchToProps = { userLoading, logoutUser, signIn, getOrders }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

