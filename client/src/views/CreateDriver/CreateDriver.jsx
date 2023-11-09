import Styles from "./CreateDriver.module.css";
import axios from "axios";
import { useState } from "react";
import validateForm from "../../formValidations";

const CreateDriver = () => {
  const [form, setForm] = useState({
    forename: "",
    surname: "",
    nationality: "",
    description: "",
    image: "",
    dob: "",
    teams: "",
  });

  const [errors, setErrors] = useState({
    forename: "",
    surname: "",
    nationality: "",
    description: "",
    image: "",
    dob: "",
    teams: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    const newErrors = validateForm({ ...form, [name]: value });
    setErrors({ ...errors, ...newErrors });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const teamsArray = form.teams.split(",").map((team) => team.trim());
    const modifiedForm = { ...form, teams: teamsArray };

    try {
      const { data } = await axios.post(
        "http://localhost:3001/create",
        modifiedForm
      );
      alert("New driver created!", data);
      return;
    } catch (error) {
      console.error("Error creating new driver: ", error);
    }
  };

  return (
    <div className={Styles.form}>
      <form onSubmit={handleFormSubmit}>
        <h2>Name</h2>
        <input type="text" name="forename" onChange={handleInputChange} />
        <br />
        {errors.forename && <span>{errors.forename}</span>}

        <h2>Surname</h2>
        <input type="text" name="surname" onChange={handleInputChange} />
        <br />

        {errors.surname && <span>{errors.surname}</span>}

        <h2>Nationality</h2>
        <input type="text" name="nationality" onChange={handleInputChange} />
        <br />

        {errors.nationality && <span>{errors.nationality}</span>}

        <h2>Description</h2>
        <input type="text" name="description" onChange={handleInputChange} />
        <br />

        {errors.description && <span>{errors.description}</span>}

        <h2>Image</h2>
        <input type="text" name="image" onChange={handleInputChange} />
        <br />

        {errors.image && <span>{errors.image}</span>}

        <h2>Date of birth</h2>
        <input type="text" name="dob" onChange={handleInputChange} />
        <br />

        {errors.dob && <span>{errors.dob}</span>}

        <h2>Teams</h2>
        <input type="text" name="teams" onChange={handleInputChange} />
        <br />
        {errors.teams && <span>{errors.teams}</span>}
        <br />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateDriver;
