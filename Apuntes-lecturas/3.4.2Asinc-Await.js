//async: Se usa para declarar una función que siempre devolverá una promesa. Incluso si dentro de esa función no estás usando promesas directamente, JavaScript la convierte en una promesa.
//await: Se usa dentro de una función async para esperar a que una promesa se resuelva o se rechace antes de continuar con la ejecución del código. Cuando se utiliza await, JavaScript pausa la ejecución de la función hasta que la promesa se resuelva, sin bloquear el hilo principal de ejecución.

// Simulando una solicitud asíncrona con promesas
function obtenerDatosDeUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nombre: 'Juan' });
      } else {
        reject('Usuario no encontrado');
      }
    }, 2000); // Simula un retraso de 2 segundos
  });
}

// Usando async/await
async function mostrarDatosDeUsuario(id) {
  try {
    const usuario = await obtenerDatosDeUsuario(id); // Espera a que la promesa se resuelva
    console.log(usuario); // Muestra los datos del usuario
  } catch (error) {
    console.log(error); // Maneja el error si la promesa es rechazada
  }
}

// Uso:
mostrarDatosDeUsuario(1); // Muestra los datos del usuario con id 1


async function obtenerDatos() {
  try {
    let respuesta = await fetch('https://api.example.com');
    let datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.log('Error al obtener los datos:', error);
  }
}
//try: Contiene el código que se ejecuta de manera normal. En el caso de async/await, puede contener una o más promesas que se esperan con await.
//catch: Si alguna promesa dentro del bloque try falla, se pasa al bloque catch y el error es manejado.