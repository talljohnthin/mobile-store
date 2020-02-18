import React from 'react'
import { View } from 'react-native'
import { Form, Item, Input, Button, Icon } from 'native-base'
import Text from './../../utils/Text'
import AuthStyles from '../../styles/AuthStyles'

const ResetPassword = () => {
    return (
        <View style={{flex:1, backgroundColor:'#fff'}}>
            <View style={AuthStyles.headline}>
                <View>
                    <Text style={AuthStyles.headlineText}>In publishing and graphic design, lorem ipsum In publishing</Text>
                </View>
            </View>
            <View style={AuthStyles.wrapper}>
                <View>
                    <Form style={AuthStyles.form}>
                        <Item style={AuthStyles.item}>
                            <Icon active name='ios-lock' style={AuthStyles.IconStyle}/>
                            <Input placeholder='New Password' password={true} secureTextEntry={true} style={AuthStyles.input}/>
                        </Item>
                        <Item style={AuthStyles.item}>
                            <Icon active name='ios-lock' style={AuthStyles.IconStyle}/>
                            <Input placeholder='Repeat Password' password={true} secureTextEntry={true} style={AuthStyles.input}/>
                        </Item>
                        <Button rounded large style={AuthStyles.buttonSolid}><Text style={AuthStyles.buttonTextColor}>RESET PASSWORD</Text></Button>
                  
                    </Form>
                </View>
            </View>
        </View>
    )
}
ResetPassword.navigationOptions = {
    title: 'Reset Password',
};
export default ResetPassword
