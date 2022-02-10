//Add
//let arr =[2,31,5,12,515,1];

// arr.unshift(9,10,11);
// arr.push(5,6,7); 
//arr.splice(3,0,15,16);


//Remove
//let arr =[1,2,3,4,5,6,7,8,9];
//arr.shift();
//arr.shift();
//arr.pop();
//arr.pop();

//arr.splice(2,3);


//Search
// const arr =[1,2,3,4,5,6,7,8,9,2];
// console.log(arr.includes(3));
// console.log(arr.indexOf(2));
// console.log(arr.lastIndexOf(2));


//Finding Object in Array
// const doctors = [
//     {name:'Dat', age:20},
//     {name:'Tinh', age:2},
//     {name:'Duong', age:3},
//     {name:'Duy', age:4},
//     {name:'Luong', age:5},

// ];

// const result = doctors.find(function(doctor){
//     return doctor.age > 3;
//     console.log(result); 
// });

//Iterating in Array

// const numbers = [1,2,3,4,5];
// for(let index = 0;index <= numbers.length;index++){
//     console.log(index);
// };

// for(let num of numbers){
//     console.log(num);
// };

// numbers.forEach(function(num, index){
//     console.log(num,index)
// });


// SORT REVERSE

// const numbers = [4,6,7,3,1,8,5,6,2];
// numbers.sort();
// numbers.reverse();  
// console.log(numbers)

// let doctors =[
//     {name:'Dat',age: 24},
//     {name:'Kiet',age: 31},
// ];
// doctors.sort(function(d1,d2){
//     if(d1.age > d2.age) return +1;
//     if(d1.age === d2.age) return 0;
//     if(d1.age <d2.age) return -1;
// }).reverse();
// console.log(doctors);


// Array Method - every , some
// const numbers  = [8,2,1,5,6,3,4,0,9];
// const data = numbers.every(function(num){
//     return num >= 0;
// })
// console.log(data);


//CONCAT
// const num1 = [1,2,3];
// const num2 = [4,5,6,7];
// const num =num1.concat(num2);
// console.log(num);

// const numbers = [1,2,3,4,5,6,7,8,9];
// const sliceArray = numbers.slice(3,6);
// console.log(sliceArray);



//Spead Operator
// const numbers = [1,2,3,4,5,6,7,8,9];
// console.log(...numbers);
// console.log(numbers[0],numbers[1]);
// console.log(numbers);

// const coppiedArray = [...numbers];
// console.log(coppiedArray);

// const num1 = [1,2,3];
// const num2 = [4,5,6];
// const num = [...num1, ...num2];
// console.log(num);



//Joing Array

// let numbers = [1,2,3,4];
// let joinArray = numbers.join(' ');
// console.log(joinArray);


// let message  ='Hi My name is Dat';
// const arrayMessage = message.split(' ');
// console.log(arrayMessage.join('_'));



//ES6 Feature : Map

// let numbers = [1,2,3,4];
// let mulByTwo = [];

// for(let num of numbers){
//     mulByTwo.push(num * 2);
// }
// console.log(mulByTwo);

// let numbers = [1,2,3,4,5];
// const mulByTwo  = numbers.map((num) => num * 2);
// console.log(mulByTwo);


// let doctor = [
//     {name: 'Dat' , age: 25},
//     {name: 'Huy' , age: 24},
//     {name: 'Tuong' , age: 23},
//     {name: 'Chicken' , age: 22},
// ]
// const docName = doctor.map((doc) => doc.name);
// const docAge = doctor.map((doc) => doc.age);
// console.log(docName,docAge); 



//ES6 Feature : Filtering in Array

//let numbers = [1,2,3,4,5,6];
//let onlyOddNumbers = [];

// for(let num of numbers){
//     if(num % 2 === 1){
//         onlyOddNumbers.push(num);
//     }
// }
// console.log(onlyOddNumbers);

// const onlyOddNumbers = numbers.filter((num) => num % 2 === 1);
// console.log(onlyOddNumbers);



//ES6 Feature : Array Method : Reduce

let numbers =[10,20,30];
// s
// for(let num of numbers){
//     sum =  sum + num;
// }
// console.log(sum);

// const ReduceSum = numbers.reduce(function(sum,num){
//     return sum + num;
// },sum = 0);
// console.log(ReduceSum);

// const ReduceSum = numbers.reduce((sum,num) => sum + num);
// console.log(ReduceSum);
