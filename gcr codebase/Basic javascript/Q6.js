let total = 12000;
let discount = 0;

if (total >= 10000) {
    discount = 25;
} else if (total >= 5000) {
    discount = 15;
} else if (total >= 2000) {
    discount = 5;
}

let discountAmount = Math.round(total * discount / 100);
let finalPrice = Math.round(total - discountAmount);

console.log("Original Total: ₹" + total);
console.log("Discount Percentage: " + discount + "%");
console.log("Discount Amount: ₹" + discountAmount);
console.log("Final Price After Discount: ₹" + finalPrice);