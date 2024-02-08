import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  numberOfBoxes,
  getMedicineAmountKey,
  setData,
} from "../../assets/constants";
import MedicineAmountDisplay from "./MedicineAmountDisplay";
import storage from "../../components/storage";
import Paragraph from "../../components/Paragraph";

function TimeGroup({ route, navigation }) {
  const [medicineAmounts, setMedicineAmounts] = useState(
    Array(numberOfBoxes).fill(0)
  );
  const [isEditing, setIsEditing] = useState(false);
  const [date, setDate] = useState(new Date());

  const { groupName } = route.params;

  const onTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

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

  const onPressDoneEditButton = () => {
    // if saving
    if (isEditing) {
      saveData();
    }
    setIsEditing(!isEditing);
  };

  const saveData = async () => {
    console.log("saving data");
    // const timestamp = date.getDate();
    storage.save({
      key: getMedicineAmountKey(groupName),
      data: setData(date, medicineAmounts),
    });
  };

  const loadData = async () => {
    console.log("loading data");
    console.log(getMedicineAmountKey(groupName)),
      storage
        .load({
          key: getMedicineAmountKey(groupName),
        })
        .then((ret) => {
          console.log(ret.time);
          if (ret != null) {
            if (ret.time) setDate(new Date(ret.time));
            if (ret.medicineAmounts) setMedicineAmounts(ret.medicineAmounts);
          }
        });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.timeGroupContainer}>
      <View style={styles.timeContainer}>
        <Paragraph>Time: </Paragraph>

        <DateTimePicker
          style={styles.dateTimePicker}
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          onChange={onTimeChange}
          disabled={!isEditing}
        />
      </View>
      <Text>-----------------------------------</Text>

      <View>
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
        onPress={onPressDoneEditButton}
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
  timeGroupContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  timeContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 20,
  },
});

export default TimeGroup;
