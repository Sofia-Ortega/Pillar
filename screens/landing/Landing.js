// screens/HomeScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const Landing = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go to Second Screen" onPress={() => navigation.navigate('Second')} />
    </View>
  );
};

export default Landing;