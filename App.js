import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import TripsScreen from './screens/TripsScreen';
import TranslationScreen from './screens/TranslationScreen';
import ImagesScreen from './screens/ImagesScreen';
import FlightSearchScreen from './screens/FlightSearchScreen'; // Assuming you have this screen

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Translation" component={TranslationScreen} />
                <Stack.Screen name="Images" component={ImagesScreen} />
                <Stack.Screen name="FlightSearch" component={FlightSearchScreen} />
                {/* Add other screens as needed */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
