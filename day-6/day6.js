//inheritance
class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    sayHello(){
        console.log(`Hello, my name is ${this.name} and I'm  ${this.age} years old.`);
    }
}

//membuat instance dari class
const john = new Person("John",25);

//mengakses properti dari instance
console.log(john.name); //output : 'John'

//memanggil metode dari instance
john.sayHello() //output : 'Hello my name is John and I'm 25 years old'