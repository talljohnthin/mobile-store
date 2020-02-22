import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux'
import returnStoreAndPersistor  from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import * as Font from 'expo-font';
import { View} from 'react-native';
import { StyleProvider, Root } from 'native-base'
import { createAppContainer } from 'react-navigation'
import { RootStack } from './src/navigations/BottomTabNavigator'

const { store, persistor } = returnStoreAndPersistor()

console.disableYellowBox = true;

const Application = createAppContainer(RootStack)
const App = () => {
   
    const [isFontReady, setIsFontReady] = useState(false)

    useEffect(() => {
        const loadFont = async() => {
            await Font.loadAsync({
                'lightFont': require('./assets/fonts/Hind-Light.ttf'),
                'regularFont': require('./assets/fonts/Hind-Regular.ttf'),
                'mediumFont': require('./assets/fonts/Hind-Medium.ttf'),
                'boldFont': require('./assets/fonts/Hind-Bold.ttf'),
            })
            setIsFontReady(true)
        }
        loadFont()
    }, [])

    return isFontReady && <StyleProvider style={getTheme(material)}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Root>
                    <Application /> 
                </Root>
            </PersistGate>
        </Provider>
    </StyleProvider>
}

export default App;