//? Selector
const form = document.querySelector("form");
const h2 = document.querySelector(".add-item h2");
const body = document.querySelector("body");
const myInput = document.getElementById("input");
const addButton = document.getElementById("btn");
const ul = document.querySelector("ul");

form.onsubmit = function (e) {
  e.preventDefault();
};
