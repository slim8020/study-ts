// export function exFunc(){
//     console.log(`Hello`);
// }

export const init = (callback: () => void): void =>{
    console.log(`default initialization finished.`);
    callback();
    console.log(`all initialization finished.`);
}

const add1 = ( a: number, b:number ): number => a+b;

function add (a:number, b: number) : number {
    return a+b;
}

//const highorderAdd = ( a: number, b: number ) : number => (a1: number = a, b1: number = b ):number => a1+b1;