import React from "react";
import { Trash2 } from "lucide-react";
import AppText from './AppText'

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <>
    <div  className="task">
    <ul className="task__list">
      
      {tasks.map((task) => (
        <li key={task.id} className="task__item">
          <AppText 
          as="span" 
          text={task.text} 
          className="task__text" />
          <button
            className="task__delete"
            onClick={() => onDeleteTask(task.id)}
            aria-label="Eliminar tarea"
            title="Eliminar"
          >
            <Trash2 className="task__icon"/>
          </button>
        </li>
      ))}

      {tasks.length === 0 && (
        <AppText
          as="li"
          text="No hay tareas en la lista."
          className="task__empety"
        />
      )}
    </ul>

    </div>

    </>
  );
};

export default TaskList;
