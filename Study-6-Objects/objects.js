// ? =============================
// ? ======= (OBJECTS) ===========
console.log("*** Objects ***");

// *Array lerde ilişkisel veriler
const ogrenciİsim = ["Mehmet", "Mevlude", "Mirza", "Ali", "David", "Uras"];
const ogrenciSoyad = [
  "Kirmizi",
  "Kirmizi",
  "Caliskan",
  "Yigit",
  "Aslan",
  "Cengaver",
];
const ogrenciAdres = [
  "Van",
  "İstanbul",
  "Ankara",
  "Kosova",
  "Danimarka",
  "Atina",
];

console.log(`${ogrenciİsim[0]} - ${ogrenciSoyad[0]} - ${ogrenciAdres[0]}`);

// *3 farkli yöntemle Object oluşturulabilir.
// ! ============================================
// ! 1-Object Literal(en çok tercih edilen yöntem)

const kisi = {
  isim: "Mirza Ali",
  soyIsim: "Kirmizialtin",
  kimlikNo: "35648796321",
  maas: 120000,
  ehliyet: true,
  diller: ["english", "danca", "turkish"],
  notlar: { mat101: "AA", tur101: "BA", ing101: "BB" },
  dogumTarihi: 2012,
  yasHesapla: function () {
    return new Date().getFullYear() - this.dogumTarihi;
  },
};

// ! ====== OKUMA ======
// *this keyword- içerisinde bulunduğumuz objeyi refere eder.
// * . Nokta notasyonu ile erişim
console.log(kisi.isim);
console.log(kisi.maas);
console.log(kisi.diller[0]);
console.log(this);
console.log(kisi.notlar.ing101);
console.log(kisi.yasHesapla());

// * Square bracket ile erişim
console.log(kisi["maas"]);
console.log(kisi["kimlikNo"]);
console.log(kisi["notlar"]["ing101"]); // ! BB

console.log(kisi);

// ! ====== YAZMA ======

kisi.dogumTarihi = 2025;
kisi.diller = "English-Turkish-Danca";
kisi.kilo = 75;
kisi["ehliyet"] = false;

// * ==============
// * NESTED OBJECTS
// * ==============
const kisiler = {
  Mirza: {
    soyİsim: "Demirhan",
    kimlikNo: "98521436578",
    dogumTarihi: 2012,
    cinsiyet: "erkek",
  },
  David: {
    soyİsim: "Demirhan",
    kimlikNo: "98521432548",
    dogumTarihi: 2025,
    cinsiyet: "erkek",
  },
};
console.log(kisiler.Mirza.dogumTarihi);
console.log(kisiler.David.dogumTarihi);
console.log(kisiler["David"]["soyİsim"]);
const isim = "Mirza";
console.log(kisiler[isim]);

// * =================================
// * JSON (Javascript Object Notation)
// * =================================

const people = [
  {
    isim: "Mirza",
    soyİsim: "Demirhan",
    kimlikNo: "98521436578",
    dogumTarihi: 2012,
    cinsiyet: "erkek",
    maas: 125000,
    job: "developer",
  },
  {
    isim: "David",
    soyİsim: "Demirhan",
    kimlikNo: "98521432548",
    dogumTarihi: 2025,
    cinsiyet: "erkek",
    maas: 110000,
    job: "developer",
  },
  {
    isim: "Uras",
    soyİsim: "Demir",
    kimlikNo: "98521433567",
    dogumTarihi: 2025,
    cinsiyet: "erkek",
    maas: 110000,
    job: "tester",
  },
];

// const key = prompt("Kisinin hangi bilgilerini ögrenmek istiyorsunuz?");

// people.forEach((p) => console.log(p.isim));
// people.forEach((p) => console.log(p["kimlikNo"]));
// people.forEach((p) => console.log(p[key]));
// const totalMamas = people.reduce((t, m) => t + m.maas, 0);
// console.log(totalMamas);

const devs = people.filter((p) => p.job === "developer");
console.log(devs);

const newNames = people
  .filter((p) => p.job === "developer")
  .map((p) => `${p.isim} ${p.soyİsim}`);

console.log(newNames);
