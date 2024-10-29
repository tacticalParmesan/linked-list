import { LinkedList } from "./linkedList.mjs";

const list = new LinkedList();

list.append("charmander");
list.append("squirtle");
list.append("bulbasaur");

console.log(list.toString());

list.prepend("rhydon");
list.prepend("mew");

console.log(list.toString());

list.insertAt("ditto", 2);
list.removeAt(2)

console.log(list.toString());

console.log("Does the dex contain a Bulbasaur?", list.contains("bulbasaur"));
console.log("At what index is Squirtle?", list.find("squirtle"));
console.log("Who is the first Pokemon?", list.head.data)
