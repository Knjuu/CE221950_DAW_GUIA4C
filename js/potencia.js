// Definir la clase Potencia
class Potencia {
    constructor(base, exponente) {
        this.base = base;
        this.exponente = exponente;
        this.resultado = Math.pow(base, exponente);
    }

    calcularPotencia() {
        return this.resultado;
    }
}

// Función para manejar la solicitud de cálculo
function calcular() {
    const base = parseFloat(document.getElementById('base').value);
    const exponente = parseFloat(document.getElementById('exponente').value);

    if (!isNaN(base) && !isNaN(exponente)) {
        const potencia = new Potencia(base, exponente);
        const resultado = potencia.calcularPotencia();
        document.getElementById('resultado').textContent = resultado;
    } else {
        alert('Ingrese valores válidos para la base y el exponente.');
    }

    return false; // Evitar que el formulario se envíe
}

// Asociar la función de cálculo al formulario
document.getElementById('potenciaForm').addEventListener('submit', calcular);
