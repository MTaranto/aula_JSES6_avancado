// Antes do ES6
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
  doSomething(function(data) {
    var processData = data.split('');
    
    doOtherSomething(function(data2) {
      var processData2 = data2.split('');

      setTimeout(function() {
        console.log(processData, processData2);
      })
    });
  });
}