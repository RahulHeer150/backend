class Person { //constructor function
   constructor(name, age) { 
    console.log("person class constructor called");
   this.name=name;
   this.age=age;
}
talk(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
}
class Student  extends Person{
    constructor(name, age,marks) {
        console.log("student class constructor called");
        super(name,age); //calling parent class constructor
        
        this.marks = marks;

    }
   
}
let stu=new Student("Alice", 20, 95);

class Teacher extends Person{
    constructor(name, age,subject) {
        console.log("teacher class constructor called");
        super(name,age); //calling parent class constructor
        
        this.subject = subject;

    }
    
}
let t1=new Teacher("Bob", 40, "Math");
