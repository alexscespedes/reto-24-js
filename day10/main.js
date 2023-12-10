function validateForm(formData, registeredUsers) {
    const requiredFields = ["name", "lastname", "email", "password"];
  
    if (!requiredFields.every((field) => formData[field])) {
      throw new Error(
        `Faltan los siguientes campos requeridos: ${requiredFields
          .filter((field) => !formData[field])
          .join(", ")}`
      );
    }
  
    const existUser = registeredUsers.find(
      (user) => user.email === formData.email
    );
  
    if (existUser) {
      throw new Error(`El usuario con el email ${formData.email} ya existe`);
    }

    registeredUsers.push({
        name: formData.name,
        lastname: formData.lastname,
        email: formData.email,
      });
    
      console.log(`Tu registro fue exitoso ${formData.name} ${formData.lastname}`);
}

const formData = {
    name: "Alexander",
    lastname: "Sencion",
    email: "juan@example.com",
    password: "123456"
  }
  
  const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
  ]
  
  validateForm(formData, registeredUsers)