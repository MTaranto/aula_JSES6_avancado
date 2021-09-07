// maneira clássica de escrever objetos literais
var obj = {
  prop1: 'Digital Innovation One'
};
console.log(obj);
// { prop1: 'Digital Innovation One' }
// ou referenciando uma variável
// outro exemplo com short end chamando função
function method1 () {
  console.log('method called');
}
var obj = {
  method1         // antes => method1: method1
};

obj.method1();

// mais um exemplo com short end
      var obj = {
        sum(a, b) {       // omitindo a palavra function
          return a + b
        }
      };
console.log(obj.sum(2, 5)); // retorna 7
console.log(obj); // retorna { sum: [Function: sum] }

// declarando propriedades obj literal ES6
var propName = 'test';
var obj = {
  [propName + 'Concat']: 'prop value'
};
console.log(obj);
// retorna { testConcat: 'prop value' }
