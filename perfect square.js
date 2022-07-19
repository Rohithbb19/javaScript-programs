// change the value of numbert

let number = 81;
let isPerfect = 0;

for (let i = 0; i <= number / 2; i++) {
  if (i * i === number) {
    isPerfect = 1;
    break;
  }
}
if (isPerfect === 1) {
  console.log("it is a perfect square");
} else {
  console.log("it is not a perfect square");
}
