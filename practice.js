//modern way to swap the numbers
// let a=10;
// let b=20;
// [a,b]=[b,a]
// console.log(a);
// console.log(b);


//arithmetic method 
// let a=10;
// let b=20;
// a=a+b;//30
// b=a-b;//10
// a=a-b;//20
// console.log(a);
// console.log(b);

//find largest number in array
// let nums=[1,2,3,4,5,98943]
// let big=nums[0]
// for(let i=0;i<nums.length;i++){
//    if (nums[i]>big){
//     big=nums[i]
//    }
// }
// console.log(big);

//reverse a string
// let hey="Automation"
// let rev=""
// for (let i=hey.length-1;i>=0;i--){
//     rev=rev+hey[i]

// }
// console.log(rev);

//Count Vowels
let char="Automation"
let count=0
let vowels=['a','e','i','o','u','A','E','I','O','U']
for(let i=0;i<char.length;i++){
    if ('a','e','i','o','u','A','E','I','O','U' in char){
        count++
    }
}
console.log(count);
//