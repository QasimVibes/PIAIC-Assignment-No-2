// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.

var celsiusTemp: number = 40;
var fahrenheitTemp: number = 40;
var celsiusToFahrenheit: number = (celsiusTemp * 9) / 5 + 32;
var fahrenheitToCelsius: number = ((fahrenheitTemp - 32) * 5) / 9;
console.log(`${celsiusTemp}°C is equal to ${celsiusToFahrenheit}°F`);
console.log(`${fahrenheitTemp}°F is equal to ${fahrenheitToCelsius}°C`);

// Write a program that calculates the percentage.

var totalMarks: number = 500;
var obtainedMarks: number = 300;
var percentage: number = (obtainedMarks / totalMarks) * 100;
console.log(`Your percentage is ${percentage}%`);

// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

var days: number = 17;
var weeks = Math.floor(days / 7);
var remainingDays = days % 7;

if (weeks === 0 && remainingDays === 0) {
  console.log("0 weeks and 0 days");
} else if (weeks === 0) {
  console.log(`${remainingDays} days`);
} else if (remainingDays === 0) {
  console.log(`${weeks} weeks`);
} else {
  console.log(`${weeks} weeks and ${remainingDays} days`);
}

// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

var totalPrice: number = 100;

if (totalPrice > 100) {
  var discount_amount: number = totalPrice * 0.1; // 10% discount
  var discounted_price: number = totalPrice - discount_amount;
  console.log(
    `Congratulations! You've received a 10% discount. Your total bill is ${discounted_price}$`
  );
} else {
  var discount_amount: number = totalPrice * 0.05; // 5% discount
  var discounted_price: number = totalPrice - discount_amount;
  console.log(
    `Congratulations! You've received a 5% discount. Your total bill is ${discounted_price}$`
  );
}

// Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."

var age: number = 12;

if (age >= 0 && age <= 12) {
  console.log(`Your age is ${age}, and you are a child.`);
} else if (age >= 13 && age <= 19) {
  console.log(`Your age is ${age}, and you are a teenager.`);
} else {
  console.log(`Your age is ${age}, and you are a adult.`);
}

// Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather

var temperature: string = "hot";
switch (temperature) {
  case "cold":
    console.log("Please wear warm clothes and bundle up.");
    break;
  case "cool":
    console.log("Please wear long sleeves or a light sweater for added warmth.");
    break;
  case "mild":
    console.log("Please wear a t-shirt, blouse, or light sweater.");
    break;
  case "warm":
    console.log("Please wear breathable fabrics such as cotton or linen to stay cool.");
    break;
  case "hot":
    console.log("Please choose lightweight, loose-fitting clothing to allow air circulation.");
    break;
  default:
    console.log("Please enter a valid value.");
    break;
}

// Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.

var num: number = 19;

if (num % 3 === 0 || num % 5 === 0) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(`Your given number ${num} is divisible by both 3 and 5`);
  } else if (num % 3 === 0) {
    console.log(`Your given number ${num} is divisible by only 3`);
  } else {
    console.log(`Your given number ${num} is divisible by only 5`);
  }
} else {
  console.log(`Your given number ${num} is not divisible by 3 or 5`);
}

// Write a program that checks if the given year is leap year or not.

var yearToCheck = 2028;

if ((yearToCheck % 4 == 0 && yearToCheck % 100 != 0) || yearToCheck % 400 == 0) {
  console.log(`${yearToCheck} is a leap year.`);
} else {
  console.log(`${yearToCheck} is not a leap year.`);
}

// Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.

var number: number = 8;

if (number >= 1 && number <= 7) {
  if (number === 1) {
    console.log("Today is Monday");
  } else if (number === 2) {
    console.log("Today is Tuesday");
  } else if (number === 3) {
    console.log("Today is Wednesday");
  } else if (number === 4) {
    console.log("Today is Thursday");
  } else if (number === 5) {
    console.log("Today is Friday");
  } else if (number === 6) {
    console.log("Today is Saturday");
  } else {
    console.log("Today is Sunday");
  }
} else {
  console.log("Please enter a valid number between 1 and 7");
}

// Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
// Where the tax amount will be calculated by the amount of bill.

var units: number = 510;
var amountPerUnit:number = 15;

if (units > 100 && units <= 200) {
  var addTax: number = units * 0.1; // 10% tax
  var totalBill: number = (units + addTax) * amountPerUnit;
  console.log(
    `Your total units is ${units}, and your total bill is ${totalBill} with 10% tax.`
  );
} else if (units > 200 && units <= 500) {
  var addTax: number = units * 0.15; // 15% tax
  var totalBill: number = (units + addTax) * amountPerUnit;
  console.log(
    `Your total units is ${units}, and your total bill is ${totalBill} with 15% tax.`
  );
} else if (units > 500) {
  var addTax: number = units * 0.25; // 25% tax
  var totalBill: number = (units + addTax) * amountPerUnit;
  console.log(
    `Your total units is ${units}, and your total bill is ${totalBill} with 25% tax.`
  );
} else {
  var totalBill: number = units * amountPerUnit;
  console.log(
    `Your total units is ${units}, and your total bill is ${totalBill} with 0% tax.`
  );
}
