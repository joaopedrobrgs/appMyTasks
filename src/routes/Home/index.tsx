import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface Props {}

interface Task {
  id: string;
  text: string;
}

export default function Home({}: Props) {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddNewTask = (e: any): void => {
    const data: Task = {
      id: String(new Date().getTime()),
      text: !!newTask ? newTask : 'Task empty',
    };
    setTasks([...tasks, data]);
    setNewTask('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Dev!</Text>
        <TextInput
          style={styles.input}
          placeholder="Nova tarefa..."
          placeholderTextColor="#555"
          value={newTask || ''}
          onChangeText={setNewTask}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={handleAddNewTask}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={styles.titleDesks}>Minhas tarefas</Text>
        {tasks.map(task => (
          <TouchableOpacity key={task.id} style={styles.buttonTask}>
            <Text style={styles.titleTask}>
              {task.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121214',
  },
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  titleDesks: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 30,
  },
  input: {
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#eba417',
    padding: Platform.OS === 'ios' ? 15 : 12,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#121214',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonTask: {
    backgroundColor: '#29292e',
    padding: Platform.OS === 'ios' ? 13 : 10,
    marginTop: 10,
    borderRadious: 50,
    alignItems: 'center'
  },
  titleTask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
