// import * as ex from './utils/exFunc';
import * as func from './utils/exFunc';


// ex.exFunc();

func.init(()=>console.log(`custom initialization finished`));

// Destructuring
let jack: func.IPerson = {name:'Jack', age: 12};
let {name, age} = jack;

let address = {
    country : 'Korea',
    city: 'Seoul',
    address1: 'Gangnam-gu',
    address2: 'Sinsa-dong 123-456',
    address3: '789 streate, 2Floor ABC building'
}

const {country, city, ...detail} = address;


console.log(detail);
console.log(detail.address1)

console.log(func.makePerson('Jack'));
console.log(func.makePerson('Jane', 33));

console.log(jack.name, jack.age);
console.log(name, age);
//console.log(func.highorderAdd(1,2));