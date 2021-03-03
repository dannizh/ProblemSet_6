import * as moment from "moment";
import * as Snap from "snapsvg-cjs";
// moments.js
const birthday = document.querySelector("#birthday");
const newElement = document.createElement("span");
const time = moment("20211111", "YYYYMMDD").fromNow();
newElement.textContent = time;
birthday.append(newElement);
console.log("Using moments.js");

// snap.svg
var s = Snap("#svgout");
var bigC = s.circle(100,100,85).attr({ stroke: 'silver', 'strokeWidth': 20, fill: 'silver' });
var r = s.rect(50,50,50,50,10,10).attr({ stroke: '#123456', 'strokeWidth': 10, fill: '#f9c74f' });
var c = s.circle(50,25,25).attr({ stroke: '#123456', 'strokeWidth': 10, fill: '#277da1' });
var g = s.group(r,c);
g.attr({ mask: bigC });
g.animate({ transform: 'r 100,145,150' }, 1000, mina.bounce);
console.log("Using Snap.svg");