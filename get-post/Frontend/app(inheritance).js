class Person { //constructor function
   constructor(name, age) { 
   this.name=name;
   this.age=age;
}
talk(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
}
class Student {
    constructor(name, age,marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;

    }
    talk() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let stu=new Student("Alice", 20, 95);

class Teacher{
    constructor(name, age,subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;

    }
    talk() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let t1=new Teacher("Bob", 40, "Math");
