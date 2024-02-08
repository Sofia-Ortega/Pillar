import React from "react";
import { View, Text, Button } from "react-native";
import { groups } from "../../assets/constants";

const Schedule = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is the Schedule screen</Text>
      {groups.map((group, index) => (
        <View key={index}>
          <Button
            title={group}
            onPress={() =>
              navigation.navigate("TimeGroup", { groupName: group })
            }
          />
        </View>
      ))}

      <Text>-------------------------------------------</Text>

      <Button
        title="Medicine Prompt"
        onPress={() => navigation.navigate("MedicinePrompt")}
      />
    </View>
  );
};

export default Schedule;
