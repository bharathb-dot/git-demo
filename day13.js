// function outer(){
//     let x = 10;

//     return function(){
//         console.log(x);
//     }
// }

// let fn = outer();
// fn();

// function test(){
//     let count = 5;

//     return function(){
//         count += 2;
//         console.log(count);
//     }
// }

// let t = test();

// t();
// t();
// t();

// for(let i=1;i<=3;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000);
// }



// function outer(){
//     let x = 5;

//     return function(){
//         x++;
//         return x;
//     }
// }

// let a = outer();
// let b = outer();

// console.log(a());
// console.log(a());
// console.log(b());

// function test(){
//     let value = 10;

//     return function(v){
//         value += v;
//         return value;
//     }
// }

// let t1 = test();

// console.log(t1(5));
// console.log(t1(10));

// function createCounter(){
//     let count = 0;

//     return {
//         increment: function(){
//             count++;
//         },
//         get: function(){
//             return count;
//         }
//     }
// }

// let c = createCounter();

// c.increment();
// c.increment();



// console.log(c.get());

// function fun(){
//     let x = 1;

//     return function(){
//         console.log(x);
//         let x = 2;
//     }
// }

// let f = fun();
// f();


// function Car(name) {
//     this.name = name;
// }

// Car.prototype.start = function () {
//     return "started";
// };

// let c1 = new Car("BMW");

// console.log(c1.start());

// function User() {}

// User.prototype.items = [];

// let u1 = new User();
// let u2 = new User();

// u1.items.push("QA");

// console.log(u1.items);
// console.log(u2.items);

// function User() {}

// User.prototype.score = 0;

// let u1 = new User();
// let u2 = new User();

// u1.score++;

// console.log(u1.score);
// console.log(u2.score);

// practice 1
// let animal={
//     eats:true
// };
// let dog={
//     barks:true
// };
// dog.__proto__=animal;
// console.log(dog.eats);
// console.log(dog.barks);

// practice 2
// let grandparent={
//     house:true
// };
// let parent={
//     money:100
// };
// let child={
//     toys:true
// };
// parent.__proto__= grandparent;
// child.__proto__= parent;
// console.log(child.toys);    
// console.log(child.money);
// console.log(child.toys);

//practice 3
// let parent={
//     food:"Rice"
// }
// let child={

// }
// child.__proto__=parent;
// child.food="Pizza";
// console.log(child.food);

// practice 4
// function Person(name){
// this.name=name;
// } 
// Person.prototype.sayHi=function(){
//     console.log("Hi "+ this.name);
// }

// let p1=new Person("Bharath");
// let p2=new Person("Ravi");
// p1.sayHi();
// p2.sayHi();

// practice 5
// function User(){
// this.items=[];
// }
// User.prototype.items=[];
// let u1=new User();
// let u2=new User();
// u1.items=["QA"];

// console.log(u1.items);
// console.log(u2.items);

// bonus
// function Test() {}
// Test.prototype.value = 10;

// let t1 = new Test();
// let t2 = new Test();

// t1.value = 20;

// delete t1.value;

// console.log(t1.value);

// function A() {}
// A.prototype.x = 10;//x=10

// let obj1 = new A();
// let obj2 = new A();

// obj1.x = 20;//x=20

// A.prototype.x = 50;//x=50

// console.log(obj1.x); // 20
// console.log(obj2.x); // 50

// function User() {
//     this.items=[]
// }


// let u1 = new User();
// let u2 = new User();

// u1.items.push("QA");

// console.log(u1.items);
// console.log(u2.items);


// class car{
// constructor(name) {
//     this.name=this.name;
// }
// drive(){
//     console.log("Car is driving");
// }
     
    
// }
// let c1=new car("BMW");
// c1.drive();

// class Test {
//     constructor() {
//         this.x = 10;
//     }
// }

// let t1 = new Test();
// console.log(t1.x);

// Practice 1
// class Student{
//     constructor(name,marks){
//         this.name=name; 
//         this.marks=marks;
//     }
//     getResult(){
//         if(this.marks>=40){
//             console.log("Pass")
//     }
//     else{
//         console.log("Fail")
//     }
// }


// }
// let s1=new Student("Bharath",90);
// s1.getResult();

// Practice 2
// class Animal{
//     eat(){
//         console.log("eating");
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log("barking");
//     }
// }
// let d1= new Dog();
// d1.bark();
// d1.eat();

// practice 3
// class A {
//     show() {
//         console.log("A");
//     }
// }

// class B extends A {}

// let obj = new B();
// obj.show();//A

// practice 4
// class A {
//     constructor() {
//         this.x = 10;
//     }
// }

// class B extends A {
//     constructor() {
//         super();
//         this.x = 20;
//     }
// }

// let obj = new B();
// console.log(obj.x);//20


// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         console.log("Hi " + this.name);
//     }
// }

// let p1 = new Person("Bharath");

// class User {
//     constructor() {
//         this.items = [];
//     }

//     addItem(item) {
//         this.items.push(item);
//     }
// }

// let u1 = new User();
// let u2 = new User();

// u1.addItem("QA");

// console.log(u1.items); // ?
// console.log(u2.items); // ?

// let str = "Hi";

// let it = str[Symbol.iterator]();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// let arr = [1, 2];

// let it = arr[Symbol.iterator]();

// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);

// let arr = [10, 20, 30];

// for (let val of arr) {
//     console.log(val);
//     break;
// }

// let obj = {
//     a: 1,
//     b: 2
// };

// for (let val of obj) {
//     console.log(val);
// }

// let obj = {
//     data: [1, 2],

//     [Symbol.iterator]() {
//         let index = 0;
//         return {
//             next: () => {
//                 if (index < this.data.length) {
//                     return { value: this.data[index++], done: false };
//                 } else {
//                     return { done: true };
//                 }
//             }
//         };
//     }
// };

// for (let x of obj) {
//     console.log(x);
// }


// let obj = {
//     data: ["A", "B"],
//     [Symbol.iterator](){
//         let index=0;
//         return {
//             next:()=>{
//                 if(index<this.data.length){
//                     return {value:this.data[index++],done:false};   
//                 }   
//                 else{
//                     return {done:true};
//                 }
//             }
//         }
//     }
// };
// for (let char of obj){
//     console.log(char);
// }
// function* demo(){
//   console.log("Start");
//   yield 1;
//   console.log("Middle");
//   yield 2;
// }
// let d = demo();
// d.next();
// d.next();

// function* fun(){
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let f = fun();

// console.log(f.next());//1
// console.log(f.next());//2
// console.log(f.next());//3
// console.log(f.next());//undefined

// function* test(){
//   yield 1;
//   return 100;
//   yield 2;
// }

// let t = test();

// console.log(t.next());
// console.log(t.next());
// console.log(t.next());

// function* nums(){
//   for(let i=1;i<=3;i++){
//     yield i;
//   }
// }
// function greet(name, callback) {
//   console.log("Hi " + name);
//   callback();
// }

// function bye() {
//   console.log("Bye!");
// }
// greet("Bharath",bye);

// console.log("Hello");

// setTimeout(() => {
//   console.log("World");
// }, 2000);



// function* numbers(){
//   yield "A"    
//   yield "B"
  
// }
// let it = numbers();
// console.log(it.next());

// console.log(it.next());
// console.log(it.next());

// let promise = new Promise((resolve, reject) => {
//   let success = true;

//   if(success){
//     resolve("Done");
//   } else {
//     reject("Error");
//   }
// });

// promise.then((res) => console.log(res))
//        .catch((err) => console.log(err));

// setTimeout(() => {
//   console.log("A");
// }, 1000);

// setTimeout(() => {
//   console.log("B");
// }, 2000);

// setTimeout(() => {
//   console.log("C");
// }, 3000);
//A after 1 sec
// B after 2 sec
// C after 3 sec
// const { test, expect } = require('@playwright/test');

// test('login flow', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//   await page.fill('input[name="username"]', 'Admin');
//   await page.fill('input[name="password"]', 'admin123');
//   await page.click('button[type="submit"]');
// });



console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");