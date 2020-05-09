import fs from 'fs';

const output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .reduce((customers, line) => {
    const name = line.split(' ', 2).join(' ');
    
    const product = line.split(name).pop().replace(/[0-9]/g, '').trim();
    
    const priceQuantity = line.split(product)[1].trim().split(' ')
    
    // customers[name] = []             => customers will return just the last Item with this!
    // Solve:
    customers[name] = customers[name] || []

    customers[name].push({
      product: product,
      price: priceQuantity[0],
      quantity: priceQuantity[1],
    });
    return customers;
  }, {}); // Use {} Object Literal instead of a Number!

console.log("My Beloved Output: ", JSON.stringify(output, null, 2));




  // const alterProduct = line
  //   .split(' ')
  //   .splice(2, 2)
  //   .join(' ')
  //   .toString()
  //   .replace(/[0-9]/g, '')
  //   .trim(); 