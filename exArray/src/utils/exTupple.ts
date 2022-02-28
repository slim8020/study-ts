type ResultType = [boolean, string];

export const doSomething = () : ResultType =>{
    try{
        throw new Error('Some error occurs...');
    }catch(e:any){
        return [false, e.message];
    }
}