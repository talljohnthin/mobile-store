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

const SignUp = (props) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [deliveryName, setDeliveryName] = useState('')
    const [deliveryAddress, setDeliveryAddress] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleCreateUser = () => {
        props.userLoading()
        setIsLoading(!isLoading)
        props.addUser(email, username, password, deliveryName, deliveryAddress)
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
                            <Icon active name='ios-person' style={AuthStyles.IconStyle}/>
                            <Input value={ username } onChangeText={text => setUsername(text)} placeholder='Username' style={AuthStyles.input}/>
                        </Item>
                        <Item style={AuthStyles.item}>
                            <Icon active name='ios-lock' style={AuthStyles.IconStyle}/>
                            <Input value={ password } onChangeText={text => setPassword(text)} placeholder='Password' password={true} secureTextEntry={true} style={AuthStyles.input}/>
                        </Item>
                        <Item style={AuthStyles.item}>
                            <Icon active name='ios-person' style={AuthStyles.IconStyle}/>
                            <Input value={ deliveryName } onChangeText={text => setDeliveryName(text)} placeholder='Delivery Name' style={AuthStyles.input}/>
                        </Item>
                        <Item style={AuthStyles.item}>
                            <Icon active name='ios-navigate' style={AuthStyles.IconStyle}/>
                            <Textarea value={ deliveryAddress } onChangeText={text => setDeliveryAddress(text)} style={[AuthStyles.input, AuthStyles.textArea]} placeholder="Delivery Address" />
                        </Item>
                        <Button 
                            style={AuthStyles.buttonSolid}
                            onPress={()=> handleCreateUser()}>
                            {  _spinner }
                        </Button>
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
        status: state.user.status,
        message: state.user.message,
    }
}
const mapDispatchToProps = {  userLoading, addUser, cleanUserSuccessError }

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(SignUp))


