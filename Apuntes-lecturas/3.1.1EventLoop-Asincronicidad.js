console.log('Inicio');

setTimeout(() => {
  console.log('Tarea asincrónica completada');
}, 2000);

console.log('Fin');

//Callbacks: Son funciones que se pasan como argumento a otras funciones y se ejecutan después de que una tarea se completa.
console.log("CALLBACKS");
function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}`);
    callback();
}

saludar('María', () => {
    console.log('Callback ejecutado.');
});

//Promises: Ofrecen una manera más limpia de manejar tareas asincrónicas. Una Promise puede estar en tres estados: pendiente, resuelta o rechazada.
console.log("PROMISES");
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa cumplida'), 1000);
});

promesa.then(resultado => console.log(resultado));

//Async/Await: Introducido en ES8, permite escribir código asincrónico de manera que parezca sincrónico.
console.log("ASYNC/AWAIT");
async function obtenerDatos() {
    const respuesta = await fetch('https://api.example.com/data');
    const datos = await respuesta.json();
    console.log(datos);
}

obtenerDatos();

//Interacciones con el usuario: Cuando un usuario interactúa con una página web (por ejemplo, hace clic en un botón), el Event Loop asegura que los eventos se manejen sin bloquear la interfaz.

button.addEventListener('click', () => {

    console.log('Botón presionado');

});

// Peticiones HTTP: Las aplicaciones web modernas realizan peticiones a servidores para obtener datos. Usar asincronicidad asegura que la aplicación no se congele mientras espera una respuesta.

fetch('https://api.example.com/data')

    .then(response => response.json())

    .then(data => console.log(data));

//Temporizadores: Los temporizadores como setTimeout o setInterval son ejemplos clásicos de asincronicidad.

setTimeout(() => {

    console.log('Esto se ejecuta después de 3 segundos');

}, 3000);

//Animaciones: El Event Loop permite que las animaciones en páginas web sean fluidas sin bloquear otras tareas importantes.

let position = 0;

function moverCaja() {
    position += 1;
    caja.style.left = position + 'px';

    if (position < 100) {
        requestAnimationFrame(moverCaja);
    }
}

moverCaja();