// TranslationScreen.js
import React, { useState } from 'react';
import * as Speech from 'expo-speech';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from "axios";
const AGEMO_API_KEY = '0mlVgL9m1Z7QfUhhMt8ZX2csUau6NEa981twzqoa';
import { Picker } from '@react-native-picker/picker';
const TranslationScreen = () => {
    const [sourceLanguage, setSourceLanguage] = useState('en');
    const [targetLanguage, setTargetLanguage] = useState('es');
    const [textToTranslate, setTextToTranslate] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const translateText = async () => {
        try {
            // Replace this URL with your translation API endpoint
            axios.post('https://api.agemo.ai/execute-sync', {
                app_id: 'clp463p9l0009jy089syxw715',
                inputs: {
                    "text_to_translate": textToTranslate,
                    "target_language": targetLanguage,
                    "source_language": sourceLanguage,
                }
            }, {
                headers: {
                    'x-api-key': AGEMO_API_KEY
                }
            })
                .then(response => {
                    console.log(response.data, "response");
                    setTranslatedText(response.data.appOutputs.translated_text);
                    // Read aloud the translated text
                    Speech.speak(response.data.appOutputs.translated_text);
                })
                .catch(error => {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        console.log("Error Status:", error.response.status);
                        console.log("Error Headers:", error.response.headers);
                    } else if (error.request) {
                        // The request was made but no response was received
                        console.log("Error Request:", error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log("Error Message:", error.message);
                    }
                    console.log("Error Config:", error.config);
                });

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Source Language:</Text>
            <Picker
                selectedValue={sourceLanguage}
                onValueChange={(itemValue) => setSourceLanguage(itemValue)}>
                <Picker.Item label="English" value="en" />
                <Picker.Item label="Spanish" value="es" />
                <Picker.Item label="Spanish" value="fr" />
                {/* Add more languages as needed */}
            </Picker>

            <Text style={styles.label}>Target Language:</Text>
            <Picker
                selectedValue={targetLanguage}
                onValueChange={(itemValue) => setTargetLanguage(itemValue)}>
                <Picker.Item label="Spanish" value="es" />
                <Picker.Item label="English" value="en" />
                <Picker.Item label="Spanish" value="fr" />
                {/* Add more languages as needed */}
            </Picker>

            <TextInput
                style={styles.input}
                placeholder="Enter text to translate"
                value={textToTranslate}
                onChangeText={setTextToTranslate}
            />

            <Button title="Translate" onPress={translateText} />
            <Text style={styles.translatedText}>{translatedText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#E0F7FA',
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    translatedText: {
        marginTop: 20,
        fontSize: 18,
    },
    // Additional styles as needed
});

export default TranslationScreen;
