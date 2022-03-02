export class calculator{
    constructor(public value:number = 0){};

    add(value:number){

        this.value += value;
        console.log(`+ ${value}`);
        return this;
    }

    multiply(value: number){
        this.value *= value;
        console.log(`* ${value}`);
        return this;
    }
}

export class A{
    static abc:number = 3.14;

    static func(val:number){
        return this.abc * val;
    }
}

export function forcePure(array: readonly number[]){
   // array[1] = 0;
   // array is immutable (const, readonly)
   return array;
}

// deep copy
// 별개로 동작함
export function deepcopy(src:number){
    let copied : number = src;

    copied +=2;

    console.log(src, copied);

}

// shadow copy
// original 에도 영향을 줌
export function shadowcopy(src:number[]){
    const shadowArray = src;
    shadowArray[0] = 100;
    console.log(src, shadowArray);
}

// spread operator deep copy

export function spreadDeep(src: number[]){
    const deepCopied = [...src];
    deepCopied[0] = 100;
    console.log(src, deepCopied);
}