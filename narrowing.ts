#!/usr/bin/env ts-node

function padLeft(padding: number|string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

console.log(padLeft(5, "Hello"));
console.log(padLeft("Say ", "Hello"));

function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}

console.log(getUsersOnlineMessage(0));
console.log(getUsersOnlineMessage(5));

function printAll(strs: string|string[]|null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

printAll("Hello");
printAll(null);
printAll([ "gh", "ch", "es" ]);
