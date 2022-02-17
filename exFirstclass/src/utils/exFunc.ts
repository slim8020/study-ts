// export function exFunc(){
//     console.log(`Hello`);
// }

export interface IPerson{
    name: string;
    age: number;
}

export const init = (callback: () => void): void =>{
    console.log(`default initialization finished.`);
    callback();
    console.log(`all initialization finished.`);
}


const add1 = ( a: number, b:number ): number => a+b;

function add (a:number, b: number) : number {
    return a+b;
}

// default parameter (매개변수 기본값)
export type Person = { name: string, age: number };

// export const makePerson = (name: string, age: number = 10): Person =>{
//     const person = {name, age}; // 매개변수 이름이 같으면 타입 지정 생략 가능
//     return person;
// }

// 간결하게 정리
export const makePerson = (name: string, age: number = 10): Person =>({name, age});


// high-order function
//export const highorderAdd = ( a: number, b: number ) => ((a:number,b:number=10)=>(console.log(a+b)));