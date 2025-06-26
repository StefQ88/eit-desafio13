import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import AppText from './components/AppText'

import "./sass/main.scss";

function App() {
  const [tasks, setTasks] = useState([]); //estado que contiene todas las tareas

  //se llama cuando se envia el formulario y agrega nueva tarea al array
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  //filtra la lista y elimina la tarea por id
  const handleDeleteTask = (id) => {
    const updateTasks = tasks.filter((task) => task.id !== id);
    setTasks(updateTasks); // actualiza el estado con la nueva lista
  };

  return (
    <main className="app container">

      <div className="app__grid d-flex justify-between align-start flex-wrap">

        <section className="app__form">
          <AppText as="h1" text="Agregar nueva tarea" />
          <TaskForm onAddTask={handleAddTask} />
        </section>

        <section className="app__list">
          <AppText as="h2" text="Lista de tareas" />
          <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
        </section>

      </div>
    </main>
  );
}

export default App;
