const person = {
  name: 'jordan',
  greet: function(){
    console.log("hello, "+this.name)
  },
}

person.greet()       //hello,jordan

/*const greet=person.greet
greet() */                  //hello,undefined [value of this is the global object]

const friend={
  name: 'David',
}
friend.greet=person.greet
friend.greet()              //hello,David


//Setting 'this' manually
const greet = person.greet.bind({name:'this is a bound object'})
person.greet.call({name:'this is a called object'})
person.greet.apply({name:'this is an applied object'})
greet()
//hello, this is a called object
//hello, this is an applied object
//hello, this is a bound object


//ES6 Arrow function
const newPerson = {
  name: 'newPerson',
  greet: () => {console.log('hi, '+this.name)}
}

newPerson.greet()         //hi, undefined
console.log(this.name)    //undefined
