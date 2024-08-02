"use strict";

const groceries = [
  { item: "eggs", cost: 5.4, quantity: 1 },
  { item: "cabbage", cost: 2.5, quantity: 2 },
  { item: "chicken (whole)", cost: 15.0, quantity: 1 },
  { item: "avocado", cost: 4, quantity: 5 },
];

const TAX_RATE = 0.07;
let subtotal = 0;

for (const item of groceries) {
  subtotal += item.cost * item.quantity;
}
const total = subtotal * (1 + TAX_RATE);

console.log(subtotal.toFixed(2));
console.log(total.toFixed(2));
