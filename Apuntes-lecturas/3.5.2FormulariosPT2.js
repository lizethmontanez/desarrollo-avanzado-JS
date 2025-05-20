//Casillas de Verificación (Checkbox)
/* HTML
<form>
  <label>
    <input type="checkbox" name="intereses" value="deportes"> Deportes
  </label>
  <label>
    <input type="checkbox" name="intereses" value="música"> Música
  </label>
  <label>
    <input type="checkbox" name="intereses" value="arte"> Arte
  </label>
</form>
*/

const checkbox = document.querySelector('input[type="checkbox"]');
console.log(checkbox.checked); // true o false

/* Botones de Radio (Radio Buttons)
<form>
  <label>
    <input type="radio" name="genero" value="masculino"> Masculino
  </label>
  <label>
    <input type="radio" name="genero" value="femenino"> Femenino
  </label>
  <label>
    <input type="radio" name="genero" value="otro"> Otro
  </label>
</form>
*/
const selectedRadio = document.querySelector('input[name="genero"]:checked');
console.log(selectedRadio.value); // "masculino", "femenino" o "otro"


/*Menús Desplegables (Select)

<form>
  <label for="ciudad">Ciudad:</label>
  <select id="ciudad" name="ciudad">
    <option value="cdmx">Ciudad de México</option>
    <option value="guadalajara">Guadalajara</option>
    <option value="monterrey">Monterrey</option>
  </select>
</form>
 */
const ciudad = document.getElementById('ciudad');
console.log(ciudad.value); // Valor de la opción seleccionada

/*Campos de Fecha y Hora
<form>
  <label for="fecha">Fecha de nacimiento:</label>
  <input type="date" id="fecha" name="fecha">
  <label for="hora">Hora de la cita:</label>
  <input type="time" id="hora" name="hora">
</form>
 */
const fecha = document.getElementById('fecha').value;
const hora = document.getElementById('hora').value;
console.log(`Fecha: ${fecha}, Hora: ${hora}`);

/* Campos de Archivo

<form>

  <label for="archivo">Sube un archivo:</label>

  <input type="file" id="archivo" name="archivo">

</form>
 */
const archivo = document.getElementById('archivo').files[0];
console.log(archivo.name); // Nombre del archivo