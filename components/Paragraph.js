import React from "react";
import { Text, StyleSheet } from "react-native";

const Paragraph = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});

export default Paragraph;
