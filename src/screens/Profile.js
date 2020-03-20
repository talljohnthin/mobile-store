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
import { LinearGradient } from 'expo-linear-gradient';
import firebase from './../config/firebase'
import styles from './../components/profile/Styles'
import { linearDark,linearLight } from './../styles/Variables'
import SharedStyles from './../styles/SharedStyles'
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
                <TouchableOpacity activeOpacity={0.9} 
                    style={[{ marginTop:6 },  props.isLogin && {display: 'none'}]}
                    onPress={ () => props.navigation.navigate('Login')}  >
                        <LinearGradient
                            start={[0, 1]} end={[1, 0]}
                            colors={[linearDark, linearLight]}
                            style={[SharedStyles.linearButton]}>
                            <Text style={SharedStyles.linearText}>LOGIN</Text>
                        </LinearGradient>
                </TouchableOpacity>
                <Button 
                    style={[styles.buttonLogout, !props.isLogin && {display: 'none'}]}
                    onPress={ () => handleLogOut() } >
                    { props.loading ? <Spinner color='#fff' /> : <Text style={styles.buttonTextColor}>LOGOUT</Text> }
                </Button>
                <TouchableOpacity activeOpacity={0.9} 
                    style={[{ marginTop:6 }, !props.isLogin && {display: 'none'}]}
                    onPress={ () => props.navigation.navigate('ProfileUpdate') } >
                        <LinearGradient
                            start={[0, 1]} end={[1, 0]}
                            colors={[linearDark, linearLight]}
                            style={[SharedStyles.linearButton]}>
                            <Text style={SharedStyles.linearText}>UPDATE USER</Text>
                        </LinearGradient>
                </TouchableOpacity>
                { props.isLogin ? null : <TouchableOpacity activeOpacity={0.9} onPress={ () => props.navigation.navigate('SignUp')}><Text style={AuthStyles.signUp} >Don't have an account? <Text  style={AuthStyles.signUpText}>Sign Up</Text></Text></TouchableOpacity> }
            </View>
            
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

