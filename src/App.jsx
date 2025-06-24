import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import AppText from './components/AppText'

import "./sass/main.scss";

function App() {
  const [tasks, setTasks] = useState([]);

  //se llama cuando se envia el formulario
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  //eliminar tarea
  const handleDeleteTask = (id) => {
    const updateTasks = tasks.filter((task) => task.id !== id);
    setTasks(updateTasks);
  };

  return (
    <main className="app">

      <div className="app__grid">

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
