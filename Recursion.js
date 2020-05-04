import { categories } from "./index.js";

let makeTree = (categories, parent) => {
  let node = {};
  categories
    .filter(c => c.parent === parent)
    .forEach(c => 
      node[c.id] = makeTree(categories, c.id))

  return node;
};

console.log(
  JSON.stringify(
    makeTree(categories, null), null, 2
  )
);
console.log("--------");
console.log("--------");


let countDownFrom = num => {
  console.log(num);
  if (num === 0) return;
  countDownFrom(num - 1);
};

countDownFrom(10);