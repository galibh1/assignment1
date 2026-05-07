
1. Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.


One of the biggest strengths of TypeScript is its ability to catch errors before code runs. Its static type system helps developers write safer and more predictable applications.
any keyword bypasses this protection this why it is safety hole. any removes nearly benifits of typescript, it no autocomplete reliability, no compile time safety, and incresed 
The unknown type is the safer alternative to any. It can store any value, but TypeScript does not allow unsafe operations until the type is verified.
Examples of Any:

let value: any = "Hello TypeScript";
console.log(value.toUpperCase());
console.log(value.nonExistentMethod());


The unknown type also accepts any value, but unlike any, it does not allow unsafe operations automatically. It must first verify the type before using it.

Example of unknown:
let value: unknown = "Hello";

console.log(value.toUpperCase());

Type narrowing is changing the type of a variable within a conditional block based on runtime checks. This is achieved through techniques like typeof guards, instance checks, or property existence checks, enabling more precise typing and avoiding type errors in later code execution.


