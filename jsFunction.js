// Function Declaration
// function aboutMe(name,age){
//     const message = `I'm ${name}, i am  ${age} years old`;
//     console.log(message);
// }



//Function Call
// aboutMe('Dat',100);
// aboutMe('Ha',23);

// function calcSum(num1,num2){
//     return num1 +num2;
// }
// let result = calcSum(1,2);
// console.log(result); 


//  Default PARAMETER
// function calcSum(number1,number2 = 1,number3 = 3){
//     let sum = number1+number2+number3;
//     return sum;
// }
// console.log(calcSum(10));




//Function Expression
// const calSumExp = function(number1,number2){
//     let sum = number1 +number2;
//     return sum;
// }
// console.log(calSumExp(99,1)); 


// //Arrow Function
// const calSumArr = (number1,number2) => number1 + number2 ;
// console.log(calSumArr(40,30));

// const mulByTwo = function(number1){
//     return number1 *2;
// }
// console.log(mulByTwo(6));

// //Arrow
// const mulByTwo2 = (number1) => number1 * 2;
// console.log(mulByTwo2(10));




//Rest Parameter

function multiply(...args){
    console.log(args);
    let mulp  = 1; 
    for (let num of args){
        mulp = mulp * num;
    }
    return mulp;
    //return num1*num2*.....;
}
console.log(multiply(2,3,4,2,2));
