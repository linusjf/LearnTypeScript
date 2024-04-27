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

function multiplyAll(values: number[]|undefined, factor: number): number[]|
    undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}

console.log(multiplyAll(undefined, 2));
console.log(multiplyAll([ 10 ], 2));
console.log(multiplyAll([ 2, 3 ], 4));

function example(x: string|number, y: string|boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    console.log(x.toUpperCase());
    console.log(y.toLowerCase());
  } else {
    console.log(x);
    console.log(y);
  }
}

example("Hello", "Hello");
example("Hello", false);
example("Hello", "NoHello");
example(10, true);
example(15, "Jello");

function printAllString(strs: string|string[]|null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
printAllString("Hello");
printAllString(null);
printAllString([ "gh", "ch", "es" ]);

interface Container {
  value: number|null|undefined;
}

function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type.
  if (container.value != null) {
    console.log(container.value);
    // Now we can safely multiply 'container.value'.
    container.value *= factor;
  }
}

multiplyValue({value : 5}, 3);
multiplyValue({value : null}, 5);
multiplyValue({value : undefined}, 5);

type Fish = {
  swim: () => void,
  name: string
};
type Bird = {
  fly: () => void,
  name: string
};

function move(animal: Fish|Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

type Human = {
  swim?: () => void;
  fly?: () => void
};

function locomote(animal: Fish|Bird|Human) {
  if ("swim" in animal) {
    animal;
  } else {
    animal;
  }
}

function logValue(x: Date|string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

logValue(new Date());
logValue("Test");

let z = Math.random() < 0.5 ? 10 : "hello world!";
z = 1;
console.log(z);
z = "goodbye!";
console.log(z);

function isFish(pet: Fish|Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getSmallPet(): Fish|Bird {
  return {swim : () => { console.log("Swim"); }, "name" : "sharkey"};
}
// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

const zoo: (Fish|Bird)[] = [ getSmallPet(), getSmallPet(), getSmallPet() ];
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];

// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey")
    return false;
  return isFish(pet);
});

interface Shape {
  kind: "circle"|"square";
  radius?: number;
  sideLength?: number;
}
