import React, { useState } from 'react';
import { connect } from 'react-redux'
import { fetchUser } from './../../redux/actions/user/userActions'
import Carousel from 'react-native-snap-carousel';
import { View, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'

import styles from './Styles'
import { ScrollView } from 'react-native-gesture-handler';

const Hero = props => {

    const [dataImage, setDataImage] = useState([
        { url: 'https://firebasestorage.googleapis.com/v0/b/shop-39810.appspot.com/o/images%2Fwatch6.png?alt=media&token=3b664620-946c-47b2-afed-570fad37e1f2' },
        { url: 'https://firebasestorage.googleapis.com/v0/b/shop-39810.appspot.com/o/images%2Fwatch7.png?alt=media&token=b5699e58-c3f2-41eb-b664-87b0ca344eb4' },
        { url: 'https://firebasestorage.googleapis.com/v0/b/shop-39810.appspot.com/o/images%2Fwatch51.png?alt=media&token=8b87396f-c70a-40fb-9728-0a7a56e119e8' }
    ])

    const deviceWidth = Math.round(Dimensions.get('window').width)

    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.heroWrapper}>
                <TouchableOpacity activeOpacity={0.9}>
                    <ImageBackground
                        source={{ uri: item.url }}
                        resizeMode={'cover'}
                        style={styles.imageBackground}>
                            <View style={styles.imageOpacity}></View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <ScrollView style={{ padding: 0 }}>
            <Carousel
                data={dataImage}
                renderItem={_renderItem}
                sliderWidth={deviceWidth}
                itemWidth={deviceWidth}
            />
        </ScrollView>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    getUser: state.user
  }
}

const mapDispatchToProps = { fetchUser }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero)
