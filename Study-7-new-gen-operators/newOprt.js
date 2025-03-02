console.log("*** NEW OPERATORS ***");

// * =====================
// *DESTRUCTURING (OBJECT)
// * =====================

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
    surname: "Padding",
    job: "Developer",
    age: 60,
  },
  {
    name: "Mevlude",
    surname: "Border",
    job: "Developer",
    age: 59,
  },
  {
    name: "Mirza",
    surname: "Radius",
    job: "DevOps",
    age: 35,
  },
  {
    name: "David",
    surname: "Margin",
    job: "Engineer",
    age: 23,
  },
];

console.log("********");
team.forEach((person) => console.log(person));
team.forEach((person) => console.log(person.name));
team.forEach((person) => console.log(person.job));
team.forEach(({ name, surname, job, age }) => {
  console.log("Name:", name);
  console.log("Surname:", surname);
  console.log("Job:", job);
  console.log("Age:", age);
});

// ! ===Functionlarda Destruc. Kullanımı===
const objGoster = function () {
  return {
    name: "Mehmet",
    surname: "Demirhan",
    age: 38,
    job: "Developer",
  };
};

let { name, surname, age, job } = objGoster();
console.log(name, surname);
console.log("Age:", ++age);

// ! Function parametresi
const data = {
  id: "325478",
  desc: "This is top secret information",
  createdTime: "1995",
};

const printData = (data) => {
  console.log(`${data.id} - ${data.desc} - ${data.createdTime}`);
};

console.log(data);

// * =====================
//  *DESTRUCTURING (ARRAY)
// * =====================
const people = ["Mirza", "Ali", "David", "Uras"];
const [x, , y] = people;
console.log(x, y);

// * =====================
//      * REST (....)
// * =====================
// ! Bir dizi veya object deki bazi degerlerden geri kalanlarini ayri dizi yada objelere kopyalanmasini saglayabilir.

const araclar = ["Araba", "Kamyon", "Motor", "Minübüs", "Kamyonet"];
const [arac1, arac2, arac3, ...yukAraclar] = araclar;
console.log(arac1, arac2, arac3);
console.log(yukAraclar);

// * =====================
//     * SPREAD (....)
// * =====================
// ! Spread operatoru ise iterables olan bir elemani bireysel degerler haline getirir.
const ucanAraclar = ["Helikopter", "Ucak", "Drone", "Füze"];
const karaAraclar = ["Araba", "Motor", "Bisiklet"];
const tasitlar = [ucanAraclar, karaAraclar];
console.log(tasitlar);
const flatTasitlar = [...ucanAraclar, ...karaAraclar];
console.log(flatTasitlar);

// *örnek-1
const ozlusoz = "Uzun ince bir yoldayim";
const ozlusozDizisi = [...ozlusoz];
console.log(ozlusozDizisi);

// ? ****nested****
const persons = {
  person1: {
    name: "Mirza",
    surname: "Margin",
    dob: "1995",
    job: "developer",
    salary: "125000",
    drivingLicense: true,
  },
  person2: {
    name: "David",
    surname: "Padding",
    dob: "2000",
    job: "engineer",
    salary: "120000",
    drivingLicense: false,
  },
  person3: {
    name: "Uras",
    surname: "Right",
    dob: "2005",
    job: "Doctor",
    salary: "150000",
    drivingLicense: true,
  },
};

// ? for - in

for (let s in persons) {
  // console.log(s);
  // console.log(persons[s]); // *square bracket ile her bir objeyi getirir.
  console.log(persons[s].salary);
}

// ? Kullanişli Object Methodlar
console.log(Object.keys(persons));
console.log(Object.values(persons));
console.log(Object.values(persons.person1));
console.log(Object.entries(persons));
console.log(Object.entries(persons.person2));
