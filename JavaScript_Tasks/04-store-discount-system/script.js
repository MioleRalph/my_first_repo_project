let customerType = "member";
let purchaseAmount = 300;
let discount = 0;

// to check if the customer is a member or non-member to check the purchase amount and apply the appropriate discount
if (customerType === "member" && purchaseAmount >= 1000) {
    discount = 20;
}else if (customerType === "member" && purchaseAmount >= 500) {
    discount = 10;
}else if (customerType === "member") {
    discount = 5;
}else if (customerType === "non-member" && purchaseAmount >= 1000) {
    discount = 10;
}  else if (customerType === "non-member" && purchaseAmount >= 500) {
    discount = 5;
}else {
    discount = 0;
}

// console.log(`Customer Type: ${customerType}`);
// console.log(`Purchase Amount: $${purchaseAmount}`);
// console.log(`Discount Applied: ${discount}%`);

// to calculate the final price after applying the discount
let discountAmount = (purchaseAmount * discount) / 100;
let finalPrice = purchaseAmount - discountAmount;

// to display the final price after applying the discount
console.log(`Customer Type: ${customerType}`);
console.log(`Purchase Amount: $${purchaseAmount}`);
console.log(`Discount Applied: ${discount}%`);
console.log(`Total Price after Discount: $${finalPrice}`);