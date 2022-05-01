/**
 * const,let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "val変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "変数を再宣言";

//constは上書きも再宣言も不可能
// const val3 = "const変数";
// console.log(val3);
// val3 =  "constを上書き";
// const val3 = "constを再宣言";

//constで定義してもオブジェクトや配列は変更可能
// const val4 = {
//   name: "haruka",
//   age: 18,
// };
// val4.name = "jakee";
// val4.address = "heroshima";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name = "jakeee";
//  const age = 28;
//  //従来の方法
//  const message1 = "私の名前は" + name + "です。年齢は"　+ age + "です。";
//  console.log(message1);
//  //テンプレート文字列を用いた方法
//  const message2 = `私の名前は${name}です。年齢は${age}才です。`;
//  console.log(message2);

/**
 * アロー関数
 */

//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));
// //アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// //アロー関数は値を返すだけなら波括弧とreturnを省略できる。
// const func4 = (num1, num2) => num1 + num2;
// console.log(func4(1, 2));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "じゃけえ",
//   age: 28
// };

// const message1 = `1名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `2名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["jakee", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("jakee");

/**
 * スプレッド構文...
 */
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);//配列の中身を順番に処理してくれる

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4; //イコールでコピーしてしまうと参照元も書き変わってしまうので注意
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["tanaka", "yamada", "jakee"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}です`);
// }
// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; //奇数だけ取り出して新しい配列に格納する
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "jakee") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件?条件がtrueのとき:条件がfalseの時
// const val1 = 1 < 0 ? `true`:`false`;
// console.log(val1);
// const num = 20000000;
// console.log(num.toLocaleString());
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

/**
 * 論理演算子の本当の意味を知ろう　&& ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// || は左側がfalseなら右側を返す 左側がtrueなら左側を返す
// const num = 0;
// const fee = num || "金額未設定です";
// console.log(fee);

//&& は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
