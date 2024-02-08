import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Paragraph from "../../components/Paragraph";

const MedicineAmountDisplay = ({
  medicineAmount,
  boxNumber,
  isEditing,
  decrementMedicineAmount,
  incrementMedicineAmount,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.amountContainer}>
        <View
          style={[
            styles.numericInputContainer,
            isEditing && styles.numericInputBorder,
          ]}
        >
          {isEditing && (
            <Button
              title="-"
              style={styles.button}
              onPress={() => decrementMedicineAmount(boxNumber)}
            />
          )}
          <Paragraph style={styles.numberContainer}>{medicineAmount}</Paragraph>
          {isEditing && (
            <Button
              title="+"
              style={styles.button}
              onPress={() => incrementMedicineAmount(boxNumber)}
            />
          )}
        </View>
        <Paragraph> pills from box {boxNumber + 1}</Paragraph>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  amountContainer: {
    flex: 1,
    marginRight: 10,
    fontSize: 40,
    flexDirection: "row",
  },
  numberContainer: {
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  numericInputContainer: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 0,
    borderColor: "grey",
    borderRadius: 10,
  },
  numericInputBorder: {
    borderWidth: 1,
    padding: 5,
  },
});

export default MedicineAmountDisplay;
