import React from 'react'
import { View } from 'react-native'
import { Form, Item, Input, Icon, Button } from 'native-base'
import Text from './../../utils/Text'
import AuthStyles from '../../styles/AuthStyles'


const ForgotEmail = () => {
    return (
        <View style={{flex:1, backgroundColor:'#fff'}}>
            <View style={AuthStyles.headline}>
                <View>
                    <Text style={AuthStyles.headlineText}>We will send reset code to your email</Text>
                </View>
            </View>
            <View style={AuthStyles.wrapper}>
                <View>
                    <Form style={AuthStyles.form}>
                        <Item style={AuthStyles.item}>
                            <Icon active name='ios-lock' style={AuthStyles.IconStyle}/>
                            <Input placeholder='Email' style={AuthStyles.input}/>
                        </Item>
                        <Button rounded large style={AuthStyles.buttonSolid}><Text style={AuthStyles.buttonTextColor}>RESET PASSWORD</Text></Button>
                    </Form>
                </View>
            </View>
        </View>
    )
}
ForgotEmail.navigationOptions = {
    title: 'Forgot Password',
};
export default ForgotEmail
