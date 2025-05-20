let mesasDisponibles = 5;

function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (mesasSolicitadas <= mesasDisponibles) {
            resolve();
        } else {
            reject("No hay suficientes mesas disponibles.");
        }
        }, 1500);
    });
}

function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const exito = Math.random() > 0.2;
        if (exito) {
            resolve(`Correo de confirmación enviado a ${nombreCliente}.`);
        } else {
            reject("Error al enviar el correo de confirmación.");
        }
        }, 1200);
    });
    }

async function hacerReserva(nombreCliente, mesasSolicitadas) {
    const resultado = document.getElementById("resultado");
    resultado.textContent = "Procesando reserva...";

try {
        await verificarDisponibilidad(mesasSolicitadas);
        mesasDisponibles -= mesasSolicitadas;
        const mensaje = await enviarConfirmacionReserva(nombreCliente);
        resultado.textContent = `${mensaje} Mesas restantes: ${mesasDisponibles}`;
    } catch (error) {
        resultado.textContent = `${error}`;
    }
}

document.getElementById("reserva-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const mesas = parseInt(document.getElementById("mesas").value, 10);
    hacerReserva(nombre, mesas);
});
