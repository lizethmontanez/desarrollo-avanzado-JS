const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el envío automático del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  console.log(`Nombre: ${name}, Correo: ${email}`);
});

//Ejemplo de Validación
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;

  if (!email.includes('@')) {
    alert('Por favor, introduce un correo electrónico válido.');
    return;
  }

  alert('Formulario enviado correctamente.');
});

//Ejemplo de Envío
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value
  };

  fetch('https://api.ejemplo.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log('Datos enviados:', data))
  .catch(error => console.error('Error:', error));

});
