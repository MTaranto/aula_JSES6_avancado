// exemplo função normal
function log (value) {
  console.log(value);
}
log('test');
// test

//função anônima (sem nome) e com return
var sumOld = function(a, b) {
  return a + b;
}
console.log(sumOld(5, 7));
// 12

// exemplo arrow function: https://www.youtube.com/watch?v=VwAYyXZk5as

class Usuario {
  nome = 'Márcio';
  empresa = 'Carupi';

  mostrarNome = () => {
    console.log(this.nome);
    console.log(this.empresa);
  }
}

// Arrow functions (=>)
var sum = (a, b) => a + b; // return implícito
console.log(sum(5, 8));
// 13 
// ou
var x = 10;
var sum = (a, b) => { // incluindo statements
  if (a > b) {
  }
  return a + b;
}
console.log(sum(50, 20)/x);
// 7
// outra forma de escrever
var sum = a => a + 5; // se houver apenas 1 argumento pode omitir os parênteses
console.log(sum(50));

// criando um objeto
var createObj = () => ({ test: 123 });
console.log(createObj());
// { test: 123 }

// criando um objeto com uma função construtora
function Car() {
  this.foo = 'bar'
}
console.log(new Car());
// Car { foo: 'bar' }

// caso onde arrow function resolve problemas
var obj = {
  showContext: function showContext() {
    // this = obj
    setTimeout(() => {        // contexto léxico
      this.log('after 1000 ms');
    }, 1000);
  },
  log: function log(value) {
    console.log(value);
  }
}
obj.showContext();
// after 1000 ms (aparece após 1s)
