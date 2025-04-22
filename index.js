function calcularFactorial() {
    let numero;
  
    while (true) {
      let entrada = prompt("Por favor, ingresa un número para calcular su factorial:");
  
      // Convertir a número
      numero = Number(entrada);
  
      // Validar entrada
      if (!isNaN(numero) && Number.isInteger(numero) && numero >= 0) {
        break;
      } else {
        alert("Dato inválido. Ingresa un número entero mayor o igual a 0.");
      }
    }
  
    // Calcular factorial
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  
    console.log(`El factorial de ${numero} es: ${factorial}`);
    alert(`El factorial de ${numero} es: ${factorial}`);
  }
  
  // Ejecutar al cargar
  calcularFactorial();
  