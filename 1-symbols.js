// Symbols
const uniqueId = Symbol();
console.log(uniqueId);  // retorna Symbol()

// podemos atribuir uma mesma string identificadora,
// mas o valor não será o mesmo. Ex:
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');
console.log(uniqueId === uniqueId2);  // retorna false

// exemplo gerando propriedades
const uniqueId = Symbol('Hello');

const obj = {
  [uniqueId]: 'Hello'
}
console.log(obj); // retorna { [Symbol(Hello)]: 'Hello' }
console.log(Object.keys(obj));
// retorna [], que indica uma propriedade privada
console.log(Object.getOwnPropertySymbols(obj));
// retorna [ Symbol(Hello) ] ou seja
// usando o método getOwnPropertySymbols conseguimos acessar a propriedade

// Well-known Symbols
const arr = [1,2,3,4];
const it = arr[Symbol.iterator]();
console.log(it.next()); // retorna { value: 1, done: false }

// usando for - of => surgiu no ES6 pode substituir 'while'
const arr = [1,2,3,4];
const str = 'Digital Innovation One';

for (let value of arr)  {
  console.log(value);
}
//  retorna 1
//          2
//          3
//          4
for (let value of str)  {
  console.log(value);
}
//  retorna D
//          i
//          g
//          i ... até completar oda a string ...

// Função iteradora em um objeto
const obj = {
  values: [1,2,3,4],
  [Symbol.iterator]() {
    let i = 0;

    return {
      next: () => {
        i++;

        return {
          value: this.values[i - 1],
          done: i > this.values.lenght
        };
      }
    };
  }
};
const arr2 = [...obj];
console.log(arr2);