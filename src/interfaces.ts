// interfaces = lose form of class
// check types at compile times and erase it runtime 

interface product {
    name: string;
    price: number;
    category?: string; // optional param
    readonly id: number; // readonly param
}

const p1: product = {
    name: "product1",
    price: 100,
    id: 1
}

console.log(p1.name, p1.price, p1.id);


// uses 
// 1) inheritance (usinf extands keyword)

interface foodItem extends product {
    calories: number;
}

// Declaration merging: (the big production use) 
// EX: If you declare the same interface name twice, the two are merged. That's how you add req.user to Express after JWT auth
// above thing only works with interface not with type

// Interface vs type?
// An interface supports merging and gives clearer errors on extends. A type supports unions, tuples and utility types. For objects, pick one and stay consistent.
// For objects, both work,

// NOTE : The interface tells you about the problem where you made the mistake. The type alias hides it until you try to use it.

interface A { id: string }
// interface B extends A { id: number }   // error right here: id types conflict

type C = { id: string }
type D = C & { id: number }            // no error here…
// const d: D = { id: 1 };                // …error only here, because id became never