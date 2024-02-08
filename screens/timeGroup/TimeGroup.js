import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { numberOfBoxes } from "../../assets/constants";

function medicineAmountDisplay(medicineAmount, boxNumber) {}

function TimeGroup({ route, navigation }) {
  const [medicineAmounts, setMedicineAmounts] = useState(
    Array(numberOfBoxes).fill(0)
  );
  const [isEditing, setIsEditing] = useState(false);

  const { groupName } = route.params;

  // Function to handle incrementing the medicine amount for a specific box
  const incrementMedicineAmount = (boxIndex) => {
    const updatedMedicineAmounts = [...medicineAmounts];
    updatedMedicineAmounts[boxIndex]++;
    setMedicineAmounts(updatedMedicineAmounts);
  };

  // Function to handle decrementing the medicine amount for a specific box
  const decrementMedicineAmount = (boxIndex) => {
    const updatedMedicineAmounts = [...medicineAmounts];
    if (updatedMedicineAmounts[boxIndex] > 0) {
      updatedMedicineAmounts[boxIndex]--;
      setMedicineAmounts(updatedMedicineAmounts);
    }
  };

  return (
    <View>
      <Text>
        {groupName} {isEditing ? "- Editting" : ""}
      </Text>
      {medicineAmounts.map((medicineAmount, index) => (
        <View key={index}>
          <Text>
            {medicineAmount} pills from box {index}
          </Text>
          {isEditing && (
            <View>
              <Button
                title="-"
                onPress={() => decrementMedicineAmount(index)}
              />
              <Button
                title="+"
                onPress={() => incrementMedicineAmount(index)}
              />
            </View>
          )}
        </View>
      ))}
      <Button
        title={isEditing ? "Done" : "Edit"}
        onPress={() => setIsEditing(!isEditing)}
      />
    </View>
  );
}

export default TimeGroup;
