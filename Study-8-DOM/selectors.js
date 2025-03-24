console.log("***** SELECTORS *****");
document.title = "DOM Intro";

// * ================
// * getElementById()
// * ================
// ! secilen elementleri style property ile manipule ettik.
document.getElementById("add_new_item").style.color = "red";
document.getElementById("add_new_item").style.backgroundColor = "yellow";
document.getElementById("add_new_item").style.border = "2px solid magenta ";

// ! id si "heading1" olan elementi seçer
const headerText = document.getElementById("heading1");
console.log(headerText);

// ! id si "btn" olan kısmı seçer
const addBtn = document.getElementById("btn");
console.log(addBtn);

document.getElementById("java-li").innerText = "JS";

// *input değerinin okunması ve yazılması
const MyInput = document.getElementById("input");
console.log(MyInput.value);
addBtn.value = "SUBMIT";

// * =====================
// * getElementByTagName()
// * =====================

const allLi = document.getElementsByTagName("li");
console.log(allLi);

// * for yapıları kullanılabilir.
for (let li of allLi) {
  console.log(li.textContent);
}

// *spread
const arrayAllLi = [...allLi];
console.log(arrayAllLi);
arrayAllLi.forEach((li) => (li.style.color = "darkred"));

// *array.from()
Array.from(allLi).map((li) => (li.style.backgroundColor = "lightblue"));

// * =======================
// * getElementByClassName()
// * =======================
const myList = document.getElementsByClassName("list");
console.log(myList);

myList[1].innerText = "CSS Dersleri";

// * =======================
//     * querySelector()
// * =======================
// query selector ile ; id-tag-class seçilebilir.
// bu seçici akışta gördüğü ilk elementi seçer.
console.log(document.querySelector("#btn")); // ? id almak
console.log(document.querySelector(".item-list")); // ? class almak
console.log(document.querySelector("li")); // ? tag almak
const newReact = document.querySelector("ul li:nth-child(3)");
console.log(newReact);

// * =========================
//     * querySelectorAll()
// * =========================
const liste = document.querySelectorAll(".item-list .list");
console.log(liste); // ! NodeList
liste.forEach((li) => console.log(li.innerText));
