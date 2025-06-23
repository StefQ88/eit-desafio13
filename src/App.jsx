import { useState } from 'react'
import {TaskForm} from './components/TaskForm';
import { TaskList } from './components/TaskList';

import './sass/main.scss';



function App() {

  const [tasks, setTasks] = useState([])

  //recibe tarea y la agrega a la lista
  const handleAddTask = (task) => {
    setTasks ([...tasks, task])
  }

  //eliminar tarea
  const handleDeleteTask = (id) => {
    const updateTasks = tasks.filter((task) => task.id !== id)
    setTasks = updateTasks
  }


  return (
    <div>
      <h1>Lista de tareas</h1>
      <TaskForm onAddTask={handleAddTask}/> 

      
    </div>
  )
}

export default App
