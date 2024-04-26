#!/usr/bin/env ts-node
console.log("Hello, world!");

// This is an industrial-grade general-purpose greeter function:
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

greet("Brendan", new Date());

let msg = "hello there!";
console.log(msg);
