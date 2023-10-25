import Styles from "./Form.module.css";
import { useState } from "react";
import validateForm from "../../formValidations";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    nationality: "",
    image: "",
    birth: "",
    teams: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    nationality: "",
    image: "",
    birth: "",
    teams: "",
    description: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newErrors = validateForm({ ...form, [name]: value });
    setErrors({ ...errors, ...newErrors });
    setForm({ ...form, [name]: value });
  };

  return (
    <div className={Styles.form}>
      <h2>Name</h2>
      <input type="text" name="name" onChange={handleInputChange} />
      {errors.name && <span>{errors.name}</span>}

      <h2>Surname</h2>
      <input type="text" name="surname" onChange={handleInputChange} />
      {errors.surname && <span>{errors.surname}</span>}

      <h2>Nationality</h2>
      <input type="text" name="nationality" onChange={handleInputChange} />
      {errors.nationality && <span>{errors.nationality}</span>}

      <h2>Image</h2>
      <input type="text" name="image" onChange={handleInputChange} />
      {errors.image && <span>{errors.image}</span>}

      <h2>Date of birth</h2>
      <input type="text" name="birth" onChange={handleInputChange} />
      {errors.birth && <span>{errors.birth}</span>}

      <h2>Teams</h2>
      <input type="text" name="teams" onChange={handleInputChange} />
      {errors.teams && <span>{errors.teams}</span>}

      <h2>Description</h2>
      <input type="text" name="description" onChange={handleInputChange} />
      {errors.description && <span>{errors.description}</span>}

      <button>Create</button>
    </div>
  );
};

export default Form;


// Posibilidad de seleccionar/agregar varias escuderías en simultáneo.
// Botón para dar de alta (crear) el nuevo driver.
