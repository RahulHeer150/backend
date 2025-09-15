function personMaker(name, age) { //factory function
  const person={
    name: name,
    age: age,
    greet() {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
  };
  return person;
} 

let p1=personMaker("Alice", 30);
let p2=personMaker("Bob", 25);
p1.greet(); // Hello, my name is Alice and I am 30 years old.
p2.greet(); // Hello, my name is Bob and I am 25 years old.