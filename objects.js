// let person={
//     name:"Bharath",
//     role:"QA",
//     city:"Hyderabad"
// }
// person.experience=6;
// console.log(person.city);

// for(let key in person){
//     console.log(key,person[key]);
// }

// let user={
//     username:"admin",
//     password:1234,
//     status:"active"
// }
// user.status="inactive";
// for (let key in user){
//     console.log(key,user[key]);
// }

// function add(a,b){
// console.log(a+b);
// }
// add(5,3)

// let multiply=(a,b)=>a*b;
// console.log(multiply(4,5));


// let even=[1,2,3,4,5,6,7,8];
// for(let i=0;i<even.length;i++){
//     if(even[i]%2==0){
//    console.log(even[i]);
//     }
// }

// let nums=[1,2,3,4,5,6];
// let odd =nums.filter(num=>num%2!==0);
// console.log(odd);

// let nums=[2,3,4,5];
// let squares=nums.forEach(num=>{
//     console.log(num ** 2);
// })

// let nums=[3,6,9];
// let dble=nums.map(num=> num*2);
// console.log(dble);

// let nums=[2,7,1,9,4,6];
// let res=nums.filter(num=>num>5);
// console.log(res);

// let nums=[11,14,17,20,23,26];
// let res=nums.filter(num=>num%2===0);
// console.log(res);

// let users=[{
//     name:"Bharath",age:22
// },{name:"ravi",age:23},
// {name:"anu",age:25}
// ]
// let res=users.map(nam=>nam.name);
// console.log(res);

// let products=[
// {name:"Laptop",price:50000},
// {name:"Phone",price:20000},
// {name:"Tablet",price:15000}
// ]
// let res=products.filter(p=>p.price>20000).map(l=>l.name);
// console.log(res);

// let users=[
// {name:"Bharath",age:25},
// {name:"Ravi",age:17},
// {name:"Anu",age:30},
// {name:"Kiran",age:15}
// ]
// let res=users.filter(p=>p.age>=18).map(l=>l.name);
// console.log(res);//fdggfdhgj

// let nums=[10,20,30,40,50]
// let res=nums.filter(n=>n>25);
// console.log(res);

// let products=[
// {name:"Laptop",price:50000},
// {name:"Phone",price:20000},
// {name:"Tablet",price:15000}
// ]
// // let res=products.map(n=>n.name);
// // console.log(res);

// let res=products.reduce((total,n)=> total+n.price,0);
// console.log(res);

// let nums=[1,2,3,4,5];
// let res=nums.reduce((prod,n)=>prod*n,1);
// console.log(res);

// const cookie={
//     name:"chocolate chip",
//     isGlutenFree:false,
//     eatCookie:function(){
//         console.log("iam eating "+ this.name);
//     }
// }

// cookie.name="chip chocolate"
// cookie.eatCookie();

// class Cookie{
//     constructor(name,isGlutenFree){
//         this.name=name;
//         this.isGlutenFree=isGlutenFree;
//     }
//      eatCookie(){
//         console.log("iam eating "+this.name);
//      }
// }
// const mycookie=new Cookie("iced oatmeal",false);
// console.log(mycookie.name);
// mycookie.eatCookie();
// class Employee{
//     constructor(name,role){
//         this.name=name;
//         this.role=role;
 
//     }

//     details(){
//         console.log(`Employee name is ${this.name} and role is ${this.role}`);
//     }
// }
// let p1=new Employee("Bharath","QA");
// p1.details();

// class Vehicle{
//     constructor(name){
//      this.name=name;
//     }
//     start(){
//         console.log(`Vehicle started`);
//     }
// }
// class Car extends Vehicle{
    
//     start(){
//         console.log(`Car started`);
//     }
// }
// class jeep extends Vehicle{
// start(){
//     console.log(`Jeep started`);
// }
// }
// let v1=new Vehicle();
// let c1=new Car();
// let j1=new jeep();
// v1.start();
// c1.start();
// j1.start();

// class Car{
//     constructor(brand,speed){
//         this.brand=brand;
//         this.speed=speed;
//     }

//     accelerate(speed){
//         this.speed +=10;
//     }
//     showSpeed(){
//         console.log(`Speed is ${this.speed}`);
//     }
// }
// let c1=new Car("Volvo",100);
// c1.accelerate();
// c1.showSpeed();

// class Vehicle{
//     start(){
//         console.log("Vehicle started");
//     }
// }
// class Bike extends Vehicle{
//     start(){
//         console.log("Bike started");
//     }
// }
// class Car extends Vehicle{
//     start(){
//         console.log("Car Started");
//     }
// }
// let b1= new Bike();
// let c1= new Car();
// b1.start();
// c1.start();
// class Calculator{
//     static add(a,b){
//         console.log(a+b);
//     }
//     static multiply(a,b){
//         console.log(a*b);
//     }
// }

// Calculator.add(5,3);
// Calculator.multiply(4,6);

// class Laptop{
//     start(){
//         this.#bootSystem();
//     }
//     #bootSystem(){
//         console.log("Laptop starting");
//         console.log("System booting");
//     }
// }
// let l1=new Laptop();
// l1.start();

// let name="Bharath";
// let age=25;
// let isTester=true;
// console.log(name);
// console.log(age);

// console.log(isTester);

// let name="Playwright";
// let experience=0.4;
// let isWorking=true;
// let skills=["manual testing","Api testing","Automation testing"];
// let my_data={
//     name:"Bharath",role:"Qa"
// }
// let data;

// console.log(name);
// console.log(experience);
// console.log(isWorking);
// console.log(skills);
// console.log(my_data);
// console.log(data);

// let num=34;
// if (num%2==0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }

// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// let nums=[1,2,3,4,5];
// let sum=0;
// for(let i=0;i<nums.length;i++){
//     sum +=nums[i];
// }
// console.log(sum);

// function add(a,b){
//     return a+b;
// }
// console.log(add(5,3));

// let str="Automation";
// let rev=""
// for(let i=str.length-1;i>0;i--){
//     rev.push(str[i]);
// }
// console.log(rev);


// let nums=[1,2,3,4];
// let res=nums.map(n=>n**2);
// console.log(res);

// let nums=[5,12,8,20,3];
// let res=nums.filter(m=>m>10);
// console.log(res);

// let nums=[10,20,30];
// let res=nums.reduce((total,n)=>total+n);
// console.log(res);

// let person={
//     name:"Bharath",role:"QA",experience:2
// }
// console.log(`Name:${person.name}`);
// console.log(`Role:${person.role}`);
// console.log(`Experience:${person.experience}`);

// class Employee{
//     constructor(name,role){
//         this.name=name;
//         this.role=role;
//     }
//   showDetails(){
//     console.log(this.name,this.role);
//   }

// }
// let e1=new Employee("Bharath","QA");
// e1.showDetails();

// class Animal{
//     sound(){

//     }
// }
// class Dog extends Animal{
// sound(){
//     console.log("Dog barks");
// }
// }
// let d1=new Dog();
// d1.sound();
// class bankAccount{
// //     constructor(_balance){
// //      this._balance=_balance;
// //     }
// //      deposit(_balance){
// //         this._balance +=10;
// //      }
// //      getBalance(){
// //         console.log(this._balance); 
// //      }
// //     }
// // let b1=new bankAccount(100);
// // b1.deposit();
// // b1.getBalance();

// class Shape{
//     draw(){
//         console.log("Shape");
//     }
// }
// class Circle extends Shape{
//     draw(){
//         console.log("Circle");
//     }
// }
// class Square extends Shape{
//     draw(){
//         console.log("Square");
//     }
// }
// let c1=new Circle();
// let s1=new Square();
// c1.draw();
// s1.draw();

class Phone{
    start(){
        this.#bootSystem();

    }
    #bootSystem(){
        console.log("Phone starting");
        console.log("System booting");
    }       

}
let p1=new Phone();
p1.start();