// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Schedule from "./screens/schedule/Schedule";
import TimeGroup from "./screens/timeGroup/TimeGroup";
import MedicinePrompt from "./screens/medicinePrompt/MedicinePrompt";
import TakeConfirmation from "./screens/medicinePrompt/TakeConfirmation";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Go to Schedule"
        onPress={() => navigation.navigate("Schedule")}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Schedule">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="MedicinePrompt" component={MedicinePrompt} />
        <Stack.Screen name="TakeConfirmation" component={TakeConfirmation} />
        <Stack.Screen
          name="TimeGroup"
          component={TimeGroup}
          options={({ route }) => ({ title: route.params.groupName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
