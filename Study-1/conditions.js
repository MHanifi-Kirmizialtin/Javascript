// ! ORNEK
// const age = 19;
const age = 18;
const gender = "Male";
const healthy = true;

const condition = age >= 18 && gender === "Male" && healthy === true;
if (condition === true) {
  console.log("Must do military service");
} else {
  console.log("Cannot do military service");
}

const sentence = "Today is Saturday";
const Lower = sentence.toLowerCase();
console.log(Lower);
const Upper = sentence.toUpperCase();
console.log(Upper);

// ! if-else yöntemi

if (age > 18) {
  console.log("Must do military service");
} else {
  console.log("Cannot do military service");
}

// ! TERNARY

const yas = 17;

yas >= 18
  ? console.log("Must do military service")
  : console.log("Cannot do military service");

// const age = 19;

let veri = "";
if (age <= 14) {
  veri = "child";
} else if (age <= 17) {
  veri = "youth";
} else {
  veri = "adult";
}
console.log(veri);
