// ? =========================
// ? =====FOREACH MTHOD=======
console.log("***ITERATION***");

// *2 parametreli forEach örneği
const sayilar = [4, 5, 3, 7, 4, 9, 8];
sayilar.forEach((x, i) => console.log(x, i));

// *örnek-Toplama
let sum = 0;
sayilar.forEach((sayi) => (sum += sayi));
console.log("SUM:", sum);

// *3 parametreli forEach örneği
const notlar = [40, 60, 50, 35, 65, 45, 55];
notlar.forEach((not, indis, array) => (array[indis] = not * 1.5));
console.log(notlar);

// ? =========================
// ? =======MAP METHOD========

// *Örnek-1
// *Bir dizideki tüm isimleri BÜYÜK harfe dönüştürme

const names = ["Mehmet", "Mevlude", "Mirza", "Ali", "David", "Uras"];
const copyNames = names.map((n) => n.toUpperCase());
console.log(copyNames, names);

// *Örnek-2

const euro = 32.97;
const dolar = 30.5;

const iphoneTL = [90000, 75000, 60000, 40000, 35000];
const iphoneDolar = iphoneTL.map((tlFiyat) => Math.trunc(tlFiyat / dolar));
const iphoneEuro = iphoneTL.map((tlFiyat) => Math.trunc(tlFiyat / euro));
console.log(iphoneDolar);
console.log(iphoneEuro);

// ? ============================
// ? =======FILTER METHOD========

// *Örnek-1
const maaslar = [90000, 75000, 65000, 50000, 40000, 35000];
// *maasi 50000 den fazla olanları bul
const newMaas = maaslar.filter((m) => m >= 50000);
console.log(newMaas);

// *maas aralığı 30-60 bin arasını bulma
const maasAraligi = maaslar.filter((m) => m >= 30000 && m < 60000);
console.log(maasAraligi);

// ? ================================
// ? =====CHAINING (PIPELINE)========

// *örnek-1
// *maaası 50 binden az olanları %20 zam yapalım.
const salary = [90000, 75000, 65000, 50000, 40000, 35000];

const newSalary = salary.filter((m) => m < 50000);
const newSalarys = salary.filter((m) => m < 50000).map((m) => m * 1.2);
console.log(newSalary);
console.log(newSalarys);

// ? ================================
// ? =========== REDUCE =============

const many = [40000, 35000, 50000, 25000, 120000];
const totalMany = many.reduce((t, m) => t + m);
console.log("Total Many:", totalMany);

const numbers = [4, 3, 5, 6, 2];
const newNumbers = numbers.reduce((t, n) => t * n, 1);
console.log("Totals:", newNumbers);

// *Örnek-2
const newTotalMany = many
  .filter((m) => m < 50000)
  .map((m) => m * 1.3)
  .reduce((t, m) => t + m, 0);
console.log(newTotalMany);
