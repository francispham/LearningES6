/* Rules: 
1. Identify the Base Case ( A Conditional Statement )
2. Identify the Recursive Case
3. Get closer and closer and 'return' when needed
=> Usually 2 'return' keywords are needed 
*/ 

let counter = 0;
function inception() {
  if (counter > 3) {
    return 'done!';
  };
  counter++;
  // inception(); => without return keyword, this function will return Undefined
  return inception();
};

inception();