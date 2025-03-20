// Exercise: Level One
// 1. Declare firstName, lastName, country, city, age, isMarried, year variable 
// and assign value to it and use the typeof operator to check different data types.
console.log("Question 1")
let firstName;
let lastName;
let country;
let city;
let age;
let isMarried;
let year;

firstName = "Dora";
lastName = "Appiah";
country = "Ghana";
city = "Accra";
age = 23;
isMarried = false;
year = 2025;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);


// 2. Check if type of '10' is equal to 10
console.log("\nQuestion 2")
console.log('10' == 10);

// 3. Check if parseInt('9.8') is equal to 10
console.log("\nQuestion 3")
console.log(parseInt(9.8) == 10);

// 4. Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
console.log("\nQuestion 4:")
console.log("Three JavaScript statement which provide truthy value")
console.log(Boolean(1));
console.log(Boolean("Hello"));
console.log(Boolean([]));


// Write three JavaScript statement which provide falsy value.
console.log("Three JavaScript statement which provide falsy value")
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN))

// 5. Figure out the result of the following comparison expression first without using console.log(). 
// After you decide the result confirm it using console.log(
console.log("\nQuestion 5:")
// 4 > 3 - True
// 4 >= 3 - True
// 4 < 3 - False
// 4 <= 3 - False
// 4 == 4 - True
// 4 === 4 - True
// 4 != 4 - False
// 4 !== 4 - False
// 4 != '4' - False
// 4 == '4' - True
// 4 === '4' - False
// Find the length of python and jargon and make a falsy comparison statement. - python.length > jargon.length
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
let pythonLength = "python".length;
console.log("The Length of Python is: ", pythonLength);
let jargonLength = "jargon".length;
console.log("The length of Jargon is: ", jargonLength);
console.log(pythonLength > jargonLength);

// 6. Figure out the result of the following expressions first without using console.log(). 
// After you decide the result confirm it by using console.log()
console.log("\nQuestion 6");
// 4 > 3 && 10 < 12 - True
// 4 > 3 && 10 > 12 - False
// 4 > 3 || 10 < 12 - True
// 4 > 3 || 10 > 12 - True
// !(4 > 3) - False
// !(4 < 3) - True
// !(false) - True
// !(4 > 3 && 10 < 12) - False
// !(4 > 3 && 10 > 12) - True
// !(4 === '4') - True
// There is no 'on' in both dragon and python - False
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!("dragon".includes("on") && "python".includes("on")));

// Use the Date object to do the following activities
console.log("\nQuestion 7: ");
const now = new Date();
// What is the year today?
// let yearToday = now.
console.log(`The year today is: ${now.getFullYear()}`);
// What is the month today as a number?
console.log(`The month today as a number is: ${now.getMonth()}`);
// What is the date today?
console.log(`The date today is: ${now.getDate()}`);
// What is the day today as a number?
console.log(`The day today as a number is: ${now.getDay()}`);
// What is the hours now?
console.log(`The hours now is: ${now.getHours()}`);
// What is the minutes now?
console.log(`The minutes now is: ${now.getMinutes()}`);
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let Nownow = Date.now();
const secondsElapsed = Math.floor(Nownow / 1000);
console.log("The number of seconds elapsed since 1 January, 1970 is: ", secondsElapsed);

console.log("\n\n EXERCISES: LEVEL 2");
console.log("Question 1: ");
// // Write a script that prompt the user to enter base and height of the triangle and 
// // calculate an area of a triangle (area = 0.5 x b x h).
console.log("Calculating the Area of a triangle");
// Enter base: 20
// let base = parseInt(prompt("Enter base:"));
// Enter height: 10
// let height = parseInt(prompt("Enter height:"));
// The area of the triangle is 100
// const areaOfTriangle = 0.5 * base * height;
// console.log("The Area of the Triangle is: ", areaOfTriangle)

console.log("\nQuestion 2: ");
// // Write a script that prompt the user to enter side a, side b, and side c of the triangle 
// // and calculate the perimeter of triangle (perimeter = a + b + c)
// // Enter side a: 5
// a = parseInt(prompt("Enter side A: "));
// // Enter side b: 4
// b = parseInt(prompt("Enter side b"));
// // Enter side c: 3
// c = parseInt(prompt("Enter side "));
// // The perimeter of the triangle is 12
// const perimeter = a + b + c;
// console.log("The perimeter of a triangle is: ", perimeter);

console.log("\nQuestion 3: ");
// // Get length and width using prompt and calculate an area of rectangle 
// // (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// length = parseInt(prompt("Enter the Length"));
// width = parseInt(prompt("Enter the Width"));
// areaOfRectangle = length * width;
// perimeterOfRectangle = 2 * (length + width);
// console.log("Area of a Rectangle is: ${areaOfRectangle}");
// console.log("Perimeter of a Rectangle is: ", perimeterOfRectangle);

console.log("\nQuestion 4");
// // Get radius using prompt and calculate the area of a circle (area = pi x r x r) 
// // and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// const pi = 3.14;
// radius = parseInt(prompt("Enter the radius of the circle"));
// areaOfCircle = pi * radius * radius;
// circumferenceOfCircle = 2 * pi * radius;
// console.log("Area of a Circle is:", areaOfCircle);
// console.log("Circumference of a Circle is: ", circumferenceOfCircle);


console.log("\nQuestion 5");
// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// Given equation: y = 2x - 2
// 1️⃣ Slope (m) is the coefficient of x from y = mx + b
const slope = 2;

// 2️⃣ Y-intercept: Set x = 0
const yIntercept = (2 * 0) - 2; // Directly from the equation y = mx + b

// 3️⃣ X-intercept: Set y = 0 and solve for x
const xIntercept = -yIntercept / slope; // (0 = 2x - 2) → x = 1

console.log("Slope (m):", slope);
console.log("Y-Intercept:", `(0, ${yIntercept})`);
console.log("X-Intercept:", `(${xIntercept}, 0)`);


console.log("\n Question 6: ");
// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// Given points (2,2) and (6,10)
const x1 = 2, y1 = 2;
const x2 = 6, y2 = 10;

// Slope formula (m): (y2 - y1) / (x2 - x1)
const slope2 = (y2 - y1) / (x2 - x1);

console.log("Slope (m):", slope2);

console.log("\nQuestion 7: ");
// Compare slopes: Compare the slope of above two questions.
console.log("Slope from equation y = 2x - 2: ", slope);
console.log("Slope from points (2,2) and (6,10): ", slope2);

slope == slope2
    ? console.log("Slope of both equations are equal")
    : console.log("The slope of both are different")

console.log("\n Question 8: ");
// Calculate the value of y (y = x2 + 6x + 9). 
// Try to use different x values and figure out at what x value y is 0.
// Given y = x ** 2 + 6 * x + 9
const X1 = 3;
const X2 = 4;

yValue1 = X1 ** 2 + 6 * X1 + 9;
yValue2 = X2 ** 2 + 6 * X2 + 9;
console.log("When x = 3, the value of y is: ", yValue1);
console.log("When x = 4, the value of y is: ", yValue2);


console.log("\nQuesion 9: ");
// // Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// // Enter hours: 40
// numberOfHours = parseInt(prompt("Enter hours: "));
// // Enter rate per hour: 28
// ratePerHour = parseInt(prompt("Enter rate per hour: "));
// // Your weekly earning is 1120
// weeklyEarning = numberOfHours * ratePerHour;
// console.log("Your weekly earning is ", weeklyEarning);

console.log("\nQuestion 10: ");
// If the length of your name is greater than 7 say, your name is long 
// else say your name is short.
const lengthOfMyName = "Dora".length;
if (lengthOfMyName > 7) {
    console.log("your name is long");
} else {
    console.log("your name is short")
}

console.log("\nQuestion 11: ");
// Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
let first_name = "Dora";
let last_name = "Appiah";

// Your first name, Asabeneh is longer than your family name, Yetayeh
if (first_name.length > last_name.length) {
    console.log("Your first name,", first_name, " is longer than your family name, ", last_name);
} else {
    console.log("Your family name,", last_name, "is longer than your first name,", first_name);
}

console.log("\nQuestion 12: ");
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
let myAge = 250;
let yourAge = 25;
// I am 225 years older than you.
ageDifference = myAge - yourAge;
console.log("I am", ageDifference, "years older than you.");

console.log("\nQuestion 13: ");
// Using prompt get the year the user was born and 
// if the user is 18 or above allow the user to drive 
// if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
birthYear = parseInt(prompt("Enter birth year: "));
currentYear = new Date().getFullYear();
age = currentYear - birthYear;

if (age >= 18){
    console.log("You are", age, ". You are old enough to drive");
}
else{
    console.log("You are", age, `. You will be allowed to drive after, ${18-age} years.`)
}
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
