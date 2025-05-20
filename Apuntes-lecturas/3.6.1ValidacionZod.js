//Definición de Esquemas Básicos: eun esquema en Zod define las reglas que deben cumplir los datos. Por ejemplo, si necesitas validar un nombre y una edad, puedes definir un esquema básico así:

const schema = z.object({

    name: z.string().min(1, "El nombre es obligatorio"),

    age: z.number().int().positive("La edad debe ser un número positivo"),

});
/** 
z.string(): Define que el valor debe ser una cadena.
z.number(): Define que el valor debe ser un número.
min(1): Especifica que la cadena debe tener al menos 1 carácter.
int(): Asegura que el número sea un entero.
positive(): Valida que el número sea positivo.*/ 

try {
    schema.parse({ name: "Juan", age: 25 });
    console.log("Datos válidos");
} catch (error) {
    console.error(error.errors);
}
//Si los datos son válidos, se ejecutará el bloque try. Si hay errores, se capturarán en el bloque catch.

//Validación con Zod: Enlazamos el formulario con un esquema en Zod para validar los datos:
const userSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email("Correo electrónico inválido"),
    age: z.number().int().positive("La edad debe ser un número positivo"),
});

document.getElementById("userForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    age: Number(document.getElementById("age").value),
    };

    try {
    userSchema.parse(formData);
    alert("Formulario enviado correctamente");
    } catch (error) {
    alert(`Errores: ${error.errors.map(e => e.message).join(", ")}`);
    }
});