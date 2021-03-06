/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

const area = (l1, l2) => {
  return l1 * l2;
};

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/
const crazySum = (int1, int2) => {
  if (typeof int1 === "number" && typeof int2 === "number") {
    if (int1 === int2) {
      return 3 * (int1 + int2);
    }
  }
};

//console.log(crazySum(3, 3));

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const crazyDiff = (num) => {
  if (typeof num === "number") {
    let absDiff = Math.abs(num - 19);

    if (num > 19) {
      return 3 * absDiff;
    }
  }
};

// console.log(crazyDiff(20));

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/
const boundary = (N) => {
  if ((N >= 20 && N <= 100) || N === 400) {
    return true;
  }
};

// console.log(boundary(29));

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

const strivify = (S) => {
  S = S.charAt(0).toUpperCase() + S.slice(1); // capitalize the first letter
  if (S.startsWith("Strive", 0)) {
    return S;
  } else {
    return "Strive " + S;
  }
};

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = (num) => {
  if (typeof num === "number" && num > 0) {
    if (num % 3 || num % 7) {
      return true;
    } else {
      return false;
    }
  }
};

// console.log(check3and7(18));
/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

const reverseString = (str) => {
  return str.split("").reverse().join("");
};
// console.log(reverseString("Strive"));

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

const upperFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1); // capitalize the first letter
};
//console.log(upperFirst("i am a striver"));

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = (str) => {
  return str.slice(1, -1);
};
// console.log(cutString("hippopotamus"));
/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */
const giveMeRandom = (n) => {
  const randomNumbers = [];
  for (let i = 0; i < n; i++) {
    randomNumbers.push(Math.floor(Math.random() * 10));
  }
  return randomNumbers;
};

//console.log(giveMeRandom(7));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
