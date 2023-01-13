let start = 10;
let end = 0;
let stop = 3;

// Output

for(; start > end; start--)
{

  if(start.toString().length === 1)
  console.log(`0${start}`);
  else
  console.log(start);
  
  if(start === stop)
  break;
}
10
09
08
07
06
05
04
03