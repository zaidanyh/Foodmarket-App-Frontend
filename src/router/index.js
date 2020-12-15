import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { 
    SignIn, 
    SplashScreen, 
    SignUp, 
    SignUpAddress, 
    SuccessSignUp,
    Home,
    Order,
    Profile
} from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNav } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNav {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Order" component={Order} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="SplashScreen" 
            component={SplashScreen} 
            options={{ headerShown: false }} />
            
            <Stack.Screen 
            name="SignIn" 
            component={SignIn} 
            options={{ headerShown: false }} />

            <Stack.Screen 
            name="SignUp" 
            component={SignUp} 
            options={{ headerShown: false }} />

            <Stack.Screen 
            name="SignUpAddress" 
            component={SignUpAddress} 
            options={{ headerShown: false }} />

            <Stack.Screen 
            name="SuccessSignUp" 
            component={SuccessSignUp} 
            options={{ headerShown: false }} />

            <Stack.Screen 
            name="MainApp" 
            component={MainApp} 
            options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default Router;