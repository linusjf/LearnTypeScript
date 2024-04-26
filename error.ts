#!/usr/bin/env ts-node
let obj: any = {x : 0};
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
try {
  obj.foo();
} catch (e: any) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);              // "Hello"
  console.log(e.name);                 // "TypeError"
}
try {
  obj();
} catch (e: any) {
  console.log(e instanceof TypeError); // true
  console.log(e.message);              // "Hello"
  console.log(e.name);                 // "TypeError"
}
obj.bar = 100;
obj = "hello";
const n: number = obj;
