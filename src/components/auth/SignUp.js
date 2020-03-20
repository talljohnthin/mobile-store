import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { addUser, userLoading, cleanUserSuccessError } from './../../redux/actions/user/userActions'
import { Form, Item, Input, Textarea, Button, Icon, Spinner, Toast } from 'native-base'
import { showToast } from './../../helpers'
import Text from './../../utils/Text'
import AuthStyles from '../../styles/AuthStyles'
import { withNavigation } from 'react-navigation'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { LinearGradient } from 'expo-linear-gradient';
import { linearDark, linearLight } from './../../styles/Variables'

import SharedStyles from './../../styles/SharedStyles'

const SignUp = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (props.isLogin) {
            props.navigation.navigate('Profile')
        }
    }, [props.isLogin])

    const handleCreateUser = () => {
        props.userLoading()
        setIsLoading(!isLoading)
        props.addUser(email, password)

    }

    useEffect(() => {
        if (props.message && props.status) {
            showToast(props.message, props.status)
        }
        return function() {
            props.cleanUserSuccessError()
        }
    }, [props.message])

    const _spinner = props.loading ? <Spinner color='#fff' /> :<Text style={AuthStyles.buttonTextColor}>SIGN UP</Text>

    return (
        <View style={{flex:1, backgroundColor:'#fff', paddingTop:10}}>
            <View style={AuthStyles.wrapper}>
                <View>
                    <Form style={AuthStyles.form}>
                        <Item style={AuthStyles.item}>
                            <Icon active name='ios-mail' style={AuthStyles.IconStyle}/>
                            <Input value={ email } onChangeText={text => setEmail(text)} placeholder='Email Address' style={AuthStyles.input}/>
                        </Item>
                        <Item style={AuthStyles.item}>
                            <Icon active name='ios-lock' style={AuthStyles.IconStyle}/>
                            <Input value={ password } onChangeText={text => setPassword(text)} placeholder='Password' password={true} secureTextEntry={true} style={AuthStyles.input}/>
                        </Item>
                        <TouchableOpacity activeOpacity={0.9} 
                            onPress={()=> handleCreateUser()} >
                                <LinearGradient
                                    start={[0, 1]} end={[1, 0]}
                                    colors={[linearDark, linearLight]}
                                    style={[SharedStyles.linearButton]}>
                                    {  _spinner }
                                </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.9} onPress={ () => props.navigation.navigate('Login')}><Text style={AuthStyles.signUp} >Already have an account? <Text  style={AuthStyles.signUpText}>Sign In</Text></Text></TouchableOpacity>
                    </Form>
                </View>
            </View>
        </View>
    )
}
SignUp.navigationOptions = {
    title: 'Sign Up',
};

const mapStateToProps = state => {
    return {
        loading: state.user.loading,
        isLogin: state.user.isLogin,
        status: state.user.status,
        message: state.user.message,
    }
}
const mapDispatchToProps = {  userLoading, addUser, cleanUserSuccessError }

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(SignUp))


