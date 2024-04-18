
// 3. *Función para verificar si una cadena es un palíndromo:*

function esPalindromo(cadena: string): boolean {
    const cadenaLimpia = cadena.toLowerCase().replace(/\s/g, "");
    const cadenaInvertida = cadenaLimpia.split("").reverse().join("");
    return cadenaLimpia === cadenaInvertida;
}

const ejemploUno = "Anita lava la tina";
const ejemploDos = "reconocer"
console.log(`"${ejemploUno}" es un palíndromo: ${esPalindromo(ejemploUno)}`);
