const num1 = 5;
const num2 = 10;

function addValues() {
  console.log(`the sum is = ${num1 + num2}`);
}

addValues(); // this will get executed when its called by other modules
// so it will show up in the output even if its not exclusively mentioned in the module which called it
