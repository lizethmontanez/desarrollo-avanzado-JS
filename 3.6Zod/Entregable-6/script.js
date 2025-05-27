// Importamos Zod desde el objeto global
const { z } = window.Zod;

// Esquema para validar los datos del formulario
const registerSchema = z.object({
    name: z.string().min(1, "El nombre no puede estar vacío."),
    email: z.string().email("El correo electrónico no es válido."),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres.")
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();

  // Capturamos los valores ingresados
    const formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value,
    };

    try {
        // Validamos con Zod
        registerSchema.parse(formData);
        
        // Limpiamos errores si todo está bien
        document.getElementById("errors").textContent = "";
        alert("¡Registro exitoso!");
    } catch (error) {
        if (error.errors) {
        const messages = error.errors.map(e => e.message);
        document.getElementById("errors").textContent = messages.join(", ");
        } else {
        document.getElementById("errors").textContent = "Ocurrió un error inesperado.";
        }
    }
});
