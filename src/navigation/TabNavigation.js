import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconPath;

            if (route.name === 'Home') {
              iconPath = focused
                ? require('../../assets/img/home_active.png')
                : require('../../assets/img/home.png');
            } else if (route.name === 'Favorites') {
              iconPath = focused
                ? require('../../assets/img/heart_active.png')
                : require('../../assets/img/heart.png');
            } else if (route.name === 'Cart') {
              iconPath = focused
                ? require('../../assets/img/cart_active.png')
                : require('../../assets/img/cart.png');
            } else if (route.name === 'User') {
              iconPath = focused
                ? require('../../assets/img/user_active.png')
                : require('../../assets/img/user.png');
            }

            return <Image source={iconPath} style={{ width: 24, height: 24 }} />;
          },
        })}
       
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Favorites" component={HomeScreen} />
        <Tab.Screen name="Cart" component={HomeScreen} />
        <Tab.Screen name="User" component={HomeScreen} />

      </Tab.Navigator>
    );
};


export default TabNavigation;