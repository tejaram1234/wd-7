var num = 12;
// finding the square root of number
var squareroot=Math.sqrt( num );
console.log( squareroot);

//genareting random number 
var randomNumber = Math.random() * 10;
var roundedNumber = Math.round(randomNumber);
console.log(roundedNumber);

//creating new date object called today
const today = new Date();
console.log(today);

//getting required data from today object using getter function
const year = today.getFullYear();
const month = today.getMonth() + 1; // Months are zero-based, so adding 1
const dayOfMonth = today.getDate();
const dayOfWeek = today.getDay(); // Returns the day of the week as a number (0-6, where 0 is Sunday)

console.log("Year:", year);
console.log("Month:", month);
console.log("Day of the month:", dayOfMonth);
console.log("Day of the week:", dayOfWeek);

//using setter function to set new data to today object
// Set the year to 2022
today.setFullYear(2022);

// Set the month to December
today.setMonth(11); // 11 represents December(Months are zero-based)

// Set the day of the month to 31
today.setDate(31);

console.log(today);
//extracting updated values of today object using getter function

const upyear = today.getFullYear();
const upmonth = today.getMonth() + 1;
const updayOfMonth = today.getDate();
const updayOfWeek = today.getDay();

console.log("Year:", upyear);
console.log("Month:", upmonth);
console.log("Day of the month:",updayOfMonth);
console.log("Day of the week:", updayOfWeek);

//creating new data object called birthday
const birthday = new Date(2001, 4, 14); // Year, Month (zero-based), Day of the month
console.log(birthday);


//millisecond difference between tody and birthday object
const millisecondsDiff = today.getTime() - birthday.getTime();
console.log("Milliseconds difference:", millisecondsDiff);

//number of days different between today and birthday object
const daysDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));
console.log("Days difference:", daysDiff);