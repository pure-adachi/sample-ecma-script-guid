// ES2018

const name = ["taro", "ichiro", "hanako"];
const spread_name = [...name, "jiro"];

console.log(spread_name);

const obj1 = {
  a: 1,
  b: {
    c: 2,
  },
};
const obj2 = {
  c: 3,
};

console.log({ ...obj1, ...obj2 });

const {
  a,
  b: { c },
} = obj1;
console.log(a, c);
