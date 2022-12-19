let a = "1221";
const b = a.length;
let c = 0;

for (let i = 0; i < b / 2; i++) {
  if (a[i] !== a[b - 1 - i]) {
    c = 1;
  }
}
if (c === 1) {
  console.log("its not a palindrome");
} else {
  console.log("its a palindrome");
}
