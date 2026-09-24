// ts class syntax is much similar to js class
// diff b/w js and ts class : all properties used in ts class must me declare in class before constructor

class User {
    name: string
    private age: number
    // not declare provate veriable using # bcz by default tsconfig supports ES5 and # supported from ES2015 so for use it we need to manually update tsconfig.json target to ES2015 or above

    //     "compilerOptions": {
    //     "target": "ES2022",
    //     "lib": ["ES2022"]
    //   }

    // why ts supports es5 not es6?
    // TypeScript was released in 2012, when ES6 didn't exist yet. ES6 (ES2015) came out in 2015. Back then, browsers like Internet Explorer only understood ES5, so ES5 was the only safe default output.

    // NOte : CJS uses require, loads synchronously at runtime and is dynamic. ESM uses import/export, is analyzed statically before running, supports top-level await and tree-shaking, and is the official standard.

    static count: number = 0
    readonly id: number
    protected email: string = "" // protected veriable can be accessed in class and it's child class but not outside of class

    // Note: private is accessible only in the declaring class. protected is accessible in the declaring class and its subclasses. Neither can be accessed from an instance outside the class.

    // getters and setters : used to get and set private veriable value
    getAge(): number {
        return this.age
    }

    setAge(age: number): void {
        if (age < 0) {
            throw new Error("Age cannot be negative")
        }   
    }

    constructor(name: string, age: number, id: number) {
        this.name = name
        this.age = age
        this.id = id
        User.count++
    }
}


// production format for class 
class User1 {
    constructor(public name: string, private age: number, readonly id: number) {}
}
