import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";
export default function GoalInput(props) {
  function handleGoalDelete() {
    console.log("Goal deleted");
    props.onDeleteGoal(props.id);
  }
  return (
    <View>
      <Pressable style={styles.goalItem} android_ripple={{ color: "#BD98DE" }}>
        <Text style={styles.goalText}>{props.text}</Text>
        <Pressable onPress={handleGoalDelete}>
          <View style={styles.goalDelete}>
            <Text style={{ fontWeight: "800" }}>X</Text>
          </View>
        </Pressable>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    backgroundColor: "#816797",
    shadowColor: "blue",
    padding: 16,
  },
  goalText: {
    color: "white",
  },
  goalDelete: {
    width: 24,
    height: 24,
    backgroundColor: "#D61C4E",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#51557E",
    alignItems: "center",
    justifyContent: "center",
  },
});
