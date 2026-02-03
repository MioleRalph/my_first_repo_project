

// calculate the total cost of items
let item1 = 15;
let item2 = 10;
let item3 = 20;

// Output the total cost of items
let totalCost = item1 + item2 + item3;

// display the total cost
console.log(`The total cost of the items is $${totalCost}`);



// calculate the average of three numbers

let num1 = 7;
let num2 = 8;
let num3 = 7;

// Output the average of the three numbers
let average = (num1 + num2 + num3) / 3;

// display the average
console.log(`The average is: ${average.toFixed(2)}`);



// odd or even checker 

let number = 15;

if (number % 2 === 0) {
    // display for even number
    console.log(`${number} is an even number.`);
} else {
    // display for odd number
    console.log(`${number} is an odd number.`);
}



// for calculating discounts

let originalPrice = 100;
let discountPercentage = 20;

// calculate the discounted price
let discountAmount = (originalPrice * discountPercentage) / 100;
let discountedPrice = originalPrice - discountAmount;

// display the discounted price
console.log(`The discounted price is: $${discountedPrice}.`);



// reverse percentage calculation
let finalPrice = 80;
let discount = 20;

// calculate the original price before discount
let originalPriceBeforeDiscount = finalPrice / (1 - discount / 100);

// display the original price before discount
console.log(`The original price before the discount was: $${originalPriceBeforeDiscount}.`);
