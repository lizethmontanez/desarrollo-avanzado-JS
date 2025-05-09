/*Instalación de Axios
Puedes instalar Axios en un proyecto con Node.js o incluirlo en el navegador mediante una CDN.

Instalación con npm:
npm install axios
Uso con una CDN:
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>*/


//Solicitud GET:
axios.get('https://api.example.com/users')

    .then(response => console.log(response.data))

    .catch(error => console.error(error));


//Solicitud POST:
axios.post('https://api.example.com/users', {
    name: 'John Doe',
    email: 'john.doe@example.com'
})
.then(response => console.log(response.data))
.catch(error => console.error(error));

//Ejemplo de configuración global:
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = 'Bearer token';

//Estableciendo un tiempo de espera:
axios.get('https://api.example.com/data', { timeout: 5000 })
    .then(response => console.log(response.data))
    .catch(error => console.error('Timeout:', error));


//Ejemplo de manejo de errores:
axios.get('https://api.example.com/data')
    .then(response => console.log(response.data))
    .catch(error => {
        if (error.response) {
            console.error('Error del servidor:', error.response.status);
        } else if (error.request) {
            console.error('No hubo respuesta del servidor:', error.request);
        } else {
            console.error('Error al configurar la solicitud:', error.message);
        }
    });

//Consumo de APIs de Clima: Una aplicación que muestra el clima local puede usar Axios para obtener datos de una API como OpenWeatherMap:
axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=tu_api_key')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));

//Envío de Formularios: Al enviar un formulario de contacto, puedes usar una solicitud POST:
axios.post('https://api.example.com/contact', {
    name: 'Jane Doe',
    message: 'Hola, me interesa su producto.'
})
.then(response => console.log('Mensaje enviado:', response.data))
.catch(error => console.error(error));