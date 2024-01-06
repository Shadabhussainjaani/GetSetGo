import React from "react";
import { Alert } from "react-native";

const simpleAlertCall = (message, okFunction) => {
  Alert.alert("Domino", message, [
    { text: "OK", onPress: () => okFunction() },
  ]);
};

export default simpleAlertCall;
