import {IPerson, makePerson} from './utils/exModule';
import { IVariable, printVariable } from './utils/exVariable';

const testVariable = (): void => {
    printVariable(1,true,"hello",{string:"h", number:1});
}

const testMakePerson = (): void => {
    let jane: IPerson = makePerson('Jane');
    let jack: IPerson = makePerson('Jack');

    console.log(jane, jack);
}

testVariable();

testMakePerson();