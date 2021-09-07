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
    var processeData = data.split('');
    
    doOtherSomething(function(data2) {
      var processeData2 = data2.split('');

      setTimeout(function() {
        console.log(processData, processeData2);
      })
    });
  });
}