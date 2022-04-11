var age = 18;
var addAge = prompt("Yoshingizni kiriting!:");
var race = document.createElement("p");
document.body.append(race);
document.body.style.backgroundColor = "yellow";

if (addAge >= age) {
  console.log("Musobaqada ishtrok etish mumkin!");
  race.append("Musobaqa ishtrok etish mumkin!");
} else {
  console.log("Ozgina ulg'ayishingiz kerak!");
  race.append("Ozgina ulg'ayishingiz kerak!");
}