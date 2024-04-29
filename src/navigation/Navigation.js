import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import Product from '../components/Product/Product';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#EEDCC6'
  },
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation () {
  return (
    <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
            <Stack.Screen options={{ headerShown: false }}   name="HomeScreen" component={TabNavigation} />
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>      
      </NavigationContainer>
  )
};

function TabNavigation () {
  return (
    <Tab.Navigator
    screenOptions={ ({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        borderRadius: 0,
        backgroundColor: '#230C02'
      },
      tabBarIcon: ({ focused }) => {
        let iconPath;

        if (route.name === 'Home') {
          iconPath = focused
            ? require('../../assets/img/home_active.png')
            : require('../../assets/img/home.png');
        } else if (route.name === 'Favorites') {
          iconPath = focused
            ? require('../../assets/img/heart_active.png')
            : require('../../assets/img/heart_inactive.png');
        } else if (route.name === 'Cart') {
          iconPath = focused
            ? require('../../assets/img/cart_active.png')
            : require('../../assets/img/cart.png');
        } else if (route.name === 'User') {
          iconPath = focused
            ? require('../../assets/img/user_active.png')
            : require('../../assets/img/user.png');
        }

        return <Image source={iconPath}/>;
      },
    })}>
    <Tab.Screen  name="Home" component={HomeScreen} />
    <Tab.Screen name="Favorites" component={HomeScreen} />
    <Tab.Screen name="Cart" component={HomeScreen} />
    <Tab.Screen  name="User" component={HomeScreen} />
  </Tab.Navigator>
  );
};
