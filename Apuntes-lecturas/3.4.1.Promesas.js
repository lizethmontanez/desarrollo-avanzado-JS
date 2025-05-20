// Ejemplo de una promesa
let obtenerDatosDeUsuario = new Promise((resolve, reject) => {
  let exito = true; // Cambia esto para simular éxito o error

  if (exito) {
    resolve("Datos de usuario obtenidos correctamente.");
  } else {
    reject("Hubo un error al obtener los datos.");
  }
});

// Manejando el resultado de la promesa
obtenerDatosDeUsuario
  .then((resultado) => {
    console.log(resultado); // Si la promesa es cumplida
  })
  .catch((error) => {
    console.log(error); // Si la promesa es rechazada
  });
//En este ejemplo, si la promesa se resuelve correctamente, se ejecutará el método .then(), mostrando el mensaje de éxito. Si ocurre un error, se ejecutará el método .catch(), mostrando el error.

// Función que simula una llamada a una API con éxito o error
function llamadaApi(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Datos obtenidos con éxito de la API.");
      } else {
        reject("Error al obtener los datos de la API.");
      }
    }, 2000);  // Simulamos un retraso de 2 segundos
  });
}

// Uso de la promesa
llamadaApi(true)  // Simula una llamada exitosa
  .then(result => {
    console.log(result);  // "Datos obtenidos con éxito de la API."
  })
  .catch(error => {
    console.error(error);  // Este bloque no se ejecuta en este caso
  });

// Uso con error
llamadaApi(false)  // Simula una llamada fallida
  .then(result => {
    console.log(result);  // Este bloque no se ejecuta en este caso
  })
  .catch(error => {
    console.error(error);  // "Error al obtener los datos de la API."
  });


  // Función que simula un proceso de registro
function registrarUsuario(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nombre) {
        resolve(`Usuario ${nombre} registrado correctamente.`);
      } else {
        reject("El nombre de usuario es obligatorio.");
      }
    }, 1000);  // Retraso de 1 segundo
  });
}

// Función que simula enviar un correo de bienvenida
function enviarCorreoBienvenida(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Correo de bienvenida enviado a ${nombre}.`);
    }, 1500);  // Retraso de 1.5 segundos
  });
}

// Encadenamiento de promesas
registrarUsuario("Juan")
  .then(result => {
    console.log(result);  // "Usuario Juan registrado correctamente."
    return enviarCorreoBienvenida("Juan");  // Encadenamos la siguiente promesa
  })
  .then(result => {
    console.log(result);  // "Correo de bienvenida enviado a Juan."
  })
  .catch(error => {
    console.error(error);  // En caso de error en alguna de las promesas
  });