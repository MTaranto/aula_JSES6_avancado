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
    cor: 'branco',
    favoriteColors: ['verde', 'preto']
  }
};

// var name = obj.name;                       // antes do ES6
// var color1 = obj.props.favoriteColors[0];  // antes do ES6
var {name, age, props: {cor, favoriteColors: [color1, color2]}} = obj;  // com ES6

console.log(obj);
// retorna {
//  name: 'Márcio',
//  age: 46,
//  props: { cor: 'branco', favoriteColors: [ 'verde', 'preto' ] }
//  }
console.log(name, age, cor, color1, color2);
// retorna Márcio 46 branco verde preto
console.log(`\nNome: ${name} \nIdade: ${age} \nCor: ${cor} \nCores Favoritas: ${color1} e ${color2}`);
/* retorna:
Nome: Márcio 
Idade: 46 
Cor: branco 
Cores Favoritas: verde e preto */

//exemplo de Destructuring assignment com funções
function sum([a, b] = [0, 0]) { // onde [0, 0] são default values
  return a + b;
}
console.log(sum([5,5])); // retorna 10
// função com objeto
function sum({a, b}) {
  return a + b;
}
console.log(sum({a: 5, b: 5})); // retorna 10
console.log(sum);               // retorna [Function: sum]
