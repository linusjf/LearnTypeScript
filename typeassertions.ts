#!/usr/bin/env ts-node

const x = "hello" as any as number;

let changingString = "Hello World";
changingString = "Olá Mundo";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system

const constantString = "Hello World";

let y: "hello" = "hello";
// OK

function printText(s: string, alignment: "left"|"right"|"center") {
  console.log(`${s}, ${alignment}`);
}
printText("Hello, world", "left");

function compare(a: string, b: string): -1|0|1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

interface Options {
  width: number;
}
function configure(x: Options|"auto") {
  // ...
}
configure({width : 100});
configure("auto");

const ob = {
  counter : 0
};
if (ob.counter === 0) {
  ob.counter = 1;
}

declare function handleRequest(url: string, method: "GET"|"POST"): void;

type METHOD = "GET"|"POST";
// Change 1:
const req: Record<string, METHOD|string> = {
  url : "https://example.com",
  method : "POST"
};
handleRequest(req.url, req.method as METHOD);

// Change 2:
const req2 = {
  url : "https://example.com",
  method : "GET" as "GET"
};
// Change 3:
const req3 = {
  url : "https://example.com",
  method : "POST"
};
handleRequest(req3.url, req3.method as "POST");

// Change 4:
const req4 = {
  url : "https://example.com",
  method : "GET"
} as const;
handleRequest(req4.url, req4.method);

function doSomething(x: string|null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

function liveDangerously(x?: number|null) {
  // No error
  console.log(x!.toFixed());
}

// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);

// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;

const firstName = Symbol("name");
const secondName = Symbol("name");
