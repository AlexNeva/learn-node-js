const { characters, stealRing } = require("./characters.js");

stealRing(characters, "Фродо");

for (const c of characters) {
  console.log(c);
}
