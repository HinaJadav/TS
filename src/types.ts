// basic
let name: string = "user1";
let mobile_number: number = 4569878526; // init + decimal
let isWorking: boolean = true;


// array
let itemsNo: number[] = [1,2,34,55,56,90];
//truple
let address: [string, number] = ["junagadh", 362001]; // fied input order based on data types order 
// let address1: [string, number] = [362001, "junagadh]; --> it will gives ERROR

// object
let expence: {
    title: string;
    amount: number;
    desc?: string; // "?" : make property optional in object
} = {
    title: "tea",
    amount: 10
}

// union --> same veriable supports multiple datatypes which we mention at time of initilization of veriable
let userId: number | string = 101;
userId = "user123";
// both works

// literal
let status: "mount" | "update" | "unmount" = "mount" // means status take value between only mount/unmount/update

// any & unknow --> both can hold any value
// diff
// any : TS stop type checking also we can do anything with 
// unknown : TS can't allow to use it before type check 

let var1 : any = {
    name: "nahi",
    userId: 2112
}


console.log(var1.name);
var1.name = "hina";
console.log(var1.name);

let var2: unknown = {
    name: "nk",
    userId:2810
}

// console.log(var2.name); // ERROR 

if(typeof var2 === "object" && var2 != null && "name" in var2) {
    console.log(var2.name);
}

// void : function finishes but w/o a useful return value (means return nothing)
// never : function never finishes, bcz it always either throws or loops 
