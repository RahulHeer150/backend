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