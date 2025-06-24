import React, { useEffect, useState } from "react";
import AppText from "./AppText";
import Button from "./Button";

const TaskForm = ({ onAddTask }) => {
  const [values, setValues] = useState({ task: "" }); // estado para guardar el valor del input
  const [error, setError] = useState({ task: "" }); // estado para mostrar errores

  //se ejecuta cada vez que se escribe en el input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // se ejecuta cuando se hace clic en el input y limpia el error
  const handleFocus = () => {
    setError((prevError) => ({
      ...prevError,
      task: "",
    }));
  };

  // se ejecuta para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = values.task.trim(); // elimino espacios en el inicio y al final

    if (trimmed === "") {
      setError({ task: "Debe escribir una tarea antes de agregar a la lista." });
      return;
    }

    if (trimmed.length < 4) {
      setError({ task: "La tarea debe tener al menos 4 caracteres." });
      return;
    }

    // si pasa la validacion se crea la nueva tarea
    const newTask = {
      id: Date.now(),
      text: trimmed,
    };

    // paso la nueva tarea a App
    onAddTask(newTask);

    setValues({ task: "" });
    setError({ task: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <AppText as="label" htmlFor="task" text="Nueva tarea:" />

          <input
            type="text"
            id="task"
            name="task"
            autoComplete="off"
            value={values.task}
            onChange={handleChange}
            onFocus={handleFocus}
            placeholder="Escribe una tarea"
            className={error.task ? "input-error" : ""}
          />

          {error && (
            <AppText as="span" text={error.task} className="color-error" />
          )}

          <Button
            type="submit"
            label="Agregar tarea"
            disabled={values.task.trim() === ""}
          />
        </div>
      </form>
    </>
  );
};

export default TaskForm;
