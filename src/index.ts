const name: string = "Hina";
console.log("name: "+ name);

// package we install for suppirt TS at init level

// typescript : official TypeScript compiler (tsc)
// Compiles .ts files into plain .js files that Node can run
// node itself can't understand ts so --? typescript package convert ts into js so that node able to execute it 

// npx tsc --init      # creates tsconfig.json
// npx tsc             # compiles everything into JS (e.g. into ./dist)
// npx tsc --noEmit    # only type-check, produce no files

// const name2: number = "nahii";
// console.log(name2);
// ex: uncomment above 2 lines and 
// run : npx tsx --noEmit --> it will show except code error line and line number in compiler 


// tsx : it is runner --> ecexute TS directly w/o type check
// It only removes the types and runs the code
// npx tsx watch src/index.ts    # re-run on every file save
// Type checking is done by tsc --noEmit

// @types/node : set of type defination(.d.ts files) for nodeJs
// teaches TypeScript about Node's built-in APIs like buffers, files, process

