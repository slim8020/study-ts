import {IPerson, makePerson} from './utils/exModule'

const testMakePerson = (): void => {
    let jane: IPerson = makePerson('Jane');
    let jack: IPerson = makePerson('Jack');

    n = "abc";

    console.log(jane, jack);
    console.log(n);
}

testMakePerson();