const assertEqual = require('../assertEqual');

if (assertEqual('Lighthouse Labs', 'Bootcamp') === '🛑 Assertion Failed: \'Lighthouse Labs\' !== \'Bootcamp\'') {
  console.log('Test Passed!');
} else {
  console.log('Test Failed!');
}
