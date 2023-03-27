import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }} // android only
        onPress={props.onDeleteItem.bind(this, props.id)}
        // style={(pressData) => pressData.pressed && styles.pressedItem}
        style={({pressed}) => pressed && styles.pressedItem} // same as above line
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: { opacity: 0.5 },
  goalText: {
    padding: 8,
    color: "white",
  },
});
