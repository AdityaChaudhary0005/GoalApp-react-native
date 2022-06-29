import { View, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredGoalText}
        style={styles.textInput}
        placeholderTextColor='#839AA8'
        placeholder='Your Goal'
        onChangeText={goalInputHandler}
      />
      <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#51557E",
  },
  textInput: {
    borderWidth: 1,
    color: "white",
    borderColor: "#51557E",
    width: "80%",
    marginRight: 8,
  },
});
