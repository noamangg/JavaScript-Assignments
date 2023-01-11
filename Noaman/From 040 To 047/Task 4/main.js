let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];


words[website.length][0] = words[website.length][0].slice(website.length).toUpperCase();

console.log(words[website.length][0]); // ZERO