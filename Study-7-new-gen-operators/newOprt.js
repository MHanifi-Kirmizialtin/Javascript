console.log("*** NEW OPERATORS ***");

// * =====================
// *DESTRUCTURING (OBJECT)

const product = {
  id: "32547",
  brand: "Apple",
  type: "smart phone",
  price: 4500,
};

// ? değişken isimleri objedeki key'lere eş olmalidir.
const { id, price } = product;
console.log("ID:", id);
console.log("Price:", price);

const kisiler = {
  kisi1: {
    kimlikNo: "25896314725",
    adi: "Mirza Ali",
    soyadi: "Demirhan",
    meslek: "Developer",
    maas: 50000,
  },
  kisi2: {
    kimlikNo: "25896318524",
    adi: "David Uras",
    soyadi: "Demirhan",
    meslek: "Engineer",
    maas: 40000,
  },
};

console.log(kisiler.kisi2.meslek);
console.log(kisiler["kisi1"]["meslek"]);

// *level-1 destructuring
const { kisi1, kisi2 } = kisiler;
console.log(kisi1);

// *level-2 destructuring
const { adi, meslek } = kisi1;
console.log(adi, meslek);

// * Example-1
const team = [
  {
    name: "Mehmet",
    suname: "Padding",
    job: "Developer",
    age: 60,
  },
  {
    name: "Mevlude",
    suname: "Border",
    job: "Developer",
    age: 59,
  },
  {
    name: "Mirza",
    suname: "Radius",
    job: "DevOps",
    age: 35,
  },
  {
    name: "David",
    suname: "Margin",
    job: "Engineer",
    age: 23,
  },
];

console.log("********");
team.forEach((person) => console.log(person));
team.forEach((person) => console.log(person.name));
team.forEach((person) => console.log(person.job));

// * =====================
//  *DESTRUCTURING (ARRAY)

// * =====================
//      * REST (....)

// * =====================
//     * SPREAD (....)
