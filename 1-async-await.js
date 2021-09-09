// ES7 - Async / Await
const asyncTimer = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(12345);
    }, 1000);
  });

const simpleFunc = async () => {
  const data = await asyncTimer();  // se quiser retorno em paralelo usar Promise.all
  console.log(data);
  const dataJSON = await fetch('/data.json').then(resStream =>
    resStream.json()
  );
  return dataJSON;
  //return data;
  // return 12345;
  // throw new Error('Oh no!');
};
//console.log(simpleFunc()); // retorna Promise { 12345 }
simpleFunc().then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
// retorna 12345
