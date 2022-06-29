import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  Text,
  Pressable,
} from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHander() {
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    setModalIsVisible(false);
  }
  function deleteGoalHandler(goalId) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <>
      <StatusBar style='light' />

      <View style={styles.appContainer}>
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <Pressable onPress={startAddGoalHandler} style={styles.addNewButton}>
            <View>
              <Text style={{ fontWeight: "800" }}>Add New Goal</Text>
            </View>
          </Pressable>
        </View>

        <GoalInput
          onAddGoal={addGoalHandler}
          isVisible={modalIsVisible}
          onCancelInput={endAddGoalHander}
        />
        {courseGoals.length === 0 && (
          <View style={{ marginTop: 150 }}>
            <Text style={{ color: "white", fontSize: 20, alignSelf: "center" }}>No Goals. Please add one!</Text>
          </View>
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteGoal={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#253243",
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  addNewButton: {
    marginBottom: 10,
    backgroundColor: "#6B77F5",
    paddingLeft: 5,
    paddingRight: 5,
    width: 240,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },

  goalsContainer: {
    flex: 4,
  },
});
