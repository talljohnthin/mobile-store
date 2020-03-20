import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { loginUser, userLoading, cleanUserSuccessError } from './../../redux/actions/user/userActions'
import { Form, Item, Input, Button, Icon, Spinner } from 'native-base'
import { showToast } from './../../helpers'
import Text from './../../utils/Text'
import { withNavigation } from 'react-navigation'
import AuthStyles from '../../styles/AuthStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { LinearGradient } from 'expo-linear-gradient';
import { linearDark, linearLight } from './../../styles/Variables'


const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
    const handleLogin = () => {
        if (email != '' && password != '') {
            props.userLoading()
            setIsLoading(!isLoading)
            props.loginUser(email, password)
        } else {
            showToast("Please add valid Email address & password.", "error")
        }
    }

    useEffect(() => {
        if ( props.message && props.status) {
            showToast(props.message, props.status)
        }
        return function() {
           props.cleanUserSuccessError()
        }
    }, [props.message])

    useEffect(() => {
       if (props.isLogin) {
          props.navigation.navigate('Profile')
       }
    })

    const _spinner = props.loading ? <Spinner color='#fff' /> : <Text style={AuthStyles.buttonTextColor}>LOGIN</Text>
    
    return (
        <View style={{flex:1, backgroundColor:'#fff'}}>
            <View style={AuthStyles.headline}>
                <View>
                    <Text style={AuthStyles.headlineTitle}>Owkii</Text>
                    <Text style={AuthStyles.headlineText}>In publishing and graphic design, lorem ipsum In publishing</Text>
                </View>
            </View>
            <View style={AuthStyles.wrapper}>
                <View>
                    <Form style={AuthStyles.form}>
                        <Item style={AuthStyles.item}>
                            <Icon active name='ios-mail' style={AuthStyles.IconStyle}/>
                            <Input placeholder='Email Address' autoCapitalize="none" autoCorrect={false} value={email} onChangeText={text => setEmail(text)} style={AuthStyles.input}/>
                        </Item>
                        <Item style={AuthStyles.item}>
                            <Icon active name='ios-lock' style={AuthStyles.IconStyle}/>
                            <Input placeholder='Password' autoCapitalize="none" autoCorrect={false} value={password} onChangeText={text => setPassword(text)} password={true} secureTextEntry={true} style={AuthStyles.input}/>
                        </Item>
                        <TouchableOpacity activeOpacity={0.9}>
                            <Text style={AuthStyles.forgotPassword} >Forgot Password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9} 
                            style={{marginTop:15}}
                            onPress={()=> handleLogin()} >
                                <LinearGradient
                                    start={[0, 1]} end={[1, 0]}
                                    colors={[linearDark, linearLight]}
                                    style={[SharedStyles.linearButton]}>
                                    {  _spinner }
                                </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity 
                                activeOpacity={0.9}
                                onPress={ () => props.navigation.navigate('SignUp')}>
                                <Text style={AuthStyles.signUp} >Don't have an account? <Text  style={AuthStyles.signUpText}>Sign Up</Text></Text>
                        </TouchableOpacity>
                    </Form>
                </View>
            </View>
        </View>
    )
}
const mapStateToProps = state => {
    return {
        loading: state.user.loading,
        message: state.user.message,
        status: state.user.status,
        isLogin: state.user.isLogin
    }
}
const mapDispatchToProps = {  userLoading, loginUser, cleanUserSuccessError }

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Login))

