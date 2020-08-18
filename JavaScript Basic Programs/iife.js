const sayhello = (function() {
  var message='hello!'

  function sayHello(){
    console.log(message)
  }
})()

const counter = (function() {
  let count = 0 //This variable is wrapped in a function no one can access except the return function
                //count therefore is not accessible to the global object
  return {
    inc: function() { count=count+1 },
    get: function() { console.log(count) },
  }
})()

counter.get()
counter.inc()
counter.get()
