import { View, Text, Image, TouchableOpacity, Alert, FlatList } from "react-native";
import { style } from "./style";


interface ListTasks {
    checked: boolean,
    name: string,
}


interface TaskProps {
    setTasks: any,
    tasks: ListTasks[],
    setFinished: any,
    finished: number,
}


export function Task({ setTasks, tasks, setFinished, finished }: TaskProps) {


    function onChecked(name: string) {

        const task = tasks.find(task => task.name != name);
        if (!task?.checked) {
            setFinished(finished + 1);
        } else {
            setFinished(finished - 1);

        }

        const newTasks = tasks.map((task) => {
            if (task.name == name) {
                return ({
                    ...task,
                    checked: true,
                });
            }
            return (task);
        })

        setTasks(newTasks)
    }
    function onDelete(name: string) {
        const task = tasks.find(task => task.name == name);
        const filtered = tasks.filter(task => task.name != name);
        if (task?.checked) {
            setFinished(finished - 1);
        }
        setTasks(filtered);

    }


    return (
        <View style={style.container}>

            <FlatList
                data={tasks}
                keyExtractor={(task: any) => task.name}
                renderItem={({item}) => {
                    if (item.checked) {
                        return (
                            <View style={style.task} key={item.name}>
                                <TouchableOpacity onPress={() => { onChecked(item.name) }}>
                                    <Image source={require('../../../assets/checked.png')} />
                                </TouchableOpacity>
                                <Text style={style.textThrough}> {item.name} </Text>
                                <TouchableOpacity onPress={() => { onDelete(item.name) }} >

                                    <Image source={require('../../../assets/trash.png')} />
                                </TouchableOpacity>

                            </View>
                        )
                    } else {
                        return (
                            <View style={style.task}>
                                <TouchableOpacity onPress={() => { onChecked(item.name) }}>
                                    <Image source={require('../../../assets/empty.png')} />

                                </TouchableOpacity>
                                <Text style={style.text}> {item.name} </Text>
                                <TouchableOpacity onPress={() => { onDelete(item.name) }} >

                                    <Image source={require('../../../assets/trash.png')} />
                                </TouchableOpacity>

                            </View>
                        )
                    }
                }}


                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={style.containerEmptyText}>
                        <Image source={require('../../../assets/clipBoard.png')} style={style.imageEmptyText} />
                        <Text style={style.listEmptyText}>
                            Você ainda não tem tarefas cadastradas
                            Crie tarefas e organize seus itens a fazers
                        </Text>

                    </View>

                )}
            />


        </View>
    )
}