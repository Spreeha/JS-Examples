const x=[0,1,2,3]

function addOne(number){
  return (number+1)
}

addOne(1)

console.log(x.map(addOne))     //[1,2,3,4]
