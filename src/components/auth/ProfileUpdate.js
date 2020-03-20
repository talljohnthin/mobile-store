import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { updateUser, userLoading, cleanUserSuccessError } from '../../redux/actions/user/userActions'
import { Form, Item, Input, Textarea, Button, Icon, Spinner} from 'native-base'
import { showToast } from './../../helpers'
import Text from '../../utils/Text'
import { withNavigation } from 'react-navigation'
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler'

import AuthStyles from '../../styles/AuthStyles'
import Styles from './Styles'
import { linearDark,linearLight } from './../../styles/Variables'

const ProfileUpdate = (props) => {
    const [uid] = useState(props.user.uid)
    //const [email, setEmail] = useState(props.user.email)
    const [fullName, setFullName] = useState(props.user.name)
    const [isLoading, setIsLoading] = useState(false)

    const handleUpdateUser = () => {
        props.userLoading()
        setIsLoading(!isLoading)
        props.updateUser(fullName)
        setTimeout(()=>{
            props.navigation.navigate('Profile')
        }, 500)
    }

    let isMounted = false

    useEffect(() => {
        isMounted = true
        if(isMounted) {
            if (props.message && props.status) {
                showToast(props.message, props.status)
            }
            return function() {
                props.cleanUserSuccessError()
            }
        }
        return () => {
            isMounted = false;
        }
    }, [props.message])

    const _spinner = props.loading ? <Spinner color='#fff' /> :<Text style={Styles.buttonTextColor}>Update Profile</Text>

    return (
        <View style={{flex:1, backgroundColor:'#fff', paddingTop:10}}>
            <View style={AuthStyles.wrapper}>
                <View>
                    <Form style={AuthStyles.form}>
                        <Item style={AuthStyles.item}>
                            <Icon active name='ios-person' style={AuthStyles.IconStyle}/>
                            <Input value={ fullName } onChangeText={text => setFullName(text)} placeholder='Full Name' style={AuthStyles.input}/>
                        </Item>
                        <TouchableOpacity activeOpacity={0.9} 
                            onPress={()=> handleUpdateUser()}
                            >
                            <LinearGradient
                                start={[0, 1]} end={[1, 0]}
                                colors={[linearDark, linearLight]}
                                style={[SharedStyles.linearButton]}>
                                    {  _spinner }
                            </LinearGradient>
                        </TouchableOpacity>
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


