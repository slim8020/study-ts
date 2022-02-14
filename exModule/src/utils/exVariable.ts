import { type } from "os";

export interface IVariable{
    n: number;
    b: boolean;
    s: string;
    o: object;
    a: any;
}

export default class VariableObj implements IVariable{
    constructor(public n:number, public b:boolean, public s:string, public o:object, public a:any){
        n = 100;
        b = true;
        s = "Hello";
        o = {a:1,b:2};
    }
}

export function printVariable(n: number, b:boolean, s:string, o:object, a:any):void {

    let typeinference = `hello ${n} goodbye ${s}`;
    let u:undefined = undefined;

       console.log(`number : ${n}`);
       console.log('boolean : ' + b);
       console.log('string : ' + s);
       console.log('object : ' + o); 
       console.log(typeinference);
       console.log(u);
};