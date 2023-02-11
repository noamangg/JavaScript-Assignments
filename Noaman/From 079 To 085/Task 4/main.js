// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },

  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },

  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};
let a = Object.values(Object.values(Object.values(myFavGames)[1])[1]);
let b = Object.keys(myFavGames);
console.log(a);
console.log(b);
// Code One => How To Get Object Length ??
let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name IS `, Object.keys(myFavGames)[i]);
  console.log(`The Publisher IS `, Object.values(myFavGames)[i].publisher);
  console.log(`The Price IS `, Object.values(myFavGames)[i].price);

  // Check If Nested Object Has Property (bestThree)
  if (Object.values(Object.values(myFavGames)[i]).length >= 3) {
    console.log("- Game Has Releases");
    console.log(
      `First => ${
        Object.values(Object.values(Object.values(myFavGames)[i])[1])[0]
      }`
    );
    console.log(
      `Second =>  ${
        Object.values(Object.values(Object.values(myFavGames)[i])[1])[1]
      }`
    );
    console.log(
      `Third =>  ${
        Object.values(Object.values(Object.values(myFavGames)[i])[1])[2]
      }`
    );
  }
  console.log("#".repeat(20));
}

// Output

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"
