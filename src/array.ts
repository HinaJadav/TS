// 2 ways to declare array with type in typescript

let arr1: number[] = [1, 2, 3, 4, 5];

let arr2: Array<number> = [1, 2, 3, 4, 5];
console.log("type of arr2: " + typeof arr2);  // object 

// if we not assign any value or type and just declare array then it will be of type never
let arr = [];      // evolving any[]
arr.push(1);       // now number[]
arr.push("x");     // now (string | number)[] --> no safety at all


// but if we not define type but assign value then it will be of type of value assigned (infference type)
let arr4 = [1, 2, 3, 4, 5];
console.log("type of arr4: " + typeof arr4);  // object 


// Why does typeof on a number[] print "object"?
// TS types are erased at compile time, and JS typeof has no "array" category. Use Array.isArray() instead.

// What are the two uses of typeof in TS?
// In value position, it's the JS runtime operator and returns a string. In type position, it extracts the variable's TS type.

// Note: since types are erased, you can never check a TS type like if (x is number[]) at runtime. You can only check runtime values, using Array.isArray, typeof x === "string", instanceof and similar.