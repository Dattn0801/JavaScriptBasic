// ES6 Feature: Array and Object Destructuring

// function greeting(user){
//     const {name,age,address} = user;
//     const {long,lat}= address;
//     console.log(`Hello ${name} has age ${age} from ${long}, ${lat}`);
// }

// const user ={
//     name:'Dat',
//     age: 40,
//     address:{
//         long: 343.343,
//         lat: 2323.23,
//     },
// };

// greeting(user);

// let [a,b,c,d,e,f] = [1,2,3,4,5,6];
// console.log(a,b,c,d,e,f);



// ES6 Data Structure :Set

// let set = new Set();

// 9set.add(100);
// set.add(200);
// set.add(300);
// set.add(300);
// console.log(set);
// console.log(set.size);

// set.delete(200);
// console.log(set);
// console.log(set.size);

// for(let el of set){
//     console.log(el);
// }

// set.forEach((el) =>console.log(el)); 
// set.clear();
// console.log(set);


// ES6 Data Structure :Map

// let map = new Map();
// map.set('Mango','Mother');
// map.set('Banana','All');
// map.set('Score',100);
// console.log(map);

// for(let el of map){
//     console.log(el);
// }

// console.log(map.has('Mango'));
// map.delete('Banana');
// console.log(map);
// console.log(map.values());
// console.log(map.keys());


//Weak Set, Weak map

// const ws = new WeakSet();
// const object1 = {};
// const object2 = {};
// ws.add(object1);
// ws.add(object2);

// console.log(ws);

// console.log(ws.has(object1));
// console.log(ws.has(object2));

// ws.delete(object1);
// console.log(ws.has(object1));

// const wm = new WeakMap();
// wm.set(object1,123456);
// console.log(wm.has(object1)); 
// console.log(wm.get(object1));

// wm.delete(object1);
// console.log(wm.has(object1));



//Module
 
// import addnumber from './main.js';

// console.log(addnumber(10,30));



//Pad start, pad end
let minute = '4';
let hour = '8';
console.log(minute.padStart(4,'0'));
console.log(hour.padEnd(3,'0'));