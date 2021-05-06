// 1. Get total orders
// * Return the total amount of orders. 

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];
const startingOrder = 0;//so that it starts from 0
const totalOrders = orders.reduce(function(accumulator, current) {
   return accumulator + current.amount;
}, startingOrder);

console.log(totalOrders);// it prints 1075



// #### 2. Increment by 1

const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 

// * Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.

arrayOfNumbers.forEach(function(thing) { 
    console.log(thing + 1);
}); 
//ANSWER: it prints:
// 4
// 46
// 7
// 57
// 8
// 10

//with map to return an new array with the increment numbers
const array_increment = arrayOfNumbers.map(x => x + 1); 
console.log(array_increment); 
//or
console.log(arrayOfNumbers.map(x => x+1)); 

// #### 3. Filter Evens
// * Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

//this is onw way:

function filterEvens(arr) {
    let result = arr.filter(x => x % 2 == 0);
    return result;
  }

  console.log(filterEvens([1,2,3,11,12,13]));//[ 2, 12 ]
  console.log(filterEvens([22,2,31,110,6,13]));//[ 22, 2, 110, 6 ]


  //this is another way creating my own filter

function applyFilter(array, testCallback) {
    const passed = [];
    for (const element of array) {
        if (testCallback(element)) {
            passed.push(element);
        }
    }
    return passed;
}

function filterEvens(arr) {
    let result = applyFilter(arr, x => x % 2 == 0);
    return result;
  }

console.log(filterEvens([1,2,3,11,12,13]));//[ 2, 12 ]
console.log(filterEvens([22,2,31,110,6,13]));//[ 22, 2, 110, 6 ]


// #### 4. Filter Friends
// * Given an array, create a function which filters array based on a search query.

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

function filterItems(arr, string) {
    return arr.filter(word => word.includes(string));
   
  }

console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];


// #### 5. Sum Up
// * Write a function called sum that uses the reduce method to sum up an array of numbers. 

//with arrow function
const sum = arr => arr.reduce((a, b) => a + b, 0);
console.log(sum([1,2,3,4,5]));//returns 15
console.log(sum([6,7,7])); //returns 20

//with normal function
function sum1(arr) {
    return arr.reduce((a, b) => a + b, 0); 
} 

console.log(sum1([1,2,3,4,5]));//returns 15
console.log(sum1([6,7,7])); //returns 20


// #### 6. Square Root
// * Given an array of numbers, find the square root of each element in the array.

const arrayOfNum = [ 2353, 34653, 98765, 458574, 856];
const squareRoot = arr => {
    return arr.map(function (x) {
      return Math.pow(x, 2);
    });
  }
  console.log(squareRoot(arrayOfNum));//[ 5536609, 1200830409, 9754525225, 210290113476, 732736 ]

  //or like this!!
const squareRoot1 = array =>  array.map(x => x ** 2);

console.log(squareRoot1(arrayOfNum));//[ 5536609, 1200830409, 9754525225, 210290113476, 732736 ]