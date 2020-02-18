import React from 'react'
import { View, } from 'react-native'
import { Content, Button, ListItem, Text, Icon, Left, Body, Right } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler'

import styles from './Styles'


const UserOptions = (props) => {
    return (
        <View style={styles.userOptionsWrapper}>
            <Content>
                <TouchableOpacity activeOpacity={0.8}>
                    <ListItem icon style={styles.listItem}>
                        <Left style={styles.listItem}>
                            <Button style={styles.UserOptionsButton}>
                                <Ionicons style={styles.UserOptionsIcon} name="ios-timer" />
                            </Button>
                        </Left>
                        <Body style={styles.listItem}>
                            <Text style={styles.UserOptionsText}>Order History</Text>
                        </Body>
                        <Right style={styles.listItem}>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={ () => props.navigation.navigate('ProfileUpdate')}>
                    <ListItem icon style={styles.listItem}>
                        <Left style={styles.listItem}>
                            <Button style={styles.UserOptionsButton}>
                                <IconAntDesign style={styles.UserOptionsIcon} name="setting" />
                            </Button>
                        </Left>
                        <Body style={styles.listItem}>
                            <Text style={styles.UserOptionsText}>Update Profile</Text>
                        </Body>
                        <Right style={styles.listItem}>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                </TouchableOpacity>
            </Content>
        </View>
    )
}

export default withNavigation(UserOptions)
