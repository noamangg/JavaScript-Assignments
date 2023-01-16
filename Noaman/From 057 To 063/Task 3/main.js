function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    let months = theAge * 12;
    let days = theAge * 365;
    let weeks = Math.ceil(days / 7);
    let hours = days * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;
    console.log(`Your Age Is : ${theAge}
By Months : ${months}
By Weeks : ${weeks}
By Days : ${days}
By Hours : ${hours}
By Minutes : ${minutes}
By Seconds : ${seconds}
    `);
  } else console.log(`Age Out Of Range`);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
ageInTime(20); // Months Example => 240 Months
