// ES2019

const MyData = [
  {
    name: "菅原さん",
    favorite: ["大豆", "プロテイン", "つけ麺"],
  },
  {
    name: "山根さん",
    favorite: ["プロテイン", "ビタミンC"],
  },
  {
    name: "鹿野さん",
    favorite: ["ラーメン", "つけ麺", "軟骨の唐揚げ"],
  },
];

MyData.map((data) => data.favorite).flat();
MyData.flatMap((data) => data.favorite);

Object.fromEntries([
  ["id", 16],
  ["name", "鈴木"],
]);

Symbol("矢部").description;
