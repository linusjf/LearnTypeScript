#!/usr/bin/env ts-node
const names = [ "Alice", "Bob", "Eve" ];

// Contextual typing for function - parameter s inferred to have type string
names.forEach(function(s) { console.log(s.toUpperCase()); });

// Contextual typing also applies to arrow functions
names.forEach((s) => { console.log(s.toUpperCase()); });
