let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

// Output
"1 => Sayed"
"2 => Mahmoud"

while(index < friends.length)
{
  if(typeof friends[index] === "string" && !friends[index].startsWith("A"))
  console.log(`${++counter} => ${friends[index]}`);

  index++;
}