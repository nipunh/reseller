import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ListScreen from '../screens/ListScreen';
import ListingDetailsScreens from '../screens/ListingDetailsScreens';
import routes from './routes';


const Stack = createStackNavigator();


const FeedNavigator = () => (
        <Stack.Navigator mode='modal'>
            <Stack.Screen name={routes.LISTING} component={ListScreen} options ={{headerShown : false}}/>
            <Stack.Screen name={routes.LISTING_DETAILS} component={ListingDetailsScreens} options ={{headerShown : false}} />
        </Stack.Navigator>
)

export default FeedNavigator;
