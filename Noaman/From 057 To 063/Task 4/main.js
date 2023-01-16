
function showDetails(a, b, c) {
  let name, age, available, no, ava;
  
  function setVa(vari) {
    switch (typeof vari) {
      case "string":
        name = vari;
        break;
      case "number":
        age = vari;
        break;
      case "boolean":
        available = vari;
        break;
      default:
        no = "No Typeof";
    }
  }
  setVa(a);
  setVa(b);
  setVa(c);
  if(available)
    ava = `Available`;
  else
    ava = `Not Available`;
  console.log(`Hello ${name}, Your Age Is ${age}, You Are ${ava} For Hire`);
}
showDetails("Noaman", 20, true);
showDetails(20 ,"Noaman", true);
showDetails(true, 20, "Noaman");
showDetails(false, "Noaman", 20);