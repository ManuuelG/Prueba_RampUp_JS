// Ejercicio 1: Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase //

function cuentaLetras(frase, letra) {   // Aqui creamos la funcion para contar la letra que demos en una frase //
    
    let totalVeces = 0;   // Lo primero es crear un contador para que comience desde 0 //
  
    for (let i = 0; i < frase.length; i++) {  // Luego con un bucle 'for' le diremos que recorra cada letra de esa frase //
     
      if (frase[i] === letra) { // Aqui con un condicional le decimos al bucle que si la frase tiene la letra que hemos dado para contar ...//

        totalVeces++;  // ... la sume al contador.//
      }
    }
  
    return totalVeces; // Y aquí nos debería de devolver cuantas veces se repite la letra que hemos dado en la frase //
  }

  //Ejercicio 2: Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números //

function imprimeImpares (num) {  // Creamos la función con el parametro 'num' //

 let numerosImpares = []; // Aqui creamos la variable numerosImpares con un array donde almacena esos numeros //

 for (i = num; i < num +50; i++){ // Aqui creamos un bucle 'for' que irá desde ese numero y sumará sus 50 siguientes //
    if(i % 2 !== 0){              // Usamos el condicional para comprobar que ese numero es impar //
    numerosImpares.push(i);       // Si es impar, pues que lo pushee al array que creamos en la fila 22//
    }
 }

 return numerosImpares;          // el return para que me enseñe el array y los numeros impares que tiene almacenados //

 }
