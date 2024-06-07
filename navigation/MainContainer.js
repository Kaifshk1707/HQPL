import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './Others/BottomTabs';
import Profile from './screens/Profile';
import Group from './screens/Group';
import Chats from './screens/Chats';
import AboutUs from './Others/AboutUs';
import Login from './Others/Login';
import Announcements from './Others/Announcements';

const Drawer = createDrawerNavigator();

const MainContainer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={BottomTabs} />
            <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Drawer.Screen name="Group" component={Group} options={{ headerShown: false }} />
            <Drawer.Screen name="Chats" component={Chats} options={{ headerShown: false }} />
            <Drawer.Screen name="AboutUs" component={AboutUs} options={{ headerShown: false }} />
            <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Drawer.Screen name="News" component={Announcements} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
}

export default MainContainer;
