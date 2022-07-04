import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [tasksList, setTasksList] = useState([])
  const [newTask, setNewTask] = useState()

  const baseUrl = 'http://localhost:8000/tasks';

  async function findAllTasks(){
    const response = await fetch (baseUrl)
    const tasks =  await response.json()
    setTasksList(tasks)
  }

  async function findById(id){
    const response = await fetch(`${baseUrl}/${id}`)
    const task = await response.json()
    setTasksList([task])
  }

  async function createTask(task){
    const response = await fetch(baseUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'aplication/json',
      },
      mode: 'cors',
      body: JSON.stringify(task),
      })
      const newTask = await response.json()
      setNewTask([newTask])
    }
  


  useEffect(() => {
    findAllTasks()
  }, [])
  
  console.log(tasksList)
  
  


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
