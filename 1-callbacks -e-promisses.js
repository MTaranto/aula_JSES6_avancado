// utilizando promisses (ES6)
const doSomethingPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(function() {
      // do something
    resolve('First data');
  }, 1500);
});

const doOtherThingPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(function() {
      // do other something
    resolve('Second data');
  }, 1000);
});
// retorna a Promise que for resolvida primeiro
Promise.race([doSomethingPromise(), doOtherThingPromise()])
  .then(data => {
    console.log(data);
  });
// retorna as duas Promises juntas
Promise.all([doSomethingPromise(), doOtherThingPromise()])
  .then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
  })
  .catch(err => {
    console.log(err);
  });
// retorna as duas Promises assíncronas
doSomethingPromise()
  .then(data => { 
    console.log(data.split(''));
    return doOtherThingPromise();
  })
  .then(data2 => console.log(data2.split('')))
  .catch(error => console.log('Ops', error));



// Antes do ES6
// utilizando callbacks
function doSomething (callback) {
  setTimeout(function() {
    // do something
    callback('First data');
  }, 1000);
}
function doOtherSomething (callback) {
  setTimeout(function() {
    // do ohter something
    callback('Second data');
  }, 1000);
}

function doAll () {
  try {
    doSomething(function(data) {
      var processData = data.split('');
      try {
        doOtherThing(function(data2) {
          var processData2 = data2.split('');
          try {
            setTimeout(function() {
              console.log(processData, processData2);
            }, 1000);
          } catch(err) {
            // Handle error
          }
        });
      } catch(err) {
        // Handle error
      }
    });
  } catch(err) {
    // handle error
  }
}
doAll();
