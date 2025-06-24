import React from "react";
import { Trash2 } from "lucide-react";
import AppText from './AppText'

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-list__item">
          <AppText 
          as="span" 
          text={task.text} 
          className="task-list__item-text" />
          <button
            className="task-list__item-delete"
            onClick={() => onDeleteTask(task.id)}
            aria-label="Eliminar tarea"
            title="Eliminar"
          >
            <Trash2 size={18} strokeWidth={2} />
          </button>
        </li>
      ))}

      {tasks.length === 0 && (
        <AppText
          as="li"
          text="No hay tareas en la lista."
          className="task-list__empety"
        />
      )}
    </ul>
  );
};

export default TaskList;
