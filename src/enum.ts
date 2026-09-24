// enum: provided limmited and fixed number of choices for value
enum status {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED"
}

let s: status = status.PENDING;
console.log("status: " + s);  // PENDING

// PRODUCTION USE CASE:
// enum HttpStatus { OK = 200, NotFound = 404 }
// res.status(HttpStatus.NotFound).json({ error: "Not found" });


// Enum vs union of string literals?
// An enum is a runtime object you can loop over, and you must reference Enum.Member. A union is type-only, has zero runtime cost, and accepts plain strings.

// What is a const enum?
// Its values are inlined at compile time and no object is generated, so you can't loop over it at runtime.

// Why can't you loop over a const enum?
// It's erased at compile time. Its values are pasted into every place it's used, so no object exists at runtime.