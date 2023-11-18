import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {getFlightResults} from './backend/codewords queries';

export default function App() {
  const [flightResults, setFlightResults] = React.useState(null);

  const handlePress = async () => {
    ('handlePress')
    const results = await getFlightResults();
    console.log('results', results);
    setFlightResults(results);
  };

  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
            title="Get Flight Results"
            onPress={handlePress}
        />
        {flightResults && <Text>{JSON.stringify(flightResults, null, 2)}</Text>}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
