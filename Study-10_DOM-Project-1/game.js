// ================================================
// ======================= GAME ===================
// ================================================
//* Oyuna 1-20 arasinda bir sayi tutturdum.
const rastgeleSayi = Math.ceil(Math.random() * 20);
console.log(rastgeleSayi);

//? SELECTORS
const mesaj = document.querySelector(".mesaj");

const skor = 10;
const enYuksekSkor = 0;
document.querySelector(".check").addEventListener("click", () => {
  const tahmin = document.querySelector(".guess").value;
  //   console.log(tahmin);
  //? Tahimn girmeden butona basildiysa
  if (!tahmin) {
    mesaj.textContent = "Lütfen bir sayi giriniz...";

    //? Tahminnimiz dogruysa
  } else if (tahmin == rastgeleSayi) {
    mesaj.textContent = "Tebrikler Bildiniz!!!";
    document.querySelector("body").style.backgroundColor = "springgreen";
    document.querySelector(".number").textContent = rastgeleSayi;

    //? top-score kontrolü yap
  } else {
    //? Skor > 1 oldugu sürece hakkın var.
    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;
      tahmin < rastgeleSayi
        ? (mesaj.textContent = "arttir👆")
        : (mesaj.textContent = "azalt👇");
    } else {
    }
  }
});
