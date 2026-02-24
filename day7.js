// // function hello(){
// //     console.log("hello");
// // }
// // hello();
// function hello(name){
//     console.log(`Hello ${name}`);
// }

// hello("Bro");
// hello("Bharath");
// function add(a,b){
//     return a*b;
// }
// console.log(add(3,6));
// function square(number){
//     return number ** 2;
// }
// let res=square(3);
// console.log(res);
// function printNumbers(n){
//     for (let i=1;i<=n;i++){
//         console.log(i);
//     }
// }
// printNumbers(5);
//   for (let i=1;i<=5;i++){
//         console.log(i);
//     }

function sumUpTo(n){
 let sum=0;
 for(let i=1;i<=n;i++){
        sum=sum+i; 
    }
    return sum;
}
 console.log(sumUpTo(10));  
