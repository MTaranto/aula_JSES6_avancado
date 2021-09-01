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
