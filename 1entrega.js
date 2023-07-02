//Ejercicio N1

function numeroParOImpar(numero) {
  if (numero % 2 === 0) {
    console.log("El " + numero + " es par");
  } else {
    console.log("El " + numero + " es impar");
  }
}

numeroParOImpar(7);

//ejercicio N2
function mayorMenor(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " es mayor que " + num2);
  } else if (num2 > num1) {
    console.log(num2 + " es mayor que " + num1);
  } else {
    console.log("son iguales");
  }
}
mayorMenor(15, 15);

//Ejercicio N3
function multiploDeCinco(numero) {
  if (numero % 5 == 0) {
    console.log("El " + numero + " es múltiplo de 5");
  } else {
    console.log("El " + numero + " no es múltiplo de 5");
  }
}
multiploDeCinco(65);

//Ejercicio N4

function secuenciaNumerica(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

secuenciaNumerica(10);

//Ejercicio N5
function cantidadDePalabras(palabra, numero) {
  for (let p = 0; p < numero; p++) {
    return console.log(palabra);
  }
}

cantidadDePalabras("supercalifragilisticoespialidoso", 5);

//Ejercicio N6

const arrayEjercicio6 = ["Pedro", "Juan", "Luis", "Jose", "Nicolas"];
function imprimirArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

imprimirArray(arrayEjercicio6);

//Ejercicio N7
const arrayExclusion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function todosMenosVos(array) {
  for (let i = 0; i < array.length; i++) {
    if (i == 4) {
      continue;
    }
    console.log(array[i]);
  }
}

todosMenosVos(arrayExclusion);

//Ejercicio N8
const arrayMultiplicando = [10, 20, 30, 40, 50];
const multiplicador = 1000;

function imprimirMultiplicacion(array, multiplicador) {
  for (let i = 0; i < array.length; i++) {
    const resultado = array[i] * multiplicador;
    console.log(resultado);
  }
}

imprimirMultiplicacion(arrayMultiplicando, multiplicador);
