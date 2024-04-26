#!/usr/bin/env ts-node
function printName(obj: {first: string; last?: string}) {
  console.log(`${obj.first.toUpperCase()}`);
  console.log(`${obj.last?.toUpperCase()}`);
}
// Both OK
printName({first : "Bob"});
printName({first : "Alice", last : "Alisson"});
