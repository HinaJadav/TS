const arr1: number[] = [];
// only number can be added to arr1

const arr2: string[] = [];
// only string can be added to arr2

const arr3: string[] | number[] = [];
// only all string or number can be added to arr3 but not both at same time

const arr4: (string | number)[] = [];
// both string and number can be added to arr4


// uses 
// 1) fixed set of value 

type category = "food" | "clothing" | "electronics";
type user = "admin" | "user" | "guest";

let cat1: category = "food";
let user1: user = "admin";

// let cat2: category = "outdoor"; // error : Type '"outdoor"' is not assignable to type 'category'.
// let user2: user = "superuser"; // error : Type '"superuser"' is not assignable to type 'user'.

