//constructor- doesnt return anything and starts with capital letter
function Person(name, age) { //constructor function
  
   this.name=name,
   this.age=age;
} 
Person.prototype.talk=function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
let p1= new Person("Alice", 30);
let p2=new Person("Bob", 25);
