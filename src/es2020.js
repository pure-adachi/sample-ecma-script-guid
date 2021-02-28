// ES2020

/*
  Optional Chaining
*/

const obj = {
  a: 1,
  b: {
    ba: 21,
    bb: 22,
  },
};
console.log(obj.b?.ba);
console.log(obj.b?.bc);
console.log(obj.c?.ca);
console.log(obj.d?.da?.daa?.daaa);

/*
  Nullish coalescing Operator
*/

const val1 = "val1";
const val2 = "val2";

val1 || "val1";
val2 ?? "val2";
