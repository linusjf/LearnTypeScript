#!/usr/bin/env ts-node
function printId(id: number|string) { console.log("Your ID is: " + id); }
// OK
printId(101);
// OK
printId("202");

function printI(id: number|string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

function welcomePeople(x: string[]|string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

welcomePeople('James');
welcomePeople([ "James", "John", "Jacob" ]);

// Return type is inferred as number[] | string
function getFirstThree(x: number[]|string) { return x.slice(0, 3); }
console.log(getFirstThree("James"));
console.log(getFirstThree([ 0, 1, 2, 3, 4 ]));
