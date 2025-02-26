// ! =============================
// ! === Dizi Erişim Metodları ===

console.log("### ACCESS ###");
const numbers = [3, 5, 2, "4", "bes", "four", 3, "4", "bes", "1", 3, "bes"];

// * Includes()
console.log(numbers.includes("1"));
console.log(numbers.includes("41"));

// * indexOf() - lastIndexOf()
console.log(numbers.indexOf("four"));
console.log(numbers.lastIndexOf(3));
console.log(numbers.lastIndexOf("bes"));

// * join()
// * dizinin elemanini birleştirir string çevirir.
const joinArray = numbers.join("-");
console.log(joinArray);
console.log(numbers);

// * toString() ===>> fonksiyonu sadece birleştirir ve araya virgül koyup string yapar.
console.log(numbers.toString());

// * concat()
// * ===>>
const messagge = ["The weather", "is", "very", "nice"];
const time = new Date().toDateString();
console.log(time, messagge);

// * slice(start-end) -- end exclusive
let cars = ["BMW", "Mercedes", "Tesla", "Passat"];
const sliceCars = cars.slice(1);
console.log(sliceCars, cars);

console.log(cars.slice(0, 3));
