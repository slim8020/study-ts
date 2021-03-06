export function print(){
    let numbers = [ 1,2,3 ];
    let strings = ['Hello', 'World'];   //Array Class 의 인스턴스
    let obj = {name: 'Jack', age: 32};
    
    let numArray: number[] = [1,2,3];
    let strArray: string[] = ['Hello','World'];

    type IPerson = {name: string, age?: number};
    let personArray:IPerson[] = [{name:'Jack'}, {name: 'Jane', age:32}];


    console.log(Array.isArray(numbers), Array.isArray(strings), Array.isArray(obj));
    console.log(numArray, strArray, personArray);
    console.log(personArray[0].name);
}

export const split = (str:string, delim:string = ''):string[] => str.split(delim);

export const join = (strArray: string[], delim: string=''):string =>strArray.join(delim);

export const getNumItem = (numArray: number[], index: number):number => {return numArray[index];}

export const arrayLength = <T>(array:T[]):number => array.length;

export const isEmpty = <T>(array:T[]):boolean => arrayLength<T>(array) === 0;

export const range = (from: number, to:number):number[] =>
    from < to ? [from, ...range(from+1,to)] : [];

export const fold = <T>(array: T[], callback: (result: T, val: T) => T, initValue:T) =>{
    let result: T = initValue;

    for( let i in array )
    {
        const value = array[i];
        result = callback(result, value);
    }
    // for(let i=0; i< array.length; ++i){
    //     const value = array[i];
    //     result = callback(result, value);
    // }
    return result;
}

export const filter = <T>(array: T[], callback: (value:T, index?: number) => boolean) : T[] => {
    let result: T[] =[];
    for(let index:number =0; index < array.length; ++index){
        const value = array[index];
        if(callback(value, index))
            result = [...result, value];
    }
    return result;
}

export const map = <T, Q>(array: T[], callback: (value: T, index?: number) => Q): Q[] =>{
    let result: Q[] = [];
    for(let index = 0; index < array.length; ++index){
        const value = array[index];
        result = [...result, callback(value, index)];
    }

    return result;
}

export const pureSort = <T>(array: readonly T[]):T[] =>{
    let deepCopied = [...array];
    return deepCopied.sort();
}