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
function minimumLength<Type extends {length : number}>(obj: Type,
                                                       minimum: number): Type|{
  length: number
}
{
  if (obj.length >= minimum) {
    return obj;
  } else {
    return {length : minimum};
  }
}

console.log(minimumLength<String>("hello", 10));
console.log(minimumLength<String>("hello", 3));

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

const arr = combine<string|number>([ 1, 2, 3 ], [ "hello" ]);
console.log(arr);

function firstElement1<Type>(arr: Type[]) { return arr[0]; }

function firstElement2<Type extends any[]>(arr: Type) { return arr[0]; }

// a: number (good)
const a = firstElement1([ 1, 2, 3 ]);
// b: any (bad)
const b = firstElement2([ 1, 2, 3 ]);

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends(arg: Type) => boolean>(arr: Type[],
                                                           func: Func): Type[] {
  return arr.filter(func);
}

function geet<Str extends string>(s: Str) { console.log("Hello, " + s); }
geet("world");

function get(s: string) { console.log("Hello, " + s); }

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach([ 1, 2, 3 ], (a) => console.log(a));
myForEach([ 1, 2, 3 ], (a, i) => console.log(a, i));
myForEach([ 1, 2, 3 ], (a, i) => { console.log(i?.toFixed()); });

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);

function fnn(x: boolean): void;
function fnn(x: boolean) {}
function fna(x: string): string;
function fna(x: string|number) { return "oops"; }

function len(s: string): number;
function len(arr: any[]): number;
function len(arr: any[]|string): number;
function len(x: any) { return x.length; }

len("");    // OK
len([ 0 ]); // OK
len(Math.random() > 0.5 ? "hello" : [ 0 ]);

const user = {
  id : 123,

  admin : false,
  becomeAdmin : function() { this.admin = true; },
};

interface User {
  id: number, admin: boolean
}
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

function getDB(): DB { return <DB>{}; }
const db = getDB();
const admins = db.filterUsers(function(this: User) { return this.admin; });

// The inferred return type is void
function noop() { return; }

function f1(a: any) {
  a.b(); // OK
}

function safeParse(s: string): unknown { return JSON.parse(s); }

// Need to be careful with 'obj'!
const someRandomString = "adbghthryy";
const objs = safeParse(someRandomString);

function fail(msg: string): never { throw new Error(msg); }

function dosm(x: string|number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}

function doing(f: Function) { return f(1, 2, 3); }

function multiply(n: number, ...m: number[]) { return m.map((x) => n * x); }
// 'res' gets value [10, 20, 30, 40]
const res = multiply(10, 1, 2, 3, 4);

const arr1 = [ 1, 2, 3 ];
const arr2 = [ 4, 5, 6 ];
arr1.push(...arr2);

// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
const args = [ 8, 5 ] as const;
const angle = Math.atan2(...args);

function sum({a, b, c}: {a: number, b: number, c: number}) {
  console.log(a + b + c);
}
sum({a : 10, b : 3, c : 9});

// Same as prior example
type ABC = {
  a: number; b : number; c : number
};
function sumup({a, b, c}: ABC) { console.log(a + b + c); }
