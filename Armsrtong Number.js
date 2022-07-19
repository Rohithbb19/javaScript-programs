// change the value of a to check whether the vale is Armsrtong Number or not

const a = 153;
let b = a.toString().length;
let c = a;
let sum = 0;
while (c > 0) {
  let x = c % 10;
  sum += x ** b;
  c = parseInt(c / 10);
}

if (sum == a) {
  console.log(`${a} is an Armsrtong Number`);
} else {
  console.log(`${a} is not an Armsrtong Number`);
}
