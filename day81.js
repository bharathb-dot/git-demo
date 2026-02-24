// class Car{
//     constructor(brand,model){
//         this.brand=brand;
//         this.model=model;
//     }
//     display(){
//         console.log(`Car is ${this.brand} ${this.model}`);
//     }
// }
// let p1=new Car("Suzuki","Swift");
// p1.display();

class Person{
   constructor(name){
    this.name=name;
   }
    greet(){
        console.log(`Hello ${this.name}`);
    }
}
class Employee extends Person{
    constructor(name,role){
        super(name);
        this.role=role;
    }
displayRole(){
    console.log(`Role: ${this.role}`);
}
}
let e =new Employee("Bharath","QA");
e.greet();
e.displayRole();