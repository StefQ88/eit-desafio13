import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import AppText from './AppText'

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <>
    <div  className="task">
    <ul className="task__list d-flex flex-column ">
      
      {tasks.map((task) => (

        <li key={task.id} className="task__item d-flex justify-between align-center">
          <AppText 
          as="span" 
          text={task.text} 
          className="task__text" />

          <button
            className="task__delete"
            onClick={() => onDeleteTask(task.id)} //paso la funcion como props
            aria-label="Eliminar tarea"
            title="Eliminar"
          >
            <FontAwesomeIcon icon={faTrash} className="task__icon"/>
          </button>
        </li>
      ))}

      {tasks.length === 0 && (
        <AppText
          as="li"
          text="No hay tareas en la lista."
          className="task__empety d-flex justify-center"
        />
      )}
    </ul>

    </div>

    </>
  );
};

export default TaskList;
