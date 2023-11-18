import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TripsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Choose Your Adventure</Text>
            <Button
                title="Ready to fly?"
                onPress={() => navigation.navigate('FlightSearch')}
                color="#4CAF50"
            />
            <Button
                title="Things to do"
                onPress={() => navigation.navigate('ActivitiesSearch')}
                color="#2196F3"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0F7FA', // Assuming this matches the CU travel society logo background
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: 'white',
    },
    button: {
        marginTop: 10,
        width: 200,
        borderRadius: 5,
    },
});

export default TripsScreen;
