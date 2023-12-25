// QUESTION 1

// function reverseString(reverse) {
//     let reversed = '';
  
//     for (let i = reverse.length - 1; i >= 0; i--) {
//       reversed += reverse[i];
//     }
  
//     return reversed;
//   }

//   const oneString = 'Rititka';
//   const reversedString = reverseString(oneString);
  
//   console.log(reversedString);


// // QUESTION 2

// function countVowels(str) {
//     // Convert the string to lowercase to handle both uppercase and lowercase vowels
//     str = str.toLowerCase();

//     let vowelCount = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];n

//     for (let char of str) {
//         if (vowels.includes(char)) {
//             vowelCount++;
//         }
//     }

//     return vowelCount;
// }

// // Example: Count vowels in the string "Hello, World!"
// const inputString = "Hello, World!";
// const numberOfVowels = countVowels(inputString);
// console.log(`The number of vowels in "${inputString}" is: ${numberOfVowels}`);

// // QUESTION 3
const school="army public school"

const words= school.split(' ');


for(let i=0; i <words.length; i++)
words[i]=words[i][0].toUpperCase()+ words[i].slice(1);


const result = words.join(" ")
console.log(result);

// // QUESTION 4

// // const word = "Tibet";
// // const lowercaseWord = word.toLowerCase(); 
// // const reversedWord = lowercaseWord.split('').reverse().join('');

// // if (lowercaseWord === reversedWord) {
// //   console.log(`${word} is a palindrome.`);
// // } else {
// //   console.log(`${word} is not a palindrome.`);
// // }


// // QUESTION 5
// // const numbers = [-2,-2,-3,-4,-6,-7,-8]
// // const sumOFFPositivities = numbers.reduce((sum,numbers)=>{
// //     if (numbers >0 ) {
// //         return sum + number;
// //     }else{
// //         return sum;
// //     }
// // },0);
// // console.log("Sum of possitive numbers are:",sumOFFPositivities);


// // QUESTION 6
// // const numbers = [10, 20, 30, 40, 30, 50];
// // const elementToFind = 30;

// // const indexOfElement = numbers.indexOf(elementToFind);


// //   console.log(`The index of the first occurrence of ${elementToFind} is: ${indexOfElement}`);

// // QUESTION 7
// // function removeDuplicates(arr) {
// //     const uniqueArray = [];
  
// //     for (let i = 0; i < arr.length; i++) {
// //       if (uniqueArray.indexOf(arr[i]) === -1) {
// //         uniqueArray.push(arr[i]);
// //       }
// //     }
  
// //     return uniqueArray;
// //   }
  
// //   // Example usage
// //   const originalArray = [1, 2, 3, 4, 2, 5, 6, 1];
// //   const newArrayWithoutDuplicates = removeDuplicates(originalArray);
  
// //   console.log(newArrayWithoutDuplicates);

// // QUESTION 8
// // function bubbleSortAscending(arr) {
// //     const len = arr.length;
  
// //     for (let i = 0; i < len - 1; i++) {
// //       for (let j = 0; j < len - 1 - i; j++) {
// //         if (arr[j] > arr[j + 1]) {
          
// //           const temp = arr[j];
// //           arr[j] = arr[j + 1];
// //           arr[j + 1] = temp;
// //         }
// //       }
// //     }
  
// //     return arr;
// //   }
  
  
// //   const originalArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// //   const sortedAscending = bubbleSortAscending([...originalArray]);
  
// //   console.log('Sorted in Ascending Order:', sortedAscending);

// //   //decending
// //   function bubbleSortDescending(arr) {
// //     const len = arr.length;
  
// //     for (let i = 0; i < len - 1; i++) {
// //       for (let j = 0; j < len - 1 - i; j++) {
// //         if (arr[j] < arr[j + 1]) {
// //           // Swap elements if they are in the wrong order
// //           const temp = arr[j];
// //           arr[j] = arr[j + 1];
// //           arr[j + 1] = temp;
// //         }
// //       }
// //     }
  
// //     return arr;
// //   }
  
// //   // Example usage
// //   const sortedDescending = bubbleSortDescending([...originalArray]);
  
// //   console.log('Sorted in Descending Order:', sortedDescending);

// // QUESTION 9

// // let num = 2;

// // while (num <= 20) {
// //     console.log(num);
// //     num += 2;
// // }

// // QUESTION 10

// // function calculateFactorial(number) {
// //     let factorial = 1;
// //     let i = 1;

// //     do {
// //         factorial *= i;
// //         i++;
// //     } while (i <= number);

// //     return factorial;
// // }

// // // Example: Calculate the factorial of 5
// // const numberToFactorial = 5;
// // const result = calculateFactorial(numberToFactorial);
// // console.log(`The factorial of ${numberToFactorial} is: ${result}`);


// // QUESTION 11

// // const myObject = {
// //     name: 'John',
// //     age: 30,
// //     city: 'New York'
// // };

// // for (let property in myObject) {
// //     if (myObject.hasOwnProperty(property)) {
// //         console.log(`${property}: ${myObject[property]}`);
// //     }
// // }

// // QUESTION 12

// // const myArray = [1, 2, 3, 4, 5];
// // const doubledArray = [];


// // for (let element of myArray) {
// //     doubledArray.push(element * 2);
// // }

// // console.log(doubledArray);

// // QUESTION 13

// // function checkEvenOrOdd(number) {
// //     if (number % 2 === 0) {
// //         return `${number} is even.`;
// //     } else {
// //         return `${number} is odd.`;
// //     }
// // }

// // // Example: Check if 7 is even or odd
// // const result = checkEvenOrOdd(7);
// // console.log(result);

// // QUESTION 14

// // function findMaxOfThree(num1, num2, num3) {
// //     const max = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
// //     return `The maximum of ${num1}, ${num2}, and ${num3} is: ${max}`;
// // }

// // // Example: Find the maximum of 7, 12, and 5
// // const maximum = findMaxOfThree(7, 12, 5);
// // console.log(maximum);

// // QUESTION 15

// // function isLeapYear(year) {
// //     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
// //         return `${year} is a leap year.`;
// //     } else {
// //         return `${year} is not a leap year.`;
// //     }
// // }

// // // Example: Check if 2024 is a leap year
// // const result = isLeapYear(2024);
// // console.log(result);