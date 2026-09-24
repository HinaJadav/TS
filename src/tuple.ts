// disAdv of array 
const arr1: (string | number)[] = [];
// Problem: here we can add string or number as values but we can restrict at wich positions which data type value can be added
// Solution: tuple in ts
let user: [string, number] = ["Hina", 22];  
// user = [22, "Hina"];                        
// user = ["Hina"];                         

// note : Array vs tuple: number[] can have any length, with every item the same type. [string, number] has exactly 2 items, with a specific type at each position.

// unwanted behaviour of tuple 
// tuple at the end array of values so --> it supports push() shift() like array operation 
// we don't have any solution for this 
