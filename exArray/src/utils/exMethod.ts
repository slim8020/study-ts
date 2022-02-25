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