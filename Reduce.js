import { orders } from './index.js';

// Introduce Reduce Method:
let reduceTotalAmount = orders.reduce(function(sum, order) {
                                    // 2nd Argument will be the Iterated Item!  
  console.log('Hello: ', sum, order); 
  return sum + order.amount;
}, 0); // Important: 0 is the Starting Point for sum!
console.log("Total Amount with Reduce: ", reduceTotalAmount);
console.log("---");

// ES6 Reduce Method:
let reduceTotalAmountES6 = orders.reduce((sum, order) => sum + order.amount, 0);
console.log("Total Amount with ES6 Reduce Method: ", reduceTotalAmountES6);
console.log("---");


// For Loop:
let totalAmount = 0;
for (let i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
};
console.log('Total Amount :',totalAmount);
