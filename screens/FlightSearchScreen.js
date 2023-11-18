import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {getFlightResults} from "../backend/codewords queries";

const FlightSearchScreen = () => {
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [flights, setFlights] = useState([]);
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);

    const searchFlights = async () => {
        // Replace with your API call logic
        await getFlights(fromLocation, toLocation, startDate, endDate);
    };

    const onStartDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || startDate;
        setShowStartDatePicker(Platform.OS === 'ios'); // Keep the picker open on iOS
        setStartDate(currentDate);
    };

    const onEndDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || endDate;
        setShowEndDatePicker(Platform.OS === 'ios'); // Keep the picker open on iOS
        setEndDate(currentDate);
    };

    const formatDate = (date) => {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    };

    const getFlights = async () => {

        return getFlightResults(fromLocation, toLocation, startDate, endDate).then((response) => {
            console.log(response)
            setFlights([{"price":200,"arrival_time":"2023-12-25T12:00:00Z","flight_number":"AF1234","departure_time":"2023-12-25T08:00:00Z"}])
        });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="From Location"
                value={fromLocation}
                onChangeText={setFromLocation}
            />
            <TextInput
                style={styles.input}
                placeholder="To Location"
                value={toLocation}
                onChangeText={setToLocation}
            />

            <View style={styles.datePickerContainer}>
                <Button title="Select Departure Date" onPress={() => setShowStartDatePicker(true)} />
                {showStartDatePicker && (
                    <DateTimePicker
                        value={startDate}
                        mode="date"
                        display="default"
                        onChange={onStartDateChange}
                    />
                )}
                <Text style={styles.dateText}>Start Date: {formatDate(startDate)}</Text>
            </View>

            <View style={styles.datePickerContainer}>
                <Button title="Select End Date" onPress={() => setShowEndDatePicker(true)} />
                {showEndDatePicker && (
                    <DateTimePicker
                        value={endDate}
                        mode="date"
                        display="default"
                        onChange={onEndDateChange}
                    />
                )}
                <Text style={styles.dateText}>End Date: {formatDate(endDate)}</Text>
            </View>

            <Button title="Search Flights" onPress={searchFlights} />

            <FlatList
                data={flights}
                renderItem={({ item }) => (
                    <View style={styles.flightItem}>
                        <Text>{item.flight_number} - {item.price}$</Text>
                        {/* Add more details if needed */}
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#E0F7FA',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
        marginBottom: 10,
    },
    datePickerContainer: {
        marginBottom: 10,
    },
    dateText: {
        fontSize: 16,
        marginTop: 5,
    },
    flightItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    // Additional styling as needed
});


export default FlightSearchScreen;

// Mock function for fetching flights

