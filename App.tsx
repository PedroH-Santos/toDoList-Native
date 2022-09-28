import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Body } from './src/components/Body';
import { Create } from './src/components/Create';
import { Logo } from './src/components/Logo';
import { Task } from './src/components/Task';

interface ListTasks {
  checked: boolean,
  name: string,
}



export default function App() {
  const [tasks,setTasks] = useState<ListTasks[]>([]);
  const [finished, setFinished] = useState(0);



  
  return (
    <>
      <Logo />
      <Body>
        <Create setTasks={setTasks} finished={finished} tasks={tasks} />
        <Task setTasks={setTasks} tasks={tasks} setFinished={setFinished} finished={finished}/>
      </Body>
    </>
  );
}
