// rest operator "..."  // utilizado para manipular lista de argumentos
                        // ou manipular o restante dos argumentos
function sum(...args) {
  console.log(args); // retorna [ 5, 5, 5, 2, 3 ] // (__proto__: Array)
  console.log(arguments); // retorna [Arguments] { '0': 5, '1': 5, '2': 5, '3': 2, '4': 3 }
                                                  // (__proto__: Object)
}
console.log(sum(5, 5, 5, 2, 3)); // retorna undefined

// exemplificando 1 (manipulando lista)
function sum (...args) {
  return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5, 5, 5, 2, 3)); // retorna 20

// exemplificando 1 (manipulando restante dos argumentos)
const sum = (a, b, ...rest) => {
  console.log(a, b, rest);        // retorna 5 5 [ 5, 2, 3 ]
};
console.log(sum(5, 5, 5, 2, 3));  // retorna undefined

// exemplo spread operator "..."  ==> Pega todos os itens de um array e transforma em parâmetros de uma função
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...spread) => {
  return multiply(...spread);
};
console.log(sum(5, 5, 5, 2, 3)); // retorna 750
// pode ser utilizado em strings, arrays, literal objects e objetos iteráveis
// Strings
const str = 'Digital Innovation One';

function logArgs (...args) {        // função sempre com letras minúsculas
  console.log(args);                // por convenção só funções construtoras
};                                  // são com letras maiúsculas

logArgs(...str);
/* retorna [
  'D', 'i', 'g', 'i', 't',
  'a', 'l', ' ', 'I', 'n',
  'n', 'o', 'v', 'a', 't',
  'i', 'o', 'n', ' ', 'O',
  'n', 'e'
] */
// array ==> transforma os itens do array em parâmetros da função
const arr = [1, 2, 3, 4];
function logArgs (a, b, c, d) {
    console.log(a, b, c, d);
};
const arr2 = [...arr, 5, 6, 7]  // concatenando com spread operator
const arr3 = [...arr2, ...arr, 0, 0, 0]
logArgs(...arr);      // retorna  1 2 3 4 
console.log(arr2);    // retorna [ 1, 2, 3, 4, 5, 6, 7]
console.log(arr3);    // retorna [ [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 0, 0, 0]

// literals objects ==> utilizado somente para construir novos objetos
const obj = {
  teste: 123
};
const obj2 = {
  ...obj,
  teste2: 'hello'
};
const obj3 = {
  ...obj,
  teste: 456    // nesse caso, sobrescreve a propriedade teste com 456
}
console.log(obj2);  // retorna { teste: 123, teste2: 'hello' }
console.log(obj3);  // retorna { teste: 456 }
