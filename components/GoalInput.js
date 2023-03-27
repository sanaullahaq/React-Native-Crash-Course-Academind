import { View, TextInput, Button, StyleSheet, Modal , Image} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState(""); //initalizing a state with empty string

  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (!enteredGoalText.trim()) {
      alert("Please enter a goal");
      return;
    } else {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText("");
      stopAddGoalHander();
    }
  }
  function stopAddGoalHander() {
    props.hide();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={stopAddGoalHander} color='#e32636'/>
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color='green'/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "row",
    flexDirection: "column",
    // justifyContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#e9e8e2',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#bfafb2",
    backgroundColor: '#bfafb2',
    color: '#120438',
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image:{
    height: 100,
    width: 100,
    margin: 20
  }
});
