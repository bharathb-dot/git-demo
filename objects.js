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

let users=[
{name:"Bharath",age:25},
{name:"Ravi",age:17},
{name:"Anu",age:30},
{name:"Kiran",age:15}
]
let res=users.filter(p=>p.age>=18).map(l=>l.name);
console.log(res);//gshdsd