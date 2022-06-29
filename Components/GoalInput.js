import { View, TextInput, Button, Modal, Image } from "react-native";
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

  function endGoalHander() {
    props.onCancelInput();
  }

  return (
    <Modal
      visible={props.isVisible}
      animationType='slide'
      style={styles.modalStyle}>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          placeholderTextColor='#839AA8'
          placeholder='Your Goal'
          onChangeText={goalInputHandler}
        />
        <View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='Add Goal' onPress={addGoalHandler} />
            </View>
            <View style={styles.button}>
              <Button title='Cancel' color='#D61C4E' onPress={endGoalHander} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalStyle: {},
  inputContainer: {
    backgroundColor: "#1B2430",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#51557E",
  },
  textInput: {
    borderWidth: 1,
    color: "white",
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "#3F4159",
    backgroundColor: "#3F4159",
    borderRadius: 7,
    width: "80%",
    marginRight: 7,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },

  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
