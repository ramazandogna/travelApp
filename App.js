import { StyleSheet, Text, View } from 'react-native';

import Details from './components/Details';
import Entypo from 'react-native-vector-icons/Entypo';
import Home from './components/Home';
import Liked from './components/Liked';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './components/Profile';
import React from 'react';
import colors from './assets/colors/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

Entypo.loadFont();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
   return (
      <Tab.Navigator
         tabBarOptions={{
            style: styles.tabBar,
            activeTintColor: colors.orange,
            inactiveTintColor: colors.gray,
            showLabel: false,
         }}
         screenOptions={{
            headerShown: false, // Tüm ekranlarda başlığı gizle
         }}
      >
         <Tab.Screen
            name="Home"
            component={Home}
            options={{
               tabBarIcon: ({ color }) => (
                  <Entypo
                     name="home"
                     size={32}
                     color={color}
                  />
               ),
            }}
         />
         <Tab.Screen
            name="Liked"
            component={Liked}
            options={{
               tabBarIcon: ({ color }) => (
                  <Entypo
                     name="heart"
                     size={32}
                     color={color}
                  />
               ),
            }}
         />
         <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
               tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                     name="account"
                     size={32}
                     color={color}
                  />
               ),
            }}
         />
      </Tab.Navigator>
   );
};

const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="TabNavigator"
               component={TabNavigator}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="Details"
               component={Details}
               options={{ headerShown: false }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

const styles = StyleSheet.create({
   tabBar: {
      backgroundColor: colors.white,
      borderBottomLeftRadius: 20,
      borderTopRightRadius: 20,
   },
});

export default App;
