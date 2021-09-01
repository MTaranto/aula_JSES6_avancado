// antes do ES6
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// Destructuring assignment
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];
console.log(apple2, banana2, orange2, tomato2); // retorna Apple Banana Orange Tomato
// no caso quebrou a variável arr (array) em outras variáveis

//exemplo de Destructuring assignment com objeto
var obj = {
  name: 'Márcio',
  age: 46,
  props: {
    cor: 'branco'
  }
};

// var name = obj.name;  // antes do ES6
var {name, age, props: {cor}} = obj;

console.log(obj);
// retorna { name: 'Márcio', age: 46, props: { cor: 'branco' } }
console.log(name, age, cor);
// retorna Márcio 46 branco
