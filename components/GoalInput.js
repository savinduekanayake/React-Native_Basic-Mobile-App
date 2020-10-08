import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    //just like a function
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    //reset the text feild to empty after add the value
    const addGoalHandler = () => {
        // props.onAddGoal.bind(this, enteredGoal); //not clear feild
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }


    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    //   other easy way
                    //   onChangeText={text => setEnteredGoal(text)}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button  title="CANCEL" color='red' onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                    <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                    
                    
                    {/* another way
                    <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
                    */}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    inputContainer: {
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent:'space-around',
        width: '60%',
    },
    button: {
        width: '40%',
    }
});

export default GoalInput;