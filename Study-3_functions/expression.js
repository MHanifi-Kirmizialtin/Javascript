// ? FUNCTIONS

console.log("### Function Expression ###");

// ! Örnek-1
const tekVcift = function (num) {
  let sonuc = "";
  if (num % 2 === 0) {
    sonuc = `${num} cifttir`;
  } else {
    sonuc = `${num} tekdir`;
  }
  return sonuc;
};

const sonuc = tekVcift(5);
console.log(sonuc);
console.log(tekVcift(4));

// ! Örnek-2
let daireAlanınıHesapla = function (r) {
  return Math.PI * r * r;
};
const r = Number(prompt("r:"));
const sonu = daireAlanınıHesapla(r);
console.log(`Dairenin Alani= ${sonu}`);
