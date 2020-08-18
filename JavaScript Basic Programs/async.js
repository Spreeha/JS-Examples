function printOne(){
  console.log('one')
}

function printTwo(){
  console.log('two')
}

function printThree(){
  console.log('three')
}

setTimeout(printOne,1000)
setTimeout(printTwo,0)
printThree()


//three
//two
//one (gets printed after 1s or 1000ms)
