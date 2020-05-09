/*
Create a Function that Reverses a String:
'Hi My name is Francis' should be:
'sicanrF si eman yM iH'
*/
function reverse(str) {
  // Check Input:
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Hmm That is not Good';
  }

  // Operations:
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >=0; i--) {
    backwards.push(str[i]);
  };
  // console.log(backwards);
  return backwards.join('');
}

function reverse2(str) {
  return str.split('').reverse().join('');
};

const reverseES6 = str => str.split('').reverse().join('');

const reverseES6Plus = str => [...str].reverse().join('');

console.log('Reverse 1: ',reverse('Hi My name is Francis'));
console.log('Reverse 2: ',reverse2('Hi My name is Francis'));
console.log('Reverse ES6: ',reverseES6('Hi My name is Francis'));

console.log('Reverse ES6 Plus: ',reverseES6Plus('Hi My name is Francis'));