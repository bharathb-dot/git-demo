// let  var1=32
// let var2=34;
// if (var1>var2){
//     console.log(var1);
// }
// else{
//     console.log(var2);
// }
// let ar1=[2,34,68,84,58]
// for (let i=0;i<ar1.length;i++){
//     if (ar1[i]%2==0){
//         console.log(ar1[i]);
//     }
// }

function check(num1){
    if (num1%2==0){
        return "Even"
    }
    else{
        return "Odd"
    }
}
console.log(check(23));