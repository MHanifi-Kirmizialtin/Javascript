// ! LOOPS DO-WHILE

console.log("***** DO-WHILE *****");

let counter = 1;
do {
  console.log("Cohort14", counter);
  counter++;
} while (counter <= 5);

// * EXAMPLE-1

const continue = ""
do {
    let visa = Number(prompt("Please enter the visa grade:"))
    let final = Number(prompt("Please enter the final grade:"))
    let average= visa * 0.3 + final * 0.7
    const conclusion =
    average >=50 ? `${average} passed with`: `${average} stayed with`
    console.log("conclusion");

    continue = prompt("Do you want to keep calculating? yes")
} while (continue === "y" || continue === "n");
console.log("The app is shutting down!!!");
