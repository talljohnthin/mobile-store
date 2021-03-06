import React from 'react'
import { View, Text } from 'react-native'
import { Badge } from 'native-base'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
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
import OrderList from './../components/orders/OrderList'
import ViewOrders from './../components/orders/ViewOrders'
import HistoryList from './../components/orders/HistoryList'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import TotalInBasketAndOrders from './../utils/TotalInBasketAndOrders'

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
    headerTitleStyle: {
      fontSize:17
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
    headerTitleStyle: {
      fontSize:17
    },
    headerTintColor: primaryColor,
    headerTitleAlign:'left',
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
  OrderSuccess : OrderSuccess,
  OrderList: OrderList,
  HistoryList: HistoryList,
  ViewOrders: ViewOrders,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor:'#fff',
    },
    headerTitleStyle: {
      fontSize:17
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
      fontSize:17,
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
          <Octicons name={'home'} style={[{ color: tintColor }]} size={25} />
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
          <SimpleLineIcons name={'layers'} style={[{ color: tintColor }]} size={22} />
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
          <Ionicons name={'ios-options'} style={[{ color: tintColor }]} size={25} />
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
          <Feather name={'user'} style={[{ color: tintColor}]} size={25} />
          <TotalInBasketAndOrders />
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
