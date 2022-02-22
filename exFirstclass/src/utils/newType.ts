type GreetFunction = (a:string) => void;

function greeter(fn: GreetFunction){
    fn("Hello, World");
}