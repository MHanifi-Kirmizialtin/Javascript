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

// ? Example-5

const workingtime = 13;
// const workingtime = 9;
let salary = 45000;

salary = workingtime >= 10 ? salary * 1.5 : salary;
console.log("SALARY:", salary);

// ! SHORT CIRCUIT

let salaryy = 60000;
let year = 8;
// let year = 9;
year >= 10 && (salaryy = salaryy * 1.5);
console.log("SALARY:", salaryy);

//  !SWITCH-CASE

const x = +prompt("x sayisini giriniz:");
const y = +prompt("y sayisini giriniz:");
const islem = prompt("İslemi giriniz: +, -, /, *");

let yekun = 0;
switch (islem) {
  case "+":
    yekun = x + y;
    break;
  case "-":
    yekun = x - y;
    break;
  case "/":
    yekun = x / y;
    break;
  case "*":
    yekun = x * y;
    break;

  default:
    alert("Yanlis islem");
    break;
}

// ! Burda kullanilan kesme işareti `` farkli
console.log(`${x} ${islem} ${y} = ${yekun}`);
console.log(`${x} ${islem} ${y} = ${yekun.toFixed(3)}`);
