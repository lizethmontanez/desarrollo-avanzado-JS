//Código simplificado:
//Servidor (Node.js con Express):
const express = require('express');
const app = express();

app.get('/saludo', (req, res) => {
    res.send('¡Hola desde el servidor!');
});

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));

//cliente (Fetch API en JavaScript):
fetch('http://localhost:3000/saludo')

    .then(response => response.text())

    .then(data => console.log(data));


//Una solicitud GET se usa para obtener datos
fetch('https://api.example.com/datos')

    .then(response => response.json())

    .then(data => console.log(data));s