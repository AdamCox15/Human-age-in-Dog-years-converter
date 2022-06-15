//this is a variable to represent age of a person
const myAge = 32;
let earlyYears = 2;
//This will calculate dog years accounted for by persons early years
earlyYears *= 10.5;
//Subtracting 2 years off myAge because its already accounted for
let laterYears = myAge -2;
//This will calculate dog years accounted for by persons later years
laterYears *= 4;
/* Testing my code to make sure it's working correctly so far.
console.log(earlyYears);
console.log(laterYears);*/
//Adding early and later years together to get persons age in dog years
const myAgeInDogYears = earlyYears + laterYears;
let myName = 'Adam'.toLowerCase();
//Putting it all together using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years!`);
