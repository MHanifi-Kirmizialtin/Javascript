console.log("*** CREATE NODE ***");

// ? 1-yeni bir li elementi oluşturdum.
const newLi = document.createElement("li");

// ? 2-text tabanli bir elment ise text düğümünü olustur.
const textLi = document.createTextNode("Node.JS");

// ? 3-olusturulan text dugumunu yeni elemente bagla.
newLi.appendChild(textLi);

// ? 4-yeni oluturdugun elementi DOM tree'ye bagla.
document.querySelector("ul").appendChild(newLi);
console.log(newLi);

// ?
const newLi2 = document.createElement("li");
newLi2.textContent = "C++";

// ? Element.before()-Element.after() ile bir elementi istediğimiz elementin onune veya devamına eklemek mumkundur.
const react = document.querySelector("ul li:nth-child(3)");
react.before(newLi, newLi2);

//!=======================================
// ! id-class bibi ozellikler atama yapmak.
newLi.className = "list";
newLi.id = "new-li";

// * setAttribute(atr,"deger")
newLi2.setAttribute("class", "list");
console.log(newLi.getAttribute("class"));
console.log(newLi.getAttribute("id"));

// * yeni bir element olustur.(innerHTML)
document.querySelector("main").innerHTML += `
 <div>
 <input type="text"/>
 <button>Submit</button>
 </div>
`;
