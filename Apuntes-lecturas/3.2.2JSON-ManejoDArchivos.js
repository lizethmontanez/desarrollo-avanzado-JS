//Ejemplo de conversión:
const jsonData = '{"nombre": "Carlos", "edad": 25, "esEstudiante": true}';
const objeto = JSON.parse(jsonData);
console.log(objeto.nombre); // "Carlos"
console.log(objeto.edad);   // 25


//Ejemplo de conversión a JSON:
const estudiante = {
    nombre: "Ana",
    edad: 22,
    esEstudiante: true,
    materias: ["Historia", "Inglés", "Literatura"]
};

const jsonString = JSON.stringify(estudiante);
console.log(jsonString);
/*La salida será:
{"nombre":"Ana","edad":22,"esEstudiante":true,"materias":["Historia","Inglés","Literatura"]}
En este caso, JSON.stringify() convierte el objeto estudiante en una cadena JSON que podemos enviar a un servidor o guardar en un archivo.
*/

//Convertir un arreglo JSON a objeto en JavaScript:
const jsonData2 = '{"estudiantes":[{"nombre":"Carlos","edad":25},{"nombre":"Ana","edad":22},{"nombre":"Luis","edad":23}]}';
const data = JSON.parse(jsonData2);
console.log(data.estudiantes[0].nombre);  // "Carlos"
console.log(data.estudiantes[1].edad);    // 22

//Convertir objeto JSON con objetos anidados a objeto en JavaScript:
const jsonData3 = '{"empresa":{"nombre":"Tech Solutions","ubicacion":"Madrid","empleados":[{"nombre":"Carlos","cargo":"Desarrollador","edad":30},{"nombre":"Ana","cargo":"Diseñadora","edad":28}]}}';
const data2 = JSON.parse(jsonData3);
console.log(data2.empresa.nombre);       // "Tech Solutions"
console.log(data2.empresa.empleados[0].cargo); // "Desarrollador"

//Ejemplo de obtener datos de una API en formato JSON:
fetch('https://api.example.com/usuarios')
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => console.error('Error:', error));

// Guardar datos en localStorage
const usuario = {
    nombre: "Lucía",
    edad: 30
};
localStorage.setItem('usuario', JSON.stringify(usuario));

// Recuperar datos de localStorage
const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
  console.log(usuarioGuardado.nombre); // "Lucía"
