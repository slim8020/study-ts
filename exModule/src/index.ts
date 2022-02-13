import {IPerson, makePerson} from './utils/exModule'

const testMakePerson = (): void => {
    let jane: IPerson = makePerson('Jane');
    let jack: IPerson = makePerson('Jack');

    console.log(jane, jack);
}

testMakePerson();