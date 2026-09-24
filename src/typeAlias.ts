type myString = string;

const name:myString = "navneet";
console.log(name); 
console.log(typeof name);

type myUnion = string | number | boolean;

const name1:myUnion = "navneet";
const name2:myUnion = 123;
const name3:myUnion = true;

console.log(name1, name2, name3);
console.log(typeof name1, typeof name2, typeof name3);

// using type alias we can create our own custom type
// useful for datatype like enum and union which containd big values and writting same again and again is not good practice so we can create type alias for that and use it in our code


//adv
// Reusable: define once, use everywhere.
// Can name any type, including unions, tuples, functions and generics. An interface can only describe objects.
// Works with utility types like `Omit`, `Partial` and `Pick`.
// Improves readability.

//disAdv
// No declaration merging, so the same name can't be declared twice.
// `&` conflicts silently become `never`, where `extends` would give a clear error.
// A class can't `implements` a union alias.
// Aliasing a primitive (`type UserId = string`) adds no real safety.
// Doesn't exist at runtime, so it can't be checked with `typeof` or `instanceof`.