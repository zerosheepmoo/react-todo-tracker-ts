import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import { NonIDTaskModel, TaskModel } from "./model/TaskModel";

const mockup = {json: () => [{id: 142857, text: 'Only UI', day: '2021-07-13', reminder: false}]};
const mockup2 = {json: () => {return {id: 142857, text: 'Only UI', day: '2021-07-13', reminder: false}}}

function App() {

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState<TaskModel[]>([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json();
      return data;
    } catch (e) {
      console.error('There is no server')
      return mockup.json();
    }

  }

  const fetchTask = async (id: string) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`) || mockup2
    const data = await res.json()

    return data;
  }

  // add Task
  const addTask = async (task: NonIDTaskModel) => {
    try {
      const res = await fetch('http://localhost:5000/tasks', {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      });
  
      const data = await res.json();
  
      setTasks([...tasks, data]);
    } catch {
      setTasks([...tasks, {...task, id: 'NaN'}])
    }
  }

  // delete Task
  const deleteTask = async (id: string) => {
    try {
      await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'});
    } finally {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  }

  // Toggle Reminder
  const toggleReminder = async (id: string) => {
    try {
      const taskToToggle = await fetchTask(id);
      const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder};
  
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
      })
      
      const data = await res.json();
  
      setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
    } catch {
      setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task));
    }
  }

  return (
    <Router>

    <div className='container'>
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

      <Route path='/' exact render={(props) => (<>{showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show :-)'}</>)}/>
      <Route path='/about' component={About}/>
      <Footer />
    </div>
    </Router>
  );
}


export default App;
