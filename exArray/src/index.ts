import * as ex from './utils/exArrary';
import {calculator, A, deepcopy, shadowcopy, spreadDeep} from './utils/exMethod';
import { factorial, oldFactorial } from './utils/exFactorial';
import { doSomething } from './utils/exTupple';

// ex.print();

// // 배열 쪼개기
// console.log(ex.split('hello'));
// console.log(ex.split('나는 알고 싶다. 무엇이든. 하지만 알 수가 없다.', '.'));
// // 배열 합치기
// console.log(ex.join(['h','e','l','l','o']));
// console.log(ex.join(['stay hungry','stay foolish'],','));
// console.log(ex.getNumItem([1,10,43,23,22],2));

// // index
// let array: number[] = [3,21,453,23,1];
// let [one,two,three, ...rest] = array;
// console.log(one, two, three, rest);

// // for.. in
// let fruits = ['Apple', 'Orange', 'Melon'];
// for(let i in fruits){
//     console.log(`${i}: ${fruits[i]}`);
// }

// let mj:any = {name: 'mj', age: 43};
// for(let prop in mj){
//     console.log(`${prop}:${mj[prop]}`);
// }

// console.log(Object.keys(mj));
// console.log(Object.values(mj));

// for(let name of fruits){
//     console.log(name);
// }

// let numArr:number[] = [1,2,3];
// let strArr:string[] = ['Hello', 'World'];

// type IPerson = {name:string, age?:number};
// let personArr:IPerson[] = [{name: 'mj'}, {name:'mj', age:32}];

// console.log( ex.arrayLength(numArr), 
// ex.arrayLength(strArr), 
// ex.arrayLength(personArr), 
// ex.isEmpty([]),
// ex.isEmpty([1]));

// const identity = <T>(n:T):T => n;
// console.log(identity<boolean>(true), identity<number>(3), identity(5));

// console.log(ex.range(25, 30+7));


// let numbers: number[] = ex.range(1, 100+1);
// let result = ex.fold(numbers, (result, value) => result + value, 0);
// console.log(result);

// const isOdd = (n:number):boolean => n % 2 != 0;
// const isEven = (n:number):boolean => n % 2 === 0;


// let result1 = ex.fold(ex.filter(numbers, isOdd),(result, value)=>result+value, 0);
// let result2 = ex.fold(ex.filter(numbers, isEven),(result, value)=> result+value, 0);
// let result3 = ex.fold(ex.map(numbers,value => value * value),(result, value)=> result + value, 0);

// console.log(`홀수 합: ${result1}`);
// console.log(`짝수 합: ${result2}`);
// console.log(`2제곱 합: ${result3}`);

// const arr:number[] = ex.range(1, 10+1);

// let odds: number[] = arr.filter((value) => value % 2 != 0);

// console.log(odds);


// method chain
// let calc = new calculator;
// let result = calc.add(1).add(2).multiply(3).multiply(4).value;

// console.log(result)

// console.log(A.abc, A.func(3));

const multiply = (result: number, val: number) => result * val;

let numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
let tempResult = numbers.filter(val => val % 2 !=0).map(val => val * val).reduce(multiply,1);
let result = Math.round(Math.sqrt(tempResult));
console.log(result);

console.log(`new version : ${factorial(5)}`);
console.log(`old version : ${oldFactorial(5)}`);

deepcopy(1);

shadowcopy([1,2,3]);

spreadDeep([1,2,3]);

let originalArray = [6,2,4,1,5,9];
const distArray = ex.pureSort(originalArray);
console.log(originalArray, distArray);

const [res, errorMessage] = doSomething();

console.log(res, errorMessage);
