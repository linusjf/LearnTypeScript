#!/usr/bin/env ts-node
interface Point2D {
  x: number;
  y: number;
}

function printCoord2D(pt: Point2D) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord2D({x : 100, y : 100});
