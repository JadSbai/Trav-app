// ImagesScreen.js
import React, { useState, useEffect } from 'react';
import {View, Text, Button, Image, StyleSheet, ScrollView, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagesScreen = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            console.log('loool', result)
            setImages([...images, result.assets[0].uri]);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upload Images</Text>
            <Button title="Pick an image from camera roll" onPress={pickImage} />

            <ScrollView>
                {images.map((img, index) => (
                    <Image key={index} source={{ uri: img }} style={styles.image} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#E0F7FA',
    },
    title: {
        fontSize: 22,
        marginVertical: 20,
        color: 'white',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginVertical: 10,
    },
    // You can add more styles as needed
});

export default ImagesScreen;
