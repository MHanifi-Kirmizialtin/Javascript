// ? ==========================
// ? ==== LOOPS IN ARRAYS =====

console.log("*****LOOP IN ARRAY");

// *Örnek-1
const maaslar = [5000, 6500, 4000, 8000, 3500];
let sum = 0;
for (let i = 0; i < maaslar.length; i++) {
  sum += maaslar[i];
  console.log(i, sum);
}
console.log("SUM:", sum);

// *Örnek-2
// *notları 50 den büyük ve 50 den küçük olacak şekilde 2 ayri dizi oluştur.
const notlar = [50, 75, 45, 35, 85, 25, 65];

const ellidenKucukNotlar = [];
const ellidenBuyukNotlar = [];

for (let i = 0; i < notlar.length; i++) {
  if (notlar[i] < 50) {
    ellidenKucukNotlar.push(notlar[i]);
  } else {
    ellidenBuyukNotlar.push(notlar[i]);
  }
}
console.log(notlar);
console.log(ellidenBuyukNotlar);
console.log(ellidenKucukNotlar);

// ? =========FOR IN=========
// *Örnek-3
const puanlar = [50, 75, 45, 35, 85, 25, 65];

let total = 0;
for (let i in puanlar) {
  total += puanlar[i];
}
console.log("AVG:", (total / puanlar.length).toFixed(2));

// *örnek-4
const puanlar1 = [50, 75, 45, 35, 85, 25, 65];

const ellidenKucukNotlar1 = [];
const ellidenBuyukNotlar1 = [];

for (let i in puanlar1) {
  puanlar1[i] < 50
    ? ellidenKucukNotlar1.push(puanlar1[i])
    : ellidenBuyukNotlar1.push(puanlar1[i]);
}
console.log(puanlar1);
console.log(ellidenBuyukNotlar1);
console.log(ellidenKucukNotlar1);

// ? =========FOR OF=========
// *Örnek-5
// const students = ["mirza", "ali", "david", "uras", "ahmet", "akif", "kerim"];

// const strArrayUpperCase = (students) => {
//   let upperCasedArray = [];
//   for (let student of students) {
//     upperCasedArray.push(student.toUppercase());
//   }
//   return upperCasedArray;
// };
// const myArray = strArrayUpperCase(students);
// console.log(myArray);
