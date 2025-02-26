// ? FUNCTIONS

console.log("### Function Declaration ###");

// ! YÖNTEM-1

// * Fonksiyon Tanımlama (hoisted)
function hello() {
  console.log("Hello World!");
}

hello(); // * Invoke(Call)

// * Params Function
function salute(message, situation) {
  console.log(`Hi ${message} - ${situation}`);
}

salute("Cohort14", "How are you?");
salute("Mirza Ali", "How are you?");

function collect(n1, n2) {
  console.log("collect:", n1 + n2);
}
// collect(7, 9);
collect(19, 21);
