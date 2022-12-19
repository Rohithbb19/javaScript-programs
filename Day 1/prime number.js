let a = 7;
let b = 0;

for (let i = 2; i <= a / 2; i++) {
  if (a % i === 0) {
    b = 1;
    console.log(b);
    break;
  }
}
if (b === 1) {
  console.log("not a prime number");
} else {
  console.log("is a prime number");
}
