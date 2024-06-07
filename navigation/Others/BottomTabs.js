import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './../screens/Home';
import Search from './../screens/Search';
import Group from './../screens/Group';
import Chats from './../screens/Chats';
import Profile from './../screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    const icons = {
                        Qoneqt: focused ? 'home' : 'home-outline',
                        Search: focused ? 'search' : 'search-outline',
                        Group: focused ? 'people' : 'people-outline',
                        Chats: focused ? 'chatbubbles' : 'chatbubbles-outline',
                        Profile: focused ? 'person' : 'person-outline'
                    };
                    return <Ionicons name={icons[route.name]} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#6E29FA',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name='Qoneqt' component={Home} options={{ headerShown: false }} />
            <Tab.Screen name='Search' component={Search} options={{ headerShown: false }} />
            <Tab.Screen name='Group' component={Group} options={{ headerShown: false }} />
            <Tab.Screen name='Chats' component={Chats} options={{ headerShown: false }} />
            <Tab.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default BottomTabs;
