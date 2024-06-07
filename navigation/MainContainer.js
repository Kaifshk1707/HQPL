import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import Search from './screens/Search';
import Group from './screens/Group';
import Chats from './screens/Chats';
import Profile from './screens/Profile';
import AboutUs from './Others/AboutUs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


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
                tabBarActiveTintColor: '#FFD133',
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

const MainContainer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={BottomTabs} />
            <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Drawer.Screen name="Group" component={Group} options={{ headerShown: false }} />
            <Drawer.Screen name="Chats" component={Chats} options={{ headerShown: false }} />
            <Drawer.Screen name="AboutUs" component={AboutUs} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
}

export default MainContainer;
