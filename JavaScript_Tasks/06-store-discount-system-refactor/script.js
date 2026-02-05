// 1. Write a discount function
function getDiscount(customer_type, purchase_amount) {

    // 4. Input validation and edge cases
    if (typeof purchase_amount !== "number" || purchase_amount <= 0) {
        console.warn("Invalid purchase amount. Treated as 0.");
        purchase_amount = 0;
    }

    if (customer_type !== "member" && customer_type !== "non-member") {
        console.warn("Invalid customer type. Treated as non-member.");
        customer_type = "non-member";
    }


    // Discount rules
    if (customer_type === "member" && purchase_amount >= 1000) {
        return 0.20;
    } else if (customer_type === "member" && purchase_amount >= 500) {
        return 0.10;
    } else if (customer_type === "member" && purchase_amount > 0) {
        return 0.05;
    } else if (customer_type === "non-member" && purchase_amount >= 1000) {
        return 0.10;
    } else if (customer_type === "non-member" && purchase_amount >= 500) {
        return 0.05;
    } else {
        return 0;
    }
}

// 2. Write a final price function
function calculateFinalPrice(purchase_amount, discountRate) {
    let discountAmount = purchase_amount * discountRate;
    let finalPrice = purchase_amount - discountAmount;
    let discountPercent = discountRate * 100;

    return {
        finalPrice: finalPrice,
        discountAmount: discountAmount,
        discountPercent: discountPercent
    };
}


const customers = [
    { name: "Alice", customer_type: "member", purchase_amount: 100 },
    { name: "Brian", customer_type: "member", purchase_amount: 800 },
    { name: "Chloe", customer_type: "non-member", purchase_amount: 1200 },
];

for (let customer of customers) {

    let discountRate = getDiscount(
        customer.customer_type,
        customer.purchase_amount
    );

    let result = calculateFinalPrice(
        Math.max(customer.purchase_amount, 0),
        discountRate
    );

    console.log(
        `${customer.name} (${customer.customer_type}) - ` +

        `Original: $${customer.purchase_amount} → ` +

        `Discount: ${result.discountPercent}% ($${result.discountAmount}) → ` +
        
        `Final: $${result.finalPrice}`
    );

    console.log("--------------------------------------------------");
}


