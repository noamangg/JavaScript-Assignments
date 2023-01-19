

function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    return `${zName.substring(0, zName.indexOf(' '))} ${zName[zName.indexOf(" ") + 1].toUpperCase()}.`;
  }
  
  function ageWithMessage(zAge) {
    return `Your Age Is ${zAge[0]}${zAge[1]}${zAge[2] !== " " ? zAge[2] : ""}`;
  }
  function countryTwoLetters(zCountry) {
    return `You Live In ${zCountry[0].toUpperCase()}${zCountry[1].toUpperCase()}`;
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
