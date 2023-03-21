import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";

import GoalItem from './components/GoalItem.js';
import GoalInput from "./components/GoalInput.js";

export default function App() {

  //this standard react syntax tells that 'enteredGoalText' state variable can be chaged by 'setEnteredGoalText' function
  const [courseGoals, setCourseGoals] = useState([]); //initializing a state with empty array
  
  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText);
    // setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText,]);
    // setCourseGoals((currentCourseGoals) => [
    //   ...currentCourseGoals,
    //   { text: enteredGoalText, key: Math.random().toString() },
    // ]);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    //FlatList expects a object, that's why turned the 'enteredGoalText' into a object. this is not mandatory but preferable
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>

      {/* <View style={styles.goalsContainer}> */}
      {/* The border radious does not take effect in IOS 'Text' tag only works in android.
          'View' tag supports border radious both IOS and android that's the method 2.
          
          ***Another Important Note***
            Unike CSS styling on Parent Element does not take effect in child element in React Native.
            That's why need to put the text color in 'Text' tag 
        */}
      {/* method-1 */}
      {/* { courseGoals.map((goal) => <Text style={styles.goalItem} key={goal}>{goal}</Text>) } */}

      {/* method-2 */}
      {/* {courseGoals.map((goal) => (
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))} */}
      {/* </View> */}
      {/* <View style={styles.goalsContainer}>
        <ScrollView> */}
      {/* with only 'ScrollView' the UI does not look good,
          the 'ScrollView' does not take the area properly,
          that's why wrapped it with 'View' tag.
          on the other hand the 'ScrollView' is not perfect for dynamic list.
          It will be rendering the entire list at once, does not matter what is the list size.
          It is perfect when the content has a limit for example article or blog.
          We will use 'FlatList' here. 'FlatList' loads the list lazyly.
          */}
      {/* {courseGoals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))} */}
      {/* </ScrollView>
      </View> */}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}/>
          }}
          keyExtractor={(item, index)=> {
            return item.id
          }}
        />
        {/* 'FlatList' wrap the data into onter object with few other meta data.
        and the actual 'item' or 'object' passed into 'FlatList' can be found by using 'object.item'
        
        Incase there is no key attribute of the actual object then we will use keyExtractor()
        what can be used to return a unique key. since the actual object has a id attribute so have returned it from here*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  }
});
