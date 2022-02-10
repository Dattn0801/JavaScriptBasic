// Variables



// var name1 = 'Dat';
// console.log(name1);
// console.log(1);


// let price = 250;
// price  = 300;
// const name2 = 'Dat dep trai';
// //name2 = 'Dat dep trai qua troi';
// console.log(price,name2);


// let name = `Dat`;
// console.log(typeof name);
// let age = 45;
// console.log(typeof age);

// let isMarried  = false;
// console.log(typeof isMarried);

// let colors = undefined;
// console.log(typeof colors);

// let  selectColor = null;
// console.log(typeof selectColor);

//Object



// let name = 'Dat';
// let age = 40;
// let hobby = 'reading';
// let user = {
//     name : 'Dat',
//     age: 40,
//     hobby : 'reading', 
// }; 
// console.log(user); 
// console.log(user.name);
// console.log(user.hobby);
// console.log(user['name']);
// console.log(user['age']);


// let friend = ['Dat','Duy','Truong','Vu']
// console.log(friend);
// console.log(friend[0]);
// console.log(friend[2]);
// console.log(typeof friend);
// console.log(friend.length);

// Javascript Function



// function showMyName(name){
//     console.log('My name is ' + name);
// }
// showMyName('Dat');
// showMyName('Lionel Messi');
// showMyName('Bezenma');
// showMyName('Cristial Ronaldo');

// let num1 = 30;
// let num2 = 20;
// let sum = num1 +num2 ;
// console.log(sum);

// function calcSum(num1,num2){
//     return num1 +num2;
// }
// const result = calcSum(1,2); 
// console.log(result);

//Template Literals
// let name = 'Dat';
// console.log(`my name is  ${name}`);

// console.log(`${30 + 20}`);

// let message  = `my 
// name
// is
// Nguyen Thanh Dat`;

// let message1  = 'my name is \nNguyen Thanh Dat'

// console.log(message);
// console.log(message1);

//Exercise



// let person = {
//     name : 'Dat',
//     age : 24,
//     isMarried : true,
//     homeAddress: {
//         long: 44.55,
//         lat: 33.44,
//     },
//     friends : ['Duy','Vu','Cr7','Messi'],

// };
// console.log(person); 
// console.log(person.name);
// console.log(person.homeAddress.long);
// console.log(person.friends[0]);



//Arithmetic Operators



// let num1  = 10;
// let num2  = 5;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 ** num2);
// console.log(num1 % num2);


// Assignment Operator
// let num1 = 10;
// let num2 = num1 +5;
// console.log(num1,num2);
// //num1 = num1 +5;
// num1 += 5;
// num1 *= 5;
// num1 -= 5;
// num1 ++;
// num2 --;
// console.log(num1,num2);


//Comparison Operators
// > < >=  <= == === !==
// let price = 200;
// console.log(price > 300);
// console.log(price >= 200);
// console.log(price < 100);
// console.log(price <= 500);
// console.log(price === 200);
// console.log(price !== 201)


//Logical Operators
// and (&&), or (||), not (!)
// let price = 10;

// console.log(price >5 && price < 15);

// console.log(price >50 || price< 15);

// console.log(!(price >50)); 


//Equality Operators



// let price = 10;
// // === compare dataType
// console.log(price === '10');
// console.log(price !== 11);

// console.log(price == '10');
// console.log(price != 11);


//Poblem: Swap TwoNumbers


// let apple = 10;
// let orange  =20;

// let temp = apple;
// apple = orange;
// orange = temp;
// console.log(apple,orange);



//Condition Staments
// if(conditon1){
//     staments
// } else if(conditon2){
//     statements
// } else if(conditon3){
//     statements
// }

//
// let number = 0;
// if(number >0){
//     console.log('This is positive number');
// }
// else if(number < 0){
//     console.log('This is a negative number');
// }
// else{
//     console.log('This is a Zero number');
// }
    


//Switch case
// let color = 'blackka';

// switch(color){
//     case 'black': 
//         console.log('this is black');
//         break;
//     case 'white':
//         console.log('this is white');
//         break;
//     default:
//         console.log('this is default');

// }


//Tenerary Operator

// let number1 = 10;
// let number2 = 2;


// let maxValue;
// if(number1 > number2){
//     maxValue = number1;
// }else{
//     maxValue = number2;
// }

// let max = number1 > number2 ? number1: number2;
// console.log(max);

// let number = 2;

// if( number % 3 === 0 && number % 5 === 0){
//     console.log('Fizz Buzz');
// }else if(number % 5 === 0){
//     console.log('Buzz');
// }else if(number % 3 === 0){
//     console.log('Fizz');
// }else 
//     console.log('Nothing');

// console.log(
//     number % 3  === 0 && number % 5 === 0
//     ?'Fizzbuzz'
//     :number % 3 === 0
//     ?'Fizz'
//     :number % 5 === 0  
//     ?'Buzz'
//     :'Nothing'
//     )

// let number = 0;
// switch(true){
//     case number > 0:
//         console.log('this is a Positive number');
//         break;
//     case number === 0:
//         console.log('this is a Zero number');
//         break;
//     case number < 0:
//         console.log('this is a negative number');
//         break;
// }




//Loops

// for (let index = 1; index <= 4; index++){
//     console.log('Hi Dat',index );
// }
// for (let index = 5; index >=1; index--){
//     console.log('Hi Dat',index );
// }

//While loop

// let index  =1;
// while(index <=5){
//     console.log('Dat dz',index);
//     index++;
// }
// let index = 5;
// while(index >= 1){
//     console.log('Dat dz',index);
//     index--;
// }

// Do while loops
// let index = 1;
// do{
//     console.log('Dat dz',index);
//     index++;
// }
// while(index <= 5);

//for in loops

// const objs = {
//     name:'Dat',
//     age:24,
// }
// for(let key in objs){
//     console.log(key, objs[key]);
// }
// let numbers = [1,2,3,4,6]; 
// console.log(numbers);

// for(let i in numbers){
//     console.log(i,numbers[i]);
// }

// //of get value 
// for(let num of numbers){
//     console.log(num);
// }


//Nested loop
//  for(let i  = 1; i <=  3; i++){
//      for(let j = 1; j<= 3; j++){
//         console.log(i,j);
//      }
//  }






