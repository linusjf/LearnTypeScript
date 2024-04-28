#!/usr/bin/env ts-node
function greeter(fn: (a: string) => void) { fn("Hello, World"); }

function printToConsole(s: string) { console.log(s); }

greeter(printToConsole);

type GreetFunction = (a: string) => void;
function sayHello(fn: GreetFunction) { fn("Hello, World!"); }

sayHello(printToConsole);

type DescribableFunction = {
  description: string; (someArg: number) : boolean;
};
function doThing(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) { return someArg > 3; }
myFunc.description = "default description";

doThing(myFunc);

type SomeConstructor = {
  new (s: string): String;
};
function fn(ctor: SomeConstructor) { return new ctor("hello"); }

interface CallOrConstruct {
  (n?: number): string;
  new(s: string): Date;
}

function firstElement<Type>(arr: Type[]): Type|undefined { return arr[0]; }

// s is of type 'string'
const s = firstElement([ "a", "b", "c" ]);
// j is of type 'number'
const j = firstElement([ 1, 2, 3 ]);
// u is of type undefined
const u = firstElement([]);

function map<Input, Output>(arr: Input[],
                            func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map([ "1", "2", "3" ], (n) => parseInt(n));
console.log(parsed);

function longest<U extends {length : number}, V extends {length : number}>(
    a: U, b: V) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray is of type 'number[]'
const longerArray = longest([ 1, 2 ], [ 1, 2, 3 ]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
const longer = longest([ 1, 2 ], "bob");
console.log(longer);
// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100);
