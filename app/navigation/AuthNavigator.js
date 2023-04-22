import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import routes from './routes';
import RegisterScreen from '../navigation/RegisterScreen';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();


const AuthNavigator = () => (
        <Stack.Navigator>
            <Stack.Screen name={routes.WELCOME} component={WelcomeScreen} options ={{headerShown : false}} />
            <Stack.Screen name={routes.LOGIN} component={LoginScreen} options ={{headerShown : false}} />
            <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
            <Stack.Screen name={routes.FEED} component={AppNavigator} options ={{headerShown : false}}/>
        </Stack.Navigator>
)

export default AuthNavigator;
