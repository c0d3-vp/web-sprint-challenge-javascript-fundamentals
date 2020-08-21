// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


// const external = "I'm outside the function";

// function mction() {
//   console.log(external);
//   const internal = "Hello! I'm inside myFunction!";

//   function nestedFunction() {
//     console.log(internal);
//   };
//   nestedFunction();
// }
// myFunction();

// Explanation: 
// Even though the variable internal is inside the function myFunction, nestedFunction can access it because of scope.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(param) {
  let result = 0;
  for (let i = 0; i < param; i--){
    result -= param[i];
  }
  return result;
}

console.log(summation(4));

