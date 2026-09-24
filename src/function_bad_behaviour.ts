
// bad behaviour when data type is object 
function f2(obj : {
    param1: string,
    param2: number
}): void {
    console.log(obj.param1, obj.param2);
}

const obj1 = f2({
    param1: "hello",
    param2: 42
});

const f2obj = {param1: "world", param2: 24, param: "extra"};
// here we pass extra property into obj-param still not getting any error --> BAD BEHAVIOUR
console.log("f2 output1: " + f2(f2obj)); 
console.log("f2 output2: " + f2({...f2obj})); 

// reason of bad behaviour : TS doing structural typing

// concept : structural typing and nominal typing
// nominal typing : 2 types are compatible only if they have the same name (ex: JAVA, C#) 
// EX: nominal typing checks what's label of box
// structural typing : 2 types are compatible if they have the same (shape = properties and methods) (ex: TS, JS)
// EX: structural typing checks what's inside the box

// how structual tying of TS creating bad behaviour :
// what f2 asked ? 
// Give me any object that has at least param1: string and param2: number
// SO It doesn't mean "exactly these two properties." It means "these two must be present."
// What are you passing?
// param1: string, param2: number, param3 is extra, but f2 never asked about it, so TS doesn't care
// The shape matches, so TS accepts it. That "shape matches, accept it" rule is structural typing.

// So why does the direct literal give an error?
// Structural typing alone would allow this too. TS adds one extra safety rule on top: if you write a brand-new object directly in the call, nobody else can ever use that param property, so it's probably a typo. That's the excess property check, and it only applies to fresh literals.


// solution of bad behaviour 
// { ...obj } creates a new object that is a shallow copy of obj
