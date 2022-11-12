import log, { characters, greet as hello } from "./characters.mjs";

for (const c of characters) {
  hello(c);
}

log();

// ассинхронный импорт

async function main() {
  try {
    const { characters, greet } = await import("./characterss.mjs");
    for (const c of characters) {
      greet(c);
    }
  } catch (err) {
    console.log("Error");
  }
}

main();
