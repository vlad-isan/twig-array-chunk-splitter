import { ArrayUtil } from "./util/array-util.js";

const array = [1, 2, 3, 4, 5];
const chunks = 4;

console.log(`The result of the array [${array}] being split into ${chunks} arrays is: `);
console.log("");
console.log(ArrayUtil.group_array_elements(array, chunks));
console.log("");
