// Generators => forma de usar: function* ()
// São funções que pausa e despausam, através de uma
// interface de iteração
function* hello () {
  console.log('Hello');
  yield 1;
  
  console.log('From');
  const value = yield 2;
  
  console.log(value);
}
const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));

// Criando ranges infinitos
function* naturalNumbers () {
  let number = 0;
  while (true) {
    yield number;
    number++;
  }  
}
const it = naturalNumbers();
console.log(it.next()); // retorna { value: 0, done: false }
console.log(it.next()); // retorna { value: 1, done: false }
console.log(it.next()); // retorna { value: 2, done: false }
console.log(it.next()); // retorna { value: 3, done: false }

// outro exemplo de Generators
const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

const obj = {
  values: [1, 2, 3, 4],
  *[Symbol.iterator]() {
    for (var i = 0; i < this.values.length; i++) {
      yield this.values[i];
    }
  }
};
for (let value of obj) {
  console.log(value);
}