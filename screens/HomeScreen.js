import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// Import your logo image here, for example:
// import Logo from './path-to-your-logo.jpg';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wanderwise</Text>

            {/*<Image source={require('./path-to-your-logo.jpg')} style={styles.logo} />*/}

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('FlightSearch')}>
                <Text style={styles.buttonText}>Flight Search</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Translation')}>
                <Text style={styles.buttonText}>Translation</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Images')}>
                <Text style={styles.buttonText}>Images</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0F7FA', // This should match the background color of the CU travel society logo
    },
    title: {
        fontSize: 30,
        color: 'white',
        marginBottom: 40,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 10,
        width: 200,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    // Additional styles can be added as needed
});

export default HomeScreen;
