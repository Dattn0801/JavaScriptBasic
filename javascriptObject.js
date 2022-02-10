 //Js Object
//  let name  ='Dat';
//  let age = '23';
//  let hobby = 'Gaming';

//  const user = {
//      name : 'Dat',
//      age : 24,
//      hobby : 'Reading', 
//  };
//  console.log(user);
//  console.log(user.name);
//  console.log(user['name']);

//  //add
//  user.email = 'thanhdat08011999@gmail.com';
//  user['phone'] = '0888821939';
//  let key = 'location';
//  user[key] = '7, Truong Thi Kien, Cu Chi, Ho Chi Minh, Viet Nam';
//  user.isMarriage = true;

//  //update
//  user.name  ='Dat dep trai thanh lich vo dich khap vu tru';
//  user.age  += 5;
//  user.isMarriage = false;

//  //delete
//  delete user.name;


//  console.log(user);



//Obj method
// const user = {
//     name : 'Dat',
//     age  : 40, 
//     isMarried : true,
//     friends : ['Duy','Truong'],
//     selectedColor: null,
//     calculateAge : function(){
//         console.log(`Dat is ${this.age} years old`);
//     }
// };
// user.calculateAge(); 





//Traversing obj




// //One way
// for(let key in user){
//     console.log(key , user[key]);
// }

// //Two way

// console.log(Osbject.keys(user),Object.values(user));

// for(let val of Object.values(user)){
//     console.log(val);
// }





//Exercise
// const salaries = {
//     dat : 600,
//     duy : 800,
//     truong : 900,
//     kiet : 1200,

// };

// let sum = 0;
// for(let key in salaries){
//     console.log(key,salaries[key]); 
//     sum  += salaries[key];
// }
// console.log(sum);

// console.log(Object.values(salaries));   
// for(let val of Object.values(salaries)){
//     sum += val;
// }
// console.log(sum);




//Object Destruring
// const user = {
//     name:'Dat',
//     age: 24,
//     favariteBook:{
//         bookName:'The richest man in babylon',
//         bookAuthor:'Geo Samuel Clason',

//     },
// };
// const {name,age,favariteBook} = user;
// const {bookName,bookAuthor} = favariteBook;
// console.log(name);
// console.log(age);  
// console.log(bookName); 
// console.log(bookAuthor);




//Cloning an Object
// const user = {
//     name : 'Dat',
//     age: 24,
// }
// const coppiedUser ={};
// coppiedUser.name = user.name;
// coppiedUser.age = user.age;

// for(let key in user){
//     console.log(key,user[key]);
//     coppiedUser[key]  = user[key]; 
// }

// const coppiedUser =  Object.assign({},user)
// console.log(coppiedUser);



//Math Object

// console.log(Math.PI);
// console.log(Math.random());
// console.log(Math.round(4.9));




// JSON DATA FORMAT

// const user = {
//     name: 'Dat',
//     age: 34,
// };


// const jsonData = JSON.stringify(user);
// console.log(JSON.parse(jsonData));
// console.log(jsonData);



