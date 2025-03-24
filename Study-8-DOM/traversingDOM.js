console.log("*** TRAVERSING DOM ***");

// * =========================
// * TRAVERSING DOM ==========
// * =========================

// ! 1- parentElement, parentNode
const h2 = document.getElementById("add_new_item");
console.log(h2.parentElement); // ? section.add-item
console.log(h2.parentElement.parentElement.parentElement); //? body

// ! 2-Children, firstElementChild, lastElemenChild
const section = document.querySelector("section.add-item");
console.log(section.firstElementChild);
console.log(section.lastElementChild);

// ! 3-nextElementSibling, previousElementSibling
