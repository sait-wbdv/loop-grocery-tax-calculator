"use strict";

const groceries = [
  { item: "eggs", cost: 5.4, quantity: 1 },
  { item: "cabbage", cost: 2.5, quantity: 2 },
  { item: "chicken (whole)", cost: 15.0, quantity: 1 },
  { item: "avocado", cost: 4, quantity: 5 },
];

const TAX_RATE = 0.07;
let subtotal = 0;

// loop through the groceries
// calculate the amount for each item
// add the value to the subtotal

const total = subtotal * (1 + TAX_RATE);

// log the subtotal as well as the total to the console. but only display the values to 2 decimal points
