// exemplo default function arguments
function multiply(a = 2, b = 1) {   // b=1 define valor padrão (default) caso o
  return a * b;                 // segundo parâmetro seja omitido ou seja undefined
}
console.log(multiply(5));   // retorna 5
console.log(multiply(5, 0));   // retorna 0
console.log(multiply(undefined));   // retorna 2

// lazy evaluation
function randomNumber() {
  console.log('Genetating a random number...');
  return Math.random() * 10;
}
    function multiply(a, b = randomNumber()) {
      return a * b;
    }

    console.log(multiply(5)); // cada vez que a função é invocada
    console.log(multiply(5)); // gera um número diferente