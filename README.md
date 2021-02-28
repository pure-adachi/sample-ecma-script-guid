# sample-ecma-script-guid

https://pure-adachi.github.io/sample-ecma-script-guid/

## Install

```sh
$ yarn
```

## Build

```sh
$ yarn build
or
$ yarn build:watch
```

## ECMAScript

- 読み方はエクマスクリプト
- JavaScript の標準規格
- 1997 年に初版(ECMAScript First Edition)が公開
- 1998 年には ES2、1999 年には ES3 が公開

| Edition         | 略称          | 公開日        |
| :-------------- | :------------ | :------------ |
| ECMAScript 1    | ES1           | 1997 年 6 月  |
| ECMAScript 2    | ES2           | 1998 年 6 月  |
| ECMAScript 3    | ES3           | 1999 年 12 月 |
| ECMAScript 4    | ES4           | 破棄          |
| ECMAScript 5    | ES5           | 2009 年 12 月 |
| ECMAScript 5.1  | ES5.1         | 2011 年 6 月  |
| ECMAScript 2015 | ES2015 / ES6  | 2015 年 6 月  |
| ECMAScript 2016 | ES2016 / ES7  | 2016 年 6 月  |
| ECMAScript 2017 | ES2017 / ES8  | 2017 年 6 月  |
| ECMAScript 2018 | ES2018 / ES9  | 2018 年 6 月  |
| ECMAScript 2019 | ES2019 / ES10 | 2019 年 6 月  |
| ECMAScript 2020 | ES2020 / ES11 | 2020 年 6 月  |

## @babel/polyfill

- babel は文法の変換のみ。ブラウザによっては使えない機能はあります。
- 例えば、IE は Promise とか Symbol とか使えません。これは文法ではなく、機能です。
- @babel/polyfill を使えばその辺の穴埋め(polyfill)をしてくます。
