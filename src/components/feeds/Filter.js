import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, FlatList, View, Text } from 'react-native'
import { Content, Icon, Picker, Form } from 'native-base'

import styles from './../products/Styles'
const Filter = () => {
    const [selected, setSelected] = useState('new')
    const onValueChange = (value) => {
        setSelected(value)
    }
    return (
        <View>
            <Form>
                <Picker
                    mode="dropdown"
                    iosHeader="SORT BY"
                    iosIcon={<Icon name="arrow-down" />}
                    mode={'dropdown'}
                    selectedValue={selected}
                    onValueChange={onValueChange}
                >
                    <Picker.Item label="New Listing" value="new" />
                    <Picker.Item label="Old Listing" value="old" />
                    <Picker.Item label="Low Price" value="low" />
                    <Picker.Item label="High Price" value="high" />
                </Picker>
            </Form>
        </View>
    )
}

export default Filter
