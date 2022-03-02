import {range} from './exArrary';

// 선언형 (declarative)
export const factorial = (num:number):number => {
    return range(1, num+1).reduce((result:number, value:number)=> result * value, 1);
}

// 명령형 (imperative)
export function oldFactorial(num:number):number{

    let result:number = 1;

    for(let i=1; i<=num; ++i){
        result *= i;
    }

    return result;
}