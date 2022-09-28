import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View, Text } from "react-native";
import { style } from "./style";

interface ListTasks {
    checked: boolean,
    name: string,
}


interface CreateProps {
    setTasks: any,
    tasks: ListTasks[],
    finished: number,
}

export function Create({ setTasks, tasks, finished }: CreateProps) {

    const [taskName, setTaskName] = useState("");


    function handleCraeteTask(){
        const task: ListTasks = {
            name: taskName,
            checked: false,
        }
        setTasks([...tasks, task]);
    } 


    return (
        <>
            <View style={style.container}>
                <TextInput style={style.input}
                    placeholder="Adicione uma tarefa"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={setTaskName}
                />
                <TouchableOpacity style={style.button} onPress={handleCraeteTask}>
                    <Text style={style.buttonText}> + </Text>
                </TouchableOpacity>
            </View>
            <View style={style.information}>
                <Text style={style.created}> Created: {tasks.length} </Text>
                <Text style={style.finished}> Finished: {finished} </Text>
            </View>
        </>
    )
}