#!/usr/bin/env ts-node
// The parameter's type annotation is an object type
function printCoordPt(pt: {x: number; y : number}) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoordPt({x : 3, y : 7});
