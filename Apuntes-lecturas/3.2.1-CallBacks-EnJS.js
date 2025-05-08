//Ejemplo con setTimeout:
console.log('Inicio');
setTimeout(() => {
    console.log('Esto sucede después de 2 segundos');
}, 2000);
console.log('Fin');

//Aquí, el callback dentro de setTimeout se ejecuta después de 2 segundos, mientras que el resto del código sigue ejecutándose.


//Ejemplo de Callback Hell:
setTimeout(() => {
    console.log('Primera tarea completada');
    setTimeout(() => {
        console.log('Segunda tarea completada');
        setTimeout(() => {
            console.log('Tercera tarea completada');
        }, 1000);
    }, 1000);
}, 1000);
//Aunque funcional, este código es complicado de seguir. Afortunadamente, existen soluciones como las Promesas y async/await, pero los callbacks siguen siendo la base.


// Lectura de Archivos: Cuando trabajas con datos almacenados en archivos, como leer un archivo JSON:

const fs = require('fs');
fs.readFile('datos.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log('Datos del archivo:', data);
});

// 2. Solicitudes HTTP: Al obtener datos de una API, puedes usar callbacks para manejar las respuestas:

const https = require('https');
https.get('https://api.example.com/datos', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log('Datos recibidos:', data);
    });
}).on('error', (err) => {
    console.error('Error en la solicitud:', err);
});


//3. Animaciones en Interfaces de Usuario: En desarrollo web, los callbacks son útiles para manejar eventos como clics de usuario:

button.addEventListener('click', () => {
    console.log('Botón clicado!');
});