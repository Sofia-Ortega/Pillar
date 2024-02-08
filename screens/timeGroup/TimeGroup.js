import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { numberOfBoxes } from "../../assets/constants";
import MedicineAmountDisplay from "./MedicineAmountDisplay";

function TimeGroup({ route, navigation }) {
  const [medicineAmounts, setMedicineAmounts] = useState(
    Array(numberOfBoxes).fill(0)
  );
  const [isEditing, setIsEditing] = useState(false);

  const { groupName } = route.params;

  // Function to handle incrementing the medicine amount for a specific box
  const incrementMedicineAmount = (boxIndex) => {
    const updatedMedicineAmounts = [...medicineAmounts];
    console.log("incrementing ", boxIndex);
    updatedMedicineAmounts[boxIndex]++;
    setMedicineAmounts(updatedMedicineAmounts);
  };

  // Function to handle decrementing the medicine amount for a specific box
  const decrementMedicineAmount = (boxIndex) => {
    const updatedMedicineAmounts = [...medicineAmounts];
    console.log("decrementing");
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

      <View style={styles.medicineAmountsCountainer}>
        {medicineAmounts.map((medicineAmount, index) => (
          <MedicineAmountDisplay
            key={index}
            medicineAmount={medicineAmount}
            boxNumber={index}
            isEditing={isEditing}
            decrementMedicineAmount={decrementMedicineAmount}
            incrementMedicineAmount={incrementMedicineAmount}
          />
        ))}
      </View>
      <Button
        title={isEditing ? "Done" : "Edit"}
        onPress={() => setIsEditing(!isEditing)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  medicineAmountsCountainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default TimeGroup;
