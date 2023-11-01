const nameValidation = (data) => {
    const namePattern = /^[A-Za-z]+$/;
    if (data.trim() !== "") {
      if (namePattern.test(data)) {
        return "";
      } else {
        return "El nombre solo puede contener letras";
      }
    } else {
      return "El nombre no puede estar vacío";
    }
  };
  
  const surnameValidation = (data) => {
    const namePattern = /^[A-Za-z]+$/;
    if (data.trim() !== "") {
      if (namePattern.test(data)) {
        return "";
      } else {
        return "El apellido solo puede contener letras";
      }
    } else {
      return "El apellido no puede estar vacío";
    }
  };
  
  const nationalityValidation = (data) => {
    const namePattern = /^[A-Za-z]+$/;
    if (data.trim() !== "") {
      if (namePattern.test(data)) {
        return "";
      } else {
        return "La nacionalidad solo puede contener letras";
      }
    } else {
      return "La nacionalidad no puede estar vacía";
    }
  };
  
  const imageValidation = (url) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    if (url.trim() !== "" && pattern.test(url)) {
      return "";
    } else {
      return "La URL de la imagen no es válida";
    }
  };
  
  const birthValidation = (data) => {
    const pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    if (pattern.test(data)) {
      return "";
    } else {
      return "Debe tener el formato (DD/MM/YYYY)";
    }
  };
  
  const teamsValidation = (data) => {
    const namePattern = /^[A-Za-z]+$/;
    if (data.trim() !== "") {
      if (namePattern.test(data)) {
        return "";
      } else {
        return "Los equipos solo pueden contener letras";
      }
    } else {
      return "Los equipos no pueden estar vacíos";
    }
  };
  
  const descriptionValidation = (data) => {
    if (data.trim() !== "") {
      if (data.length <= 550) {
        return "";
      } else {
        return "La descripción no puede tener más de 550 caracteres";
      }
    } else {
      return "La descripción no puede estar vacía";
    }
  };
  
  const validateForm = (data) => {
    const newErrors = {};
  
    newErrors.name = nameValidation(data.name);
    newErrors.surname = surnameValidation(data.surname);
    newErrors.nationality = nationalityValidation(data.nationality);
    newErrors.image = imageValidation(data.image);
    newErrors.birth = birthValidation(data.birth);
    newErrors.teams = teamsValidation(data.teams);
    newErrors.description = descriptionValidation(data.description);
  
    return newErrors;
  };
  
  export default validateForm;
  
  