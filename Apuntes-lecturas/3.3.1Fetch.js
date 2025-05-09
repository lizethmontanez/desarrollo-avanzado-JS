//Devuelve Promesas: fetch devuelve una promesa que se resuelve cuando la solicitud completa su curso. Esto hace que sea ideal para manejar operaciones asíncronas. 
fetch('https://api.example.com')
    .then(response => console.log('Solicitud exitosa'))
    .catch(error => console.error('Hubo un problema:', error));


// Soporte para diferentes tipos de solicitudes: Con fetch, puedes realizar solicitudes GET, POST, PUT, DELETE, entre otras. Esto lo hace versátil para interactuar con APIs RESTful.
fetch('https://api.example.com/addData', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre: 'Juan', edad: 30 })
})
    .then(response => response.json())
    .then(data => console.log('Data enviada:', data))
    .catch(error => console.error('Error:', error));


//Manejo de Errores: Aunque fetch es poderoso, no lanza errores automáticamente si la respuesta tiene un código de estado como 404 o 500. Es importante verificar manualmente el estado de la respuesta.
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error en la solicitud:', error));


//Consultar APIs de Clima:Un ejemplo común es obtener información meteorológica.
    fetch('https://api.weatherapi.com/v1/current.json?key=tuClave&q=Mexico')
        .then(response => response.json())
        .then(data => console.log('Clima actual:', data))
        .catch(error => console.error('Error al obtener el clima:', error));

//Formulario de Contacto: Puedes usar fetch para enviar datos de un formulario a un servidor.
    fetch('https://api.example.com/contact', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        nombre: 'Ana',
        mensaje: 'Hola, me interesa su servicio'
    })
    })
        .then(response => response.json())
        .then(data => console.log('Formulario enviado:', data))
        .catch(error => console.error('Error al enviar el formulario:', error));


//Galería Dinámica: Carga imágenes desde una API para una galería web.
    fetch('https://api.unsplash.com/photos?client_id=tuClave')
        .then(response => response.json())
        .then(images => {
        images.forEach(image => {
            const img = document.createElement('img');
            img.src = image.urls.small;
            document.body.appendChild(img);
        });
    })
    .catch(error => console.error('Error al cargar imágenes:', error));