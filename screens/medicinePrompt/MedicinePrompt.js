import React from "react";
import { View, Text, Button } from "react-native";
import Paragraph from "../../components/Paragraph";
import { groups } from "../../assets/constants";

const MedicinePrompt = ({ navigation }) => {
  const dummyGroup = groups[0];

  const goToConfirmation = (didTake) => {
    /*
    navigation.reset({
      index: 0,
      routes: [{ name: "Schedule" }],
    });
    */
    navigation.navigate("TakeConfirmation", { didTake: didTake });
  };

  // Set screen options to hide the back arrow
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null,
    });
  }, [navigation]);

  return (
    <View>
      <Paragraph>{dummyGroup}</Paragraph>
      <Text>This is the Medicine screen</Text>
      <Button title="Take" onPress={() => goToConfirmation(true)} />
      <Button title="Skip" onPress={() => goToConfirmation(false)} />
    </View>
  );
};

export default MedicinePrompt;
