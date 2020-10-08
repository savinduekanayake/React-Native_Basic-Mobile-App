import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  // const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);



  // //just like a function
  // const  goalInputHandler = (enteredText) => {
  //   setEnteredGoal(enteredText);
  // }

  const addGoalHandler = (goalTitile) => {
    if(goalTitile.length === 0){
      return;
    }
    // add new value to array
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {
        id: Math.random().toString(),
        value: goalTitile
      }
    ]);
    setIsAddMode(false);
  };

  // remove a element
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      // remove item from a list by id
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

      // for cancel button
      const cancelGoalAdditionHandler = () =>{
        setIsAddMode(false);
      }

  return (
    <View style={styles.screen}>

      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>

      {/* <View style={ styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChange={goalInputHandler}
          value= {enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View> */}

      {/* <View>
        {courseGoals.map((goal) => <Text>{goal}</Text>)}
      </View> */}


      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />

      {/* Good more than scrollView */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem 
            id={itemData.item.id} 
            onDelete={removeGoalHandler} 
            title={itemData.item.value}
          />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
