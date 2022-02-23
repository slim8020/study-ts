import * as ex from './utils/exArrary'

ex.print();

// 배열 쪼개기
console.log(ex.split('hello'));
console.log(ex.split('나는 알고 싶다. 무엇이든. 하지만 알 수가 없다.', '.'));
// 배열 합치기
console.log(ex.join(['h','e','l','l','o']));
console.log(ex.join(['stay hungry','stay foolish'],','));
console.log(ex.getNumItem([1,10,43,23,22],2));

// index
let array: number[] = [3,21,453,23,1];
let [one,two,three, ...rest] = array;
console.log(one, two, three, rest);

// for.. in
let fruits = ['Apple', 'Orange', 'Melon'];
for(let i in fruits){
    console.log(`${i}: ${fruits[i]}`);
}

let mj:any = {name: 'mj', age: 43};
for(let prop in mj){
    console.log(`${prop}:${mj[prop]}`);
}

console.log(Object.keys(mj));
console.log(Object.values(mj));

for(let name of fruits){
    console.log(name);
}

let numArr:number[] = [1,2,3];
let strArr:string[] = ['Hello', 'World'];

type IPerson = {name:string, age?:number};
let personArr:IPerson[] = [{name: 'mj'}, {name:'mj', age:32}];

console.log( ex.arrayLength(numArr), 
ex.arrayLength(strArr), 
ex.arrayLength(personArr), 
ex.isEmpty([]),
ex.isEmpty([1]));

const identity = <T>(n:T):T => n;
console.log(identity<boolean>(true), identity<number>(3), identity(5));

console.log(ex.range(25, 30+7));

let numbers: number[] = ex.range(1, 7);
let result = ex.fold(numbers, (result, value) => result + value, 0);
console.log(result);




