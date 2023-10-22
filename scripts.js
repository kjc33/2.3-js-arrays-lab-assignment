/*
Exercise 1:
  - Define an empty array named foods
*/

const foods = [];  

/*
Exercise 2:
  - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
*/

foods.push("pizza", "cheeseburger");

/*
Exercise 3:
  - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
*/

foods.unshift("taco");

/*
Exercise 4:
  - Access the string 'pizza' (based upon its known position) in the foods array and assign to a variable named favFood.
*/

const favFood = foods[1];

/*
Exercise 5:
  - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
*/

foods.splice(2, 0, "tofu");

/*
Exercise 6:
  - Replace the string 'pizza' in the foods array with the strings 'sushi' & 'cupcake'.
*/

foods[1] = 'sushi';
foods[2] = 'cupcake';

/*
Exercise 7:
  - Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
  - Assign the new array to a variable named yummy.
*/

const yummy = foods.slice(1,3);

/*
Exercise 8:
  - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
*/

const soyIdx = foods.indexOf("tofu");

/*
Exercise 9:
  - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
    'taco -> sushi -> cupcake -> tofu -> cheeseburger'
*/

const allFoods = foods.join( " -> " );

/*
Exercise 10:
  - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
*/

const hasSoup = foods.includes("soup");

/*
Exercise 11:
  - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
  - Hint: Initialize the odds variable to an empty array before the iteration.
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

let odds = [];

nums.forEach(oddNum);

function oddNum(value) {
  if (value % 2 !== 0) {
    odds.push(value);
  }
}

console.log(odds);

/*
Exercise 12:
  - Use the forEach method to iterate through the same nums array and add the number to arrays named fizz, buzz and/or fizzbuzz based upon the following:
  	- Add to the fizz array if the number is evenly divisible by 3.
  	- Add to the buzz array if the number is evenly divisible by 5.
  	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
*/

console.log(nums);

const fizz = [];
const buzz = [];
const fizzbuzz = [];

nums.forEach(fizzBuzz);

function fizzBuzz(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    fizzbuzz.push(value);
  } else if (value % 3 === 0 && value % 5 !== 0) {
    fizz.push(value);
  } else {
    buzz.push(value);
  }  
}

console.log(fizz);
console.log(buzz);
console.log(fizzbuzz);

/*
Exercise 13:
  - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
  - Assume you don't know how many nested arrays numArrays contains.
*/

const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90],
  ];
  
  const numList = numArrays[numArrays.length -1];
  console.log(numList);

/*
Exercise 14:
  - Given the above numArrays array, access the number 66 and assign to a variable named num.
*/

const num = numArrays[2][1];
console.log(num);

/*
Exercise 15:
  - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.
  - Hint: Be sure to declare and initialize the total variable before the iterations.
*/

let total = 0;

numArrays.forEach(function (innerArr) {
  innerArr.forEach(function (number) {
    total += number;
  });
});

console.log(total);