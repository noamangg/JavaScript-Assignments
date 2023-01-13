let start = 0;
let swappedName = "elZerO";
let c = "";
c.length = swappedName.length;
// Output
"ELzERo"

for(start; start < swappedName.length; start++)
{
  // Lower Case
  if(swappedName[start] === swappedName[start].toLowerCase())
  c[start] = swappedName[start].toUpperCase();
  else
  c[start] = swappedName[start].toLowerCase();
}
console.log(swappedName);