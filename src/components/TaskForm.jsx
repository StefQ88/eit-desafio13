import React, { useState } from "react";
import AppText from "./AppText";
import Button from "./Button";

const TaskForm = ({ onAddTask }) => {
  const [values, setValues] = useState({ task: "" }); // estado para guardar el valor del input
  const [error, setError] = useState({ task: "" }); // estado para guardar errores

  //se ejecuta cada vez que se escribe en el input y actualiza el estado
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
      setError({
        task: "Debe escribir una tarea antes de agregar a la lista.",
      });
      return;
    }

    if (trimmed.length < 4) {
      setError({ task: "La tarea debe tener al menos 4 caracteres." });
      return;
    }

    // si pasa la validacion se crea un objeto con la nueva tarea con id y texto
    const newTask = {
      id: Date.now(),
      text: trimmed,
    };

    // llamo a la funcion para agregar la nueva tarea
    onAddTask(newTask);

    //limpio formulario
    setValues({ task: "" });
    setError({ task: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form d-flex flex-column">
          <div className="form__group d-flex flex-column">
            <AppText as="label" htmlFor="task" text="Nueva tarea:" />
            <input
              type="text"
              id="task"
              name="task"
              autoComplete="off"
              value={values.task}
              onChange={handleChange} //llama a la funcion al escribir
              onFocus={handleFocus} //limpia errores al enfocar
              placeholder="Escribe una tarea"
              className={`form__input ${
                error.task ? "form__input--error" : ""
              }`}
            />
          </div>

          <AppText
            as="span"
            text={error.task}
            className={`form__error ${
              error.task ? "form__error--visible" : ""
            }`}
          />

          <Button
            type="submit"
            label="Agregar tarea"
            className="form__btn d-flex justify-center  align-selft-start"
          />
        </div>
      </form>
    </>
  );
};

export default TaskForm;
