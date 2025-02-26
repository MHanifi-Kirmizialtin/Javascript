// ? DIZILER (ARRAYS)

console.log("### ARRAYS ###");

// * Dizi Tanimlama

// ! Square bracket(Array Lteral)
const names = [
  "Mehmet",
  "Mevlüde",
  "Mirza Ali",
  "David Uras",
  true,
  6,
  [1, 3],
  "Ders Basladi",
  // "Ara vakti",
];

console.log(names);
console.log("Uzunluk:", names.length);
console.log(typeof names);

// * Dizilerden veri okuma
console.log(names[2]);
console.log(names[3]);
console.log(names[6][1]);

// * Dizinin son elemanini değişken atama
const lastElement = names[names.length - 1];
console.log(lastElement);

// * Dizi ekleme
names[6] = "Grandpa";
console.log(names);
names[5]++;

names[1] = names[1].toLocaleUpperCase();
console.log(names);

// * Array.of()
const numara = Array.of(5);
console.log(numara);

// ? ====================================
// ? DIZIYI DEGISTIREN (MUTATOR) METOTLAR

//  * PUSH
const cars = ["BMW", "Mercedes", "Audi", "Devrim", "Tofaş", "Tesla"];
console.log(cars);
cars.push("Jaguar");
console.log(cars);

// * POP
const deleteCar = cars.pop();
console.log(deleteCar, cars);

// * SHIFT
const bmw = cars.shift();
console.log(bmw, cars);

// * UNSHIFT
const newEL = cars.unshift("Honda");
console.log(newEL, cars);

// ? SPLICE()
// * Araya yeni dizi ekleme
// * cars.splice(1,0,"Skoda") ===>>> ilk parametre index sırası, 2.parametre 0-yazarsan araya ekler 1-yazarsan üzerine yazar ve 3.parametre ise yeni eklenecek veri.

cars.splice(3, 0, "Passat");
console.log(cars);
cars.splice(3, 0, "Opel", "Renault");
console.log(cars);

//  ? REVERSE()
cars.reverse();
console.log(cars);

// ? SORT() ===>>> A-Z ye siralama yapar
cars.sort();
console.log(cars);

const numbers = [1, 5, 17, 43, 25, 6, 9, 13];
numbers.sort();
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);

// ? FILL()  ===>> bütün indexlere 9 sayısını atama işlemi bu metodla yapılır.
const degerler = [3, 7, 21, 98, 9, 75, 21];
degerler.fill(9);
console.log(degerler);
