function doSomethingAsync(callback){
  setTimeout(function() {callback(1)},1000)
}

doSomethingAsync(console.log)

//1 (displayed after 1 sec)
