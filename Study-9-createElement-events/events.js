console.log("*** EVENTS ***");

// ? Selectorler
const h2 = document.querySelector(".add-item h2");
const body = document.querySelector("body");
const myInput = document.getElementById("input");
const addButton = document.getElementById("btn");
const ul = document.querySelector("ul");
const form = document.querySelector("form");

// ? event tanimlamalari

// h2.onmouseover = function () {
//   h2.style.color = "blue";
// };

// h2.onmouseout = function () {
//   h2.style.color = "red";
// };

//* input yazmaya hazır hale getirme. DOM içeriklerin tamamami yüklrndikten sonra tetiklenen event.
// body.onload = function () {
//   myInput.focus();
// };

//? =============================================
//?          section elementi
//? =============================================
// addButton.onclick = (e) => {
// console.log(e);
// alert("tiklandi!!!");
//   myInput.focus();
//   if (!myInput.value.trim()) {
//     //? trim() space boslugunu engellemek için
//     alert("Lütfen içerik yaziniz!!!");
//     return;
//   }
//   const li = document.createElement("li");
//   li.textContent = myInput.value;
//   ul.appendChild(li);
//   myInput.value = "";
// };

//? =============================================
//?             form elementi
//? =============================================
form.onsubmit = function (e) {
  e.preventDefault(); //? submit isleminde formu siler ve sayfayi refresh yapmayi iptal eder.

  myInput.focus();
  if (!myInput.value.trim()) {
    //? trim() space boslugunu engellemek için
    alert("Lütfen içerik yaziniz!!!");
    return;
  }
  const li = document.createElement("li");
  li.textContent = myInput.value;
  ul.appendChild(li);
  myInput.value = "";
};
