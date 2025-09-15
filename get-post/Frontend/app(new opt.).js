//constructor- doesnt return anything and starts with capital letter
function Person(name, age) { //constructor function
  
   this.name=name,
   this.age=age
} 

let p1=Person("Alice", 30);
let p2=Person("Bob", 25);
p1.greet(); // Hello, my name is Alice and I am 30 years old.
p2.greet(); // Hello, my name is Bob and I am 25 years old.