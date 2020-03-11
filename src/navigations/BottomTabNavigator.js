import React from 'react'
import { View, Text } from 'react-native'
import { Badge } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import Login from './../components/auth/Login'
import SignUp from './../components/auth/SignUp'
import ResetPassword from './../components/auth/ResetPassword'
import ForgotEmail from './../components/auth/ForgotEmail'
import Home from './../screens/Home'
import Search from './../components/search/Search'
import SearchAndFilter from './../components/products/SearchAndFilter'
import Filter from './../components/filter/Filter'
import Products from './../components/products/Products'
import ProductFilterByCategory from './../components/products/ProductFilterByCategory'
import ProfileUpdate from './../components/auth/ProfileUpdate'
import Categories from './../screens/Categories'
import Profile from './../screens/Profile'
import Basket from './../screens/Basket'
import Explore from './../screens/Explore'
import OrderSuccess from './../components/orders/OrderSuccess'
import ProductDetail from './../components/products/ProductDetail'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import styles from './Styles'

import {
  primaryColor,
  fifthColor,
  primaryFont,
  tertiaryFont
} from './../styles/Variables'

const HomeStack = createStackNavigator({
  Home: Home,
  ProductDetail: ProductDetail,
  Products : Products,
  Search: Search,
  Filter: Filter,
  SearchAndFilter: SearchAndFilter
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: primaryColor,
    headerTitleAlign:'center'
  }
})

const ExploreStack = createStackNavigator({
  Explore: Explore,
  ProductDetail: ProductDetail,
  SearchAndFilter: SearchAndFilter
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: primaryColor,
    headerTitleAlign:'center'
  }
})

const ProfileStack = createStackNavigator({
  Profile: Profile,
  Login:Login,
  SignUp: SignUp,
  ForgotEmail: ForgotEmail,
  ResetPassword: ResetPassword,
  Basket:Basket,
  ProfileUpdate: ProfileUpdate,
  OrderSuccess: OrderSuccess
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: primaryColor,
    headerTitleAlign:'center'
  }
})

const CategoriesStack = createStackNavigator({
  Categories: Categories,
  ProductFilterByCategory: ProductFilterByCategory,
  SearchAndFilter: SearchAndFilter
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: primaryColor,
    headerTitleStyle: {
      textAlign:'center',
      fontFamily:tertiaryFont,
    },
    headerTitleAlign:'center'
  }
})


export const RootStack = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      headerTitleStyle: {
        fontFamily: primaryFont,
      },
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon name={'home'} style={[{ color: tintColor }]} size={25} />
        </View>
      )
    }
  },
  Explore: {
    screen: ExploreStack,
    navigationOptions: {
      headerTitleStyle: {
        fontFamily: primaryFont,
      },
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon name={'appstore-o'} style={[{ color: tintColor }]} size={22} />
        </View>
      )
    }
  },
  Categories: {
    screen: CategoriesStack,
    navigationOptions: {
      headerTitleStyle: {
        fontFamily: primaryFont,
      },
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon name={'bars'} style={[{ color: tintColor }]} size={25} />
        </View>
      )
    }
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      headerTitleStyle: {
        fontFamily: primaryFont,
      },
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon name={'user'} style={[{ color: tintColor }]} size={25} />
          <Badge warning style={styles.userBadge}>
            <Text style={styles.userBadgeCount}>1</Text>
          </Badge>
        </View>
      )
    }
  }
},
  {
    initialRouteName: 'Home',
    activeColor: fifthColor,
    inactiveColor: primaryColor,
    labeled:true,
    shifting:false,
    barStyle: { 
      backgroundColor: 'transparent',
      paddingTop:3,
      paddingBottom:3
    }
  })
