let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

do {
  start++;
  if (typeof mix[start] === "number") console.log(mix[start]);
} while (start < mix.length);

console.log(`------------`);
start = 0;
mix = [1, 2, 3, "A", "B", "C", 4];

for (++start; start < mix.length; start++) {
  if (typeof mix[start] === "number") console.log(mix[start]);
}

console.log(`------------`);
start = 0;
mix = [1, 2, 3, "A", "B", "C", 4];
while (start < mix.length) {
  start++;
  if (typeof mix[start] === "number") console.log(mix[start]);
}

// Output
2;
3;
4;
