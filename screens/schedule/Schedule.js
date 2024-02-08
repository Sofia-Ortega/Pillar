import React from "react";
import { View, Text, Button } from "react-native";

const Schedule = ({ navigation }) => {
  const groups = ["Morning", "Afternoon", "Evening"];

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
    </View>
  );
};

export default Schedule;
