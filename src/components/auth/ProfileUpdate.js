import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { updateUser, userLoading, cleanUserSuccessError } from '../../redux/actions/user/userActions'
import { Form, Item, Input, Textarea, Button, Icon, Spinner} from 'native-base'
import { showToast } from './../../helpers'
import Text from '../../utils/Text'
import AuthStyles from '../../styles/AuthStyles'
import { withNavigation } from 'react-navigation'


const ProfileUpdate = (props) => {
    const [uid] = useState(props.user.id)
    const [token] = useState(props.user.token)
    const [email, setEmail] = useState(props.user.email)
    const [username, setUsername] = useState(props.user.username)
    const [deliveryName, setDeliveryName] = useState(props.user.delivery_name)
    const [deliveryAddress, setDeliveryAddress] = useState(props.user.delivery_address)
    const [isLoading, setIsLoading] = useState(false)

    const handleUpdateUser = () => {
        props.userLoading()
        setIsLoading(!isLoading)
        props.updateUser(uid, email, username, deliveryName, deliveryAddress, token)
    }

    useEffect(() => {
        if (props.message && props.status) {
            showToast(props.message, props.status)
        }
        return function() {
            props.cleanUserSuccessError()
        }
    }, [props.message])

    const _spinner = props.loading ? <Spinner color='#fff' /> :<Text style={AuthStyles.buttonTextColor}>Update Profile</Text>

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
                            <Icon active name='ios-person' style={AuthStyles.IconStyle}/>
                            <Input value={ deliveryName } onChangeText={text => setDeliveryName(text)} placeholder='Delivery Name' style={AuthStyles.input}/>
                        </Item>
                        <Item style={AuthStyles.item}>
                            <Icon active name='ios-navigate' style={AuthStyles.IconStyle}/>
                            <Textarea value={ deliveryAddress } onChangeText={text => setDeliveryAddress(text)} style={[AuthStyles.input, AuthStyles.textArea]} placeholder="Delivery Address" />
                        </Item>
                        <Button 
                            style={AuthStyles.buttonSolid}
                            onPress={()=> handleUpdateUser()}>
                            {  _spinner }
                        </Button>
                    </Form>
                </View>
            </View>
        </View>
    )
}
ProfileUpdate.navigationOptions = {
    title: 'Profile Update',
};

const mapStateToProps = state => {
    return {
        loading: state.user.loading,
        status: state.user.status,
        message: state.user.message,
        user: state.user.user
    }
}
const mapDispatchToProps = {  userLoading, updateUser, cleanUserSuccessError }

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ProfileUpdate))


