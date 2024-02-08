import React from "react";
import { View, Text, Button } from "react-native";
import Paragraph from "../../components/Paragraph";

const TakeConfirmation = ({ route, navigation }) => {
  const { didTake } = route.params;
  return (
    <View>
      <Paragraph>{didTake ? "You took it!" : "Skipped"}</Paragraph>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Schedule")}
      />
    </View>
  );
};

export default TakeConfirmation;
