function sendEmail(email, subject, body) {
    return new Promise((resolve, reject) => {
        if (email && subject && body) {
            setTimeout(() => {
                const emailInfo = {
                    email,
                    subject,
                    body,
                };

                resolve(emailInfo);
            }, 2000);
        } else {
            reject(new Error("Hacen falta datos para poder enviar el correo"));
        }
    });
}

sendEmail(
    "test@mail.com",
    "Nuevo reto",
    "Únete a los 30 días de JS"
)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
