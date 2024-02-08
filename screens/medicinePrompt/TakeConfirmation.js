import React from "react";
import { View, Text, Button } from "react-native";
import Paragraph from "../../components/Paragraph";
import { groups } from "../../assets/constants";

const TakeConfirmation = () => {
  const dummyGroup = groups[0];
  return (
    <View>
      <Paragraph>{dummyGroup}</Paragraph>
      <Text>This is the Medicine screen</Text>
      <Button title="Take" />
      <Button title="Skip" />
    </View>
  );
};

export default TakeConfirmation;
