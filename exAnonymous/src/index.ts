import * as ex from "./utils/exAnonymous";
const math = require("./utils/maths");

let ai:{
    name: string;
    age: number;
    etc?: boolean;
} = { name: 'Jack', age: 32, etc:true }

let ai2 = { name: 'Jane', age: math.pi, etc:false}

console.log(`${math.absolute(-5)}`);

ex.printMe(ai);
ex.printMe(ai2);


