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
age = 22;
isMarried = false;
year = 2025;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried)
console.log(typeof year)

const check = ('10' === 10);
console.log(check)

console.log(parseInt(9.8) === 10);

let greaterThan = 5 > 3;
console.log(greaterThan);
let lessThan = 2 < 5;
console.log(lessThan);
let isSingle = true;
console.log(isSingle);

let cool;
console.log(cool);
let empty = null;
console.log(null);


// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3   //true
4 >= 3 //true
4 < 3  //false
4 <= 3      //false
4 == 4      // true
4 === 4     //true  
4 != 4      //false
4 !== 4     //false
4 != '4'    //false
4 == '4'    //true
4 === '4'   //false
// Find the length of python and jargon and make a falsy comparison statement.
"python".length !== "jargon".length;

console.log(4 > 3);           // true
console.log(4 >= 3);          // true
console.log(4 < 3);           // false
console.log(4 <= 3);          // false
console.log(4 == 4);          // true
console.log(4 === 4);         // true
console.log(4 != 4);          // false
console.log(4 !== 4);         // false
console.log(4 != '4');        // false
console.log(4 == '4');        // true
console.log(4 === '4');       // false
console.log("python".length !== "jargon".length); // false (lengths are equal)


console.log(4 > 3 && 10 < 12);       // true
console.log(4 > 3 && 10 > 12);       // false
console.log(4 > 3 || 10 < 12);       // true
console.log(4 > 3 || 10 > 12);       // true
console.log(!(4 > 3));               // false
console.log(!(4 < 3));               // true
console.log(!(false));               // true
console.log(!(4 > 3 && 10 < 12));    // false
console.log(!(4 > 3 && 10 > 12));    // true
console.log(!(4 === '4'));           // true
console.log(!("dragon".includes("on") && "python".includes("on"))); // false


const now = new Date();

// 1. What is the year today?
console.log(now.getFullYear());  // 2025 (current year)

// 2. What is the month today as a number?
console.log(now.getMonth() + 1); // March is 3 (getMonth() is zero-indexed)

// 3. What is the date today?
console.log(now.getDate());      // 18 (based on date you mentioned)

// 4. What is the day today as a number?
console.log(now.getDay());       // 2 (Tuesday, as 0 is Sunday)

// 5. What is the hours now?
console.log(now.getHours());     // Current hour (0-23)

// 6. What is the minutes now?
console.log(now.getMinutes());   // Current minute (0-59)

// 7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(Math.floor(now.getTime() / 1000)); // Seconds since epoch


// LEVEL 2 EXERCISE
// 1. Calculate area of triangle
const calculateTriangleArea = () => {
    const base = parseFloat(prompt("Enter base:"));
    const height = parseFloat(prompt("Enter height:"));
    const area = 0.5 * base * height;
    console.log(`The area of the triangle is ${area}`);
  };
  
  // 2. Calculate perimeter of triangle
  const calculateTrianglePerimeter = () => {
    const a = parseFloat(prompt("Enter side a:"));
    const b = parseFloat(prompt("Enter side b:"));
    const c = parseFloat(prompt("Enter side c:"));
    const perimeter = a + b + c;
    console.log(`The perimeter of the triangle is ${perimeter}`);
  };
  
  // 3. Calculate area and perimeter of rectangle
  const calculateRectangleProperties = () => {
    const length = parseFloat(prompt("Enter length:"));
    const width = parseFloat(prompt("Enter width:"));
    const area = length * width;
    const perimeter = 2 * (length + width);
    console.log(`Area of rectangle: ${area}`);
    console.log(`Perimeter of rectangle: ${perimeter}`);
  };
  
  // 4. Calculate area and circumference of circle
  const calculateCircleProperties = () => {
    const radius = parseFloat(prompt("Enter radius:"));
    const pi = 3.14;
    const area = pi * radius * radius;
    const circumference = 2 * pi * radius;
    console.log(`Area of circle: ${area}`);
    console.log(`Circumference of circle: ${circumference}`);
  };
  
  // 5. Calculate slope, x-intercept and y-intercept of y = 2x - 2
  const calculateLineProperties = () => {
    // For y = 2x - 2
    const slope = 2;
    // When y = 0, 0 = 2x - 2, so x = 1
    const xIntercept = 1;
    // When x = 0, y = 2(0) - 2 = -2
    const yIntercept = -2;
    
    console.log(`Slope: ${slope}`);
    console.log(`X-intercept: ${xIntercept}`);
    console.log(`Y-intercept: ${yIntercept}`);
  };
  
  // 6. Calculate slope between two points
  const calculateSlopeBetweenPoints = () => {
    const x1 = 2, y1 = 2;
    const x2 = 6, y2 = 10;
    const slope = (y2 - y1) / (x2 - x1);
    console.log(`Slope between (${x1},${y1}) and (${x2},${y2}): ${slope}`);
  };
  
  // 7. Compare slopes
  const compareSlopes = () => {
    const slopeEquation = 2; // From question 5
    const slopePoints = (10 - 2) / (6 - 2); // From question 6 = 2
    
    if (slopeEquation === slopePoints) {
      console.log("The slopes are equal");
    } else if (slopeEquation > slopePoints) {
      console.log("The slope from the equation is greater");
    } else {
      console.log("The slope from the points is greater");
    }
  };
  
  // 8. Calculate y = x² + 6x + 9 and find where y = 0
  const findQuadraticZero = () => {
    // Testing values
    for (let x = -10; x <= 10; x++) {
      const y = x**2 + 6*x + 9;
      console.log(`When x = ${x}, y = ${y}`);
    }
    
    // Solving algebraically: x² + 6x + 9 = 0
    // This is (x + 3)² = 0, so x = -3
    console.log("y = 0 when x = -3");
  };
  
  // 9. Calculate pay
  const calculatePay = () => {
    const hours = parseFloat(prompt("Enter hours:"));
    const ratePerHour = parseFloat(prompt("Enter rate per hour:"));
    const weeklyEarning = hours * ratePerHour;
    console.log(`Your weekly earning is ${weeklyEarning}`);
  };
  
  // 10. Check name length
  const checkNameLength = () => {
    const name = prompt("Enter your name:");
    if (name.length > 7) {
      console.log("Your name is long");
    } else {
      console.log("Your name is short");
    }
  };
  
  // 11. Compare first name and family name length
  const compareNameLengths = () => {
    const firstName = 'Asabeneh';
    const lastName = 'Yetayeh';
    
    if (firstName.length > lastName.length) {
      console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
    } else if (lastName.length > firstName.length) {
      console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`);
    } else {
      console.log(`Your first name, ${firstName} and family name, ${lastName} are equal in length`);
    }
  };
  
  // 12. Age comparison
  const compareAges = () => {
    const myAge = 250;
    const yourAge = 25;
    const difference = myAge - yourAge;
    
    console.log(`I am ${difference} years older than you.`);
  };
  
  // 13. Check driving eligibility
  const checkDrivingEligibility = () => {
    const birthYear = parseInt(prompt("Enter birth year:"));
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    
    if (age >= 18) {
      console.log(`You are ${age}. You are old enough to drive`);
    } else {
      const yearsToWait = 18 - age;
      console.log(`You are ${age}. You will be allowed to drive after ${yearsToWait} years.`);
    }
  };
  
  // 14. Calculate seconds lived
  const calculateSecondsLived = () => {
    const years = parseInt(prompt("Enter number of years you live:"));
    const secondsInYear = 365 * 24 * 60 * 60;
    const totalSeconds = years * secondsInYear;
    
    console.log(`You lived ${totalSeconds} seconds.`);
  };
  
  // 15. Create human readable time formats
  const createHumanReadableTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    // 15.1 YYYY-MM-DD HH:mm
    console.log(`${year}-${month}-${day} ${hours}:${minutes}`);
    
    // 15.2 DD-MM-YYYY HH:mm
    console.log(`${day}-${month}-${year} ${hours}:${minutes}`);
    
    // 15.3 DD/MM/YYYY HH:mm
    console.log(`${day}/${month}/${year} ${hours}:${minutes}`);
  };


//   LEVEL 3 
// Create a human readable time format with leading zeros
const createFormattedTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    // YYYY-MM-DD HH:mm format with padded zeros
    console.log(`${year}-${month}-${day} ${hours}:${minutes}`);
  };
  
  createFormattedTime();

