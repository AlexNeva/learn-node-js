let characters = [
  { name: "Фродо", hasRing: false },
  { name: "Бильбо", hasRing: false },
];

function stealRing(characters, owner) {
  characters.map((c) => {
    if (c.name === owner) {
      c.hasRing = true;
    } else {
      c.hasRing = false;
    }
  });
}

module.exports = { characters, stealRing };
