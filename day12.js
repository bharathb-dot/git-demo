// // function createUser(name){

// //     return function(){
// //         console.log("User: " + name);
// //     }

// // }

// // let user1 = createUser("Bharath");

// // user1();

// function counter(){
//     let count = 0;

//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// let c = counter();

// c();
// c();
// c();
// function username(user){
//  return function(){
//      console.log("Username: " + user);
//  }  
// }
// let user1 = username("Bharath");

// user1();    

// function counter(){
//     let count=0;
//     function inner(){
//         count++;
//         console.log(count);
//     }
//     return inner
// }
// let func=counter();
// func();
// func()
// func()


// function greeting(greet){
//      function names(name){
//    console.log(`${greet} ${name}`);
//     }
// return names;
// }
// let res=greeting("Hello");
// res("Bharath");

// function greeting(greet){
//     function names(name){
//     console.log(`${greet} ${name}`);
//     }
//     return names;
// }
// let hi=greeting("Hi");
// let welcome=greeting("Welcome");
// hi("Bharath");
// welcome("ravi");

// function product_price(price){
//     let tax=0;
//     function taxes(){
//     tax +=10;
//     console.log(tax+price);
//     }
//     return taxes;
// }
// let t1=product_price(100);
// t1();

// function login_attempt(){
//     let count=0;
//     function attempt_count(){
//    count++;
//    console.log(`Login attempt ${count}`);
//     }
//     return attempt_count;
// }
// let res=login_attempt();
// res();
// res();
// res();

// function bankAccount(initialbalance){
//     let balance=initialbalance
// function deposit(amount){
// balance += amount;
// console.log(`Balance:${balance}`);
// }
// function withdraw(amount){
// balance -= amount;
// console.log(`Balance:${balance}`);
// }
// return {deposit,
// withdraw
// }
// }
// let res= bankAccount(100);
// res.deposit(100);
// res.withdraw(50);


// // function test_counter(){
// //     let count=0;
// //     function test_count(){
// //     count++;
// //     console.log(`Test case executed : ${count}`);
// //     }
// //     return test_count;
// // }
// let res= test_counter();
// res();
// res();
// res();

// function createAdder(x){
//     return function(y){
//         return x + y
//     }

// }
// let add5=createAdder(5);
// console.log(add5(7));

// function createCounter(){
//     let count=0;
//     function counts(){
//         count++;
//         console.log(count);
//     }
//     return counts;
// }
// let counter=createCounter();
// counter();

// function bankaccount(){
// let balance=0;
//  function deposit(amount){
//     balance+=amount;}
//     function withdraw(amount){
//         balance -= amount;
//     }
//     return {
//         deposit,withdraw
//     }
// }
// let account=bankaccount()

// function bankAccount(initialbalance){
//     let balance=initialbalance;
//        return{
//         deposit(amount){
//             balance += amount;
//         },
//         withdraw(amount){
//             balance -= amount;
//         },
//         getbalance(){
//             return balance;
//         }
//        }
// }
// let account=bankAccount(1000);
// account.deposit(200);
// account.withdraw(100);
// console.log(account.getbalance());

// for(let i=1;i<=3;i++){
// setTimeout(function(){
// console.log(i);
// },1000);
// }

// function createMultiplier(x){
//     return function multiply(y){
//         return x*y;
//     }
// }
// let double=createMultiplier(2);
// console.log(double(5));
// let triple=createMultiplier(3);
// console.log(triple(10));

// function createScoreboard(){
//     let score =0;
//     return {
//         addPoints:function(n){
//          score += n;
//         },
//         losePoints:function(n){
//             score -=n;
//         },
//         getScore:function(n){
//             return score
//         }
//     }
// }
// let final=createScoreboard();
// final.addPoints(10);
// final.losePoints(2);
// console.log(final.getScore());

// function runOnce(fn){
//     let hasRun=false;
//     let result;
//     return function once(...args) {
//      if (!hasRun){
//         hasRun=true;
//         result=fn(...args)
//      }
//      return result;
//     }
// }
// const add=(a,b)=>a+b;
// const addOnce=runOnce(add);
// console.log(addOnce(5,5));

// function outer(){

//     let a = 5;

//     return function(){
//         a = a + 2;
//         console.log(a);
//     }

// }

// let x = outer();

// x();
// x();
// x();
// function counter(){
//  let count = 0;

//  return function(){
//   console.log(count++);
//  }
// }

// let c = counter();

// c();
// c();
// c();
// for(let i=1;i<=3;i++){
//  console.log(i);
// }
// console.log(i);

// function sum(a){
//     return function(b){
//         return a+b;
//     }
// }
// console.log( sum(2)(3)); 


// function subtract(x){
//     return function(y){
//         return x-y;
//     }
// }
// console.log(subtract(10)(3));


// function divide(x){
//     return function(y){
//         return function(z){
//             return x/y/z;
//         }
//     }
// }
// console.log(divide(100)(5)(2));

// function greet(greeting){
//     return function(name){
//         return greeting +" "+ name
//     }
// }
// let sayHello=greet("Hello");
// console.log(sayHello("Bharath"));  
// console.log(sayHello("Ravi"));

// function tax(rate){
//     return function(amount){
//         return amount + (amount * rate /100)
//      }
// }
// let gst18=tax(18);
// console.log(gst18(100));

// function power(x){
//     return function(y){
//         return x ** y;
//     }
// }
// console.log(power(2)(3));

// function sum(a){
//     return function(b){
//        if (b===undefined) return a;
//        return sum(a+b);
            
//     }
// }
// console.log(sum(1)(2)(3)()); 

// function login(role){
//   return function(name){
//     return role + " logged in as " + name;
//   }
// }
// let admin =login("Admin");
// console.log(admin("Bharath"));


// function multiply(x){
//     return function(y){
//         return x* y;
//     }
// }
// let triple=multiply(3);
// console.log(triple(5));
// console.log(triple(10));
// let car = {
//   brand: "Toyota",
//   show(){
//     console.log(this.brand);
//   }
// }

// car.show();

// let obj = {
//   name: "Playwright",
//   show(){
//     const inner = () => {
//       console.log(this.name);
//     }
//     inner();
//   }
// }

// obj.show();

// function User(name){
//   this.name = name;
// }

// let u1 = new User("Automation");

// console.log(u1.name);

// let person1 = {name:"Bharath"};
// let person2 = {name:"Ravi"};

// function greet(){
//   console.log(this.name);
// }

// greet.call(person1);
// greet.call(person2);

// let obj = {
//   name: "QA",
//   show(){
//     setTimeout(function(){
//       console.log(this.name);
//     },1000);
//   }
// }

// obj.show();

// let obj = {
//   name: "Testing",
//   show: () => {
//     console.log(this.name);
//   }
// }

// obj.show();

 