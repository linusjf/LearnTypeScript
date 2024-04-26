#!/usr/bin/env -S ts-node
console.log("Hello, world!");
// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date, "!"));
}
greet("Brendan", new Date());
