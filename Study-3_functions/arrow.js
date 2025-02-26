// ! FUNCTION ARROW

console.log("### Function-Arrow ###");

// *  Arrow function
const mesajVer = () => console.log("JS is a browser language");

// * Invoke
mesajVer();

// ? ÖRNEK
const kareAl = (x) => x * x;
console.log(kareAl(3));

// ? ÖRNEK
// const yasHesap = (yil) => 2025 - yil;
// const yasHesap = (yil) => new Date().getFullYear() - yil;

// const yil = Number(prompt("Dogum yili:"));
// console.log(`Yasiniz ${yasHesap(yil)} dir`);

// console.log(new Date());
// console.log(new Date().getFullYear());

// * Hesap MAkinesi

const topla = (s1, s2) => s1 + s2;
const cikar = (s1, s2) => s1 - s2;
const bol = (s1, s2) => s1 / s2;
const çarp = (s1, s2) => s1 * s2;

const hesapMak = (num1, num2, opr) => {
  let sonuç = 0;

  switch (opr) {
    case "+":
      sonuç = topla(num1, num2);
      break;
    case "-":
      sonuç = cikar(num1, num2);
      break;
    case "/":
      sonuç = bol(num1, num2);
      break;
    case "*":
      sonuç = çarp(num1, num2);
      break;

    default:
      alert("Hata yaptiniz!");
      break;
  }
  return sonuç;
};

const num1 = +prompt("sayi-1");
const opr = prompt("operator giriniz: +, -, /, *");
const num2 = +prompt("sayi-2");

const sonuç = hesapMak(num1, num2, opr);
console.log(`${num1}${opr}${num2}=${sonuç}`);
