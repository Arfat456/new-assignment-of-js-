// chapter no 21

// Question no 1
// var allLower = userInput.toLowerCase();

// Question no 2
// x = x.toLowerCase();

// Question no 3
// y = y.toUpperCase();

// Question no 4
// var originalString = "Hello, World!";
// var lowerCaseString = originalString.toLowerCase();

// Question no 5
// var myArray = ["Hello", "World"];
// var newArrayElement = myArray[0].toLowerCase();

// Question no 6
// var myString = "Hello, World!";
// var upperCaseString = myString.toUpperCase();

// alert(upperCaseString);

// Question no 7
// var cityName = "kaRacHi";
// var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// console.log(capitalizedCityName);


// chapter no 22-25

// Question no 1
// var sameWords = "captain";
// var slicedText = sameWords.slice(1, 3);  // Slicing from index 1 to (3-1) = index 2

// console.log(slicedText);

// Question no 2
// var sameWords = "captain";
// var numberOfCharacters = sameWords.length;

// console.log(numberOfCharacters);

// Question no 3
// var animal = "elephant";
// var seg = animal.slice(1, 5);

// console.log(seg);

// Question no 4
// var myString = "example";
// var numberOfCharacters = myString.length;

// console.log(numberOfCharacters);

// Question no 5
// var originalString = "example";
// var numberOfCharacters = originalString.length;

// console.log("Number of characters:", numberOfCharacters);
// var slicedString = originalString.slice(1, -3);

// console.log("Sliced string:", slicedString);

// Question no 6
// var text = "To be or not to be.";
// var indx = text.indexOf("be");

// Question no 7
// var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");

// Question no 8
// var text = "Let's go, go, go!";
// var indx = text.lastIndexOf("go");

// if (indx !== -1) {
//     indx = text.lastIndexOf("go", indx);
// }

// console.log("Index of the first character of the last instance of 'go':", indx);

// Question no 9
// if (myString.charAt(indexNum) !== '') {
//     // Your code here if the character at indexNum 
// }

// Question no 10
// var myString = "abcde";
// var characterAtIndex2 = myString.charAt(2);

// console.log(characterAtIndex2); 

// Question no 11
// var text = " text";
// var cha = text.charAt(9);

// console.log(cha);

// Question no 12
// var str = "Hello, World!";
// var x = str.charAt(str.length - 1);

// console.log(x);

// Question no 13
// var input = "ExampleString";
// var cha = input.charAt(4);

// console.log(cha);

// Question no 14
// var myString = "example";
// var particularCharacter = 'a';

// if (myString.charAt(2) === particularCharacter) {
//     // Your code here 
// }

// Question no 15
// # Original string
// reply = "no, not now, maybe later"

// # Declare an empty array
// char_array = []

// # Iterate through each character in the string and assign to the array
// for char in reply:
//     char_array.append(char)

// # Replace the first instance of "no" with "yes" in the original string
// revisedReply = reply.replace("no", "yes", 1)

// # Print the original array and the revised string
// print("Original Array:", char_array)
// print("Revised String:", revisedReply)

// Question no 16
// # Original string
// str_value = "123, 456, 789, 123"

// # Replace the first instance of "1" with "one" in the original string
// newStr = str_value.replace("1", "one", 1)

// # Print the revised string
// print("Revised String:", newStr)

// Queston no 17
// var y = x.replace(/a/g, "z");


// chapter no 26

// Question no 1
// rounded_number = round(3.14159)

// Question no 2
// import math

// origNum = 7.89
// roundNum = math.ceil(origNum)

// Question no 3
// import math

// origNum = 7.89
// roundNum = math.floor(origNum)

// Question no 4
// origNum = 7.89
// roundNum = round(origNum)

// Question no 5
// import math

// value = 0.5
// rounded_value = math.floor(value)


// chapter no 27

// Question no 1
// var randomNum = Math.random();
// var scaledNum = Math.floor(randomNum * 50) + 1;

// console.log(scaledNum);

// Question no 2
// var randomNum = Math.random();

// console.log(randomNum);

// Question no 3
// function rollDice() {
//     var diceValue = Math.floor(Math.random() * 6) + 1;
    
//     return diceValue;
// }

// var result = rollDice();
// console.log("You rolled a " + result);

// Question  no 4
// function tossCoin() {
//     var randomNum = Math.random();
//     var result = randomNum < 0.5 ? "Heads" : "Tails";

//     return result;
// }

// var tossResult = tossCoin();
// console.log("The coin landed on: " + tossResult);



// chapter no 28-29

// Question no 1
// var str = "123";
// var number = parseInt(str);

// console.log(number); 

// Question no 2
// function convertStringToInteger() {
//     var str = "123";
//     var number = parseInt(str);
//     return number;
// }

// var result = convertStringToInteger();
// console.log(result); 

// Question no 3
// var str = "123.45";
// var floatingPointNumber = parseFloat(str);

// console.log(floatingPointNumber); 

// var str = "456";
// var floatingPointNumber = parseFloat(str);

// console.log(floatingPointNumber); 

// Question  no 4
// var str = "123";

// if (!isNaN(parseInt(str))) {
//     var integerValue = parseInt(str);
//     console.log("Conversion to integer successful:", integerValue);
// } else {
//     console.log("Cannot convert to integer");
// }

// var str = "123";

// if (/^\d+$/.test(str)) {
//     var integerValue = parseInt(str);
//     console.log("Conversion to integer successful:", integerValue);
// } else {
//     console.log("Cannot convert to integer");
// }

// var str = "123.45";

// if (!isNaN(parseFloat(str))) {
//     var decimalValue = parseFloat(str);
//     console.log("Conversion to decimal successful:", decimalValue);
// } else {
//     console.log("Cannot convert to decimal");
// }

// var str = "123.45";

// if (/^-?\d*\.?\d+$/.test(str)) {
//     var decimalValue = parseFloat(str);
//     console.log("Conversion to decimal successful:", decimalValue);
// } else {
//     console.log("Cannot convert to decimal");
// }

// Question no 5
// var number = 123;

// var stringNumber = number.toString();

// console.log(stringNumber); 

// var number = 456;

// var stringNumber = String(number);

// console.log(stringNumber);

// Question no 6
// function convertNumberToString() {
//     var number = 42;
//     var stringRepresentation = String(number);
//     return stringRepresentation;
// }

// var result = convertNumberToString();
// console.log(result); // Output: "42"


// Question no 7
// var decimalString = "3.14";
// var integerValue = parseInt(decimalString);

// console.log(integerValue); // Output: 3

// var floatValue = parseFloat(decimalString);
// console.log(floatValue); // Output: 3.14

// var roundedValue = Math.round(floatValue);
// // console.log(roundedValue); // Output: 3


// chapter no 30

// Question no 1
// var num = 3.14159265359;

// var newNum = num.toFixed(4).toString();

// console.log(newNum); // Output: "3.1416"

// Question no 2
// var num = 3.14159265359;

// num = Number(num.toFixed(2).toString());

// console.log(num); // Output: 3.14


// Question no 3
// if (num.toFixed(2).toString().length > 4) {
//     console.log("Number has more than 4 characters.");
// } else {
//     console.log("Number has 4 or fewer characters.");
// }

// Question no 4
// var originalNumber = 12.3456789;

// var roundedString = originalNumber.toFixed(2).toString();

// alert("Rounded and converted to string: " + roundedString);


// chapter no 31-34

// Question no 1
// var dObj = new Date();

// Question no 2
// var dStr = new Date().toString();

// Question no 3
// var d = new Date();
// var day = d.toLocaleDateString('en-US', { weekday: 'long' });

// Question no 4
// var d = new Date();
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var dayIndex = d.getDay();

// alert("Today is " + dayNames[dayIndex] + " (Index: " + dayIndex + ")");

// Question no 5

// var currentDate = new Date();
// var dateTimeInfo = currentDate.toLocaleString();

// console.log(dateTimeInfo);

// Question no 6
// var later = new Date(2020, 11, 31);

// Question no 7
// var myDate = new Date(1992, 1, 2);

// Question no 8
// alert(new Date('1980-01-01').getTime());

// Queston no 9
// var currentDate = new Date();

// currentDate.setFullYear(2023);

// console.log(currentDate);

// Question no 10
// function changeMonthToJanuary(inputDate) {
//     var newDate = new Date(inputDate);

//     newDate.setMonth(0);

//     return newDate;
// }

// // Example :
// var originalDate = new Date(2022, 6, 15); 
// var newDate = changeMonthToJanuary(originalDate);

// console.log("Original Date:", originalDate.toDateString());
// console.log("Date with Month changed to January:", newDate.toDateString());

// Question  no 11
// function changeDayOfWeek(inputDate, newDayOfWeek) {
//     var newDate = new Date(inputDate);

//     var difference = newDayOfWeek - newDate.getDay();
//     if (difference !== 0) {
//         newDate.setDate(newDate.getDate() + difference);
//     }

//     return newDate;
// }

// // Example :
// var originalDate = new Date(2022, 0, 15); 
// var newDate = changeDayOfWeek(originalDate, 3);

// console.log("Original Date:", originalDate.toDateString());
// console.log("Date with Day of the Week changed:", newDate.toDateString());

// Question  no 12
// function changeMinutes(inputTime) {
//     var newTime = new Date(inputTime);

//     var newMinutes = prompt("Enter the new minutes value:");

//     if (!isNaN(newMinutes) && newMinutes >= 0 && newMinutes < 60) {
//         newTime.setMinutes(newMinutes);
//         return newTime;
//     } else {
//         alert("Invalid minutes value. Please enter a number between 0 and 59.");
//         return inputTime; 
//     }
// }

// // Example :
// var originalTime = new Date(); 
// var newTime = changeMinutes(originalTime);

// console.log("Original Time:", originalTime.toTimeString());
// console.log("Time with Minutes changed:", newTime.toTimeString());

// Question no 13
// function addHours(inputTime, hoursToAdd) {
//     var newTime = new Date(inputTime);

//     newTime.setHours(newTime.getHours() + hoursToAdd);

//     return newTime;
// }

// // Example :
// var originalTime = new Date(); 
// var hoursToAdd = parseInt(prompt("Enter the number of hours to add:"));

// if (!isNaN(hoursToAdd)) {
//     var newTime = addHours(originalTime, hoursToAdd);

//     console.log("Original Time:", originalTime.toTimeString());
//     console.log("Time with Hours added:", newTime.toTimeString());
// } else {
//     alert("Invalid input. Please enter a valid number of hours.");
// }

// Question  no 14
// function calculateAge() {
//     var birthdateString = prompt("Enter your birthdate (YYYY-MM-DD):");

//     var birthdate = new Date(birthdateString);

//     if (isNaN(birthdate.getTime())) {
//         alert("Invalid birthdate. Please enter a valid date in the format YYYY-MM-DD.");
//         return;
//     }

//     var currentDate = new Date();

//     var age = currentDate.getFullYear() - birthdate.getFullYear();

//     if (currentDate.getMonth() < birthdate.getMonth() || (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
//         age--;
//     }

//     alert("Your age is: " + age + " years");
// }

// calculateAge();


// chapter no 35-37

// Question no 1
// function displayAlert() {}

// Question no 2
// function askName() {
//     var userName = prompt("Enter name");
//     return userName;
// }

// // Example:
// var user = askName();
// console.log("Hello, " + user + "!");

// Question no 3
// function function1() {
//     console.log("This is function1");
// }

// function function2() {
//     console.log("This is function2");
// }

// function callTwoFunctions() {
//     function1();
//     function2();
// }

// callTwoFunctions();

//Question no 4
// function displayAndAlertName() {
//     var userName = prompt("Enter name");
//     alert("Hello, " + userName + "!");
// }

// displayAndAlertName();

// Question no 5
// function concat(a, b, c, variableArg, stringArg, numberArg) {
// // Example
// concat('a', 'b', 'c', myVariable, 'Hello', 42);

// Question  no 6
// function concatenateAndAssign(param1, param2) {
//     var result = param1 + param2;
//     return result;
// }

// // Example :
// var concatenatedString = concatenateAndAssign("Hello, ", "world!");
// console.log(concatenatedString);

// Question  no 7
// function multiplyAndAssign(param1, param2, param3) {
//     var result = param1 * param2 * param3;
//     return result;
// }

// // Example :
// var multipliedResult = multiplyAndAssign(2, 3, 4);
// console.log(multipliedResult);

// Question  no 8
// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//         return 0; 
//     }

//     var sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }

//     var average = sum / numbers.length;
//     return average;
// }

// // Example :
// var numbersArray = [10, 20, 30, 40, 50];
// var result = calculateAverage(numbersArray);
// console.log("The average is:", result);

// Question no 9
// function calculateSum(a, b) {
//     return a + b;
// }

// // Example :
// var num1 = 5;
// var num2 = 10;
// var sum = calculateSum(num1, num2);
// console.log("The sum is:", sum);

// Question no 10
// function calculateAverage(numbers) {
//     if (numbers.length === 0) {
//         return 0;
//     }

//     var sum = numbers.reduce(function (total, currentNumber) {
//         return total + currentNumber;
//     }, 0);

//     var average = sum / numbers.length;
//     return average;
// }

// // Example :
// var numbersArray = [10, 20, 30, 40, 50];
// var result = calculateAverage(numbersArray);
// console.log("The average is:", result);

// Question no 11
// function calculateSum(a, b) {
//     return a + b;
// }

// var result = calculateSum(5, 10);

// console.log("The sum is:", result);

// Question  no 12
// function letterCounts(word) {
//     var counts = {};

//     for (var i = 0; i < word.length; i++) {
//         var letter = word[i].toLowerCase();

//         if (/^[a-z]$/.test(letter)) {
//             counts[letter] = (counts[letter] || 0) + 1;
//         }
//     }

//     return counts;
// }

// // Example :
// var word = "programming";
// var result = letterCounts(word);

// console.log("Letter counts:", result);

// Question  no 13
// function setYearInDate(year) {
//     var currentDate = new Date();
//     currentDate.setFullYear(year);
//     return currentDate;
// }

// // Example :
// var newDate = setYearInDate(2023);
// console.log("Updated Date:", newDate);

// Question  no 14
// function calculateAge(dateOfBirth) {
//     var today = new Date();
//     var birthDate = new Date(dateOfBirth);

//     var age = today.getFullYear() - birthDate.getFullYear();
//     var monthDiff = today.getMonth() - birthDate.getMonth();

//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }

//     return age;
// }

// // Example :
// var dateOfBirth = "1990-05-15";
// var personAge = calculateAge(dateOfBirth);

// console.log("The person is", personAge, "years old.");

// Question no 15
// function isWordInArray(word, namesArray) {
//     return namesArray.includes(word);
// }

// // Example :
// var namesArray = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
// var wordToCheck = 'raza';
// var isPresent = isWordInArray(wordToCheck, namesArray);

// console.log("Is '" + wordToCheck + "' present in the array? " + isPresent);

// Question  no 16
// function repeatLetter(letter, times) {
//     return letter.repeat(times);
// }

// // Example :
// var letterToRepeat = 'a';
// var repeatedString = repeatLetter(letterToRepeat, 10);

// console.log(repeatedString);

// Question no 17
// function reverseArray(arr) {
//     return arr.reverse();
// }

// // Example :
// var originalArray = ['a', 'b', 'c', 'd', 'e'];
// var reversedArray = reverseArray(originalArray);

// console.log("Original Array:", originalArray);
// console.log("Reversed Array:", reversedArray);


// chapter no 38

// Question no 1
// function demonstrateLocalVariable() {
//     var localVar = "I am a local variable";

//     console.log(localVar);

//     // You can perform any operations using localVar within this function
//     // ...

// }

// demonstrateLocalVariable();
// // console.log(localVar); // Uncommenting this line will result in an error

// Question  no 2
// var globalVar = "I am a global variable";

// function accessGlobalVariable() {
    
//     console.log(globalVar);
// }

// accessGlobalVariable();


// chapter no 39-40

// Question no 1
// var dayOfWeek = "Wednesday";

// switch (dayOfWeek) {
//     case "Monday":
//         console.log("It's the start of the week.");
//         break;
//     case "Wednesday":
//         console.log("It's the middle of the week.");
//         break;
//     case "Friday":
//         console.log("It's almost the weekend.");
//         break;
//     default:
//         console.log("It's a regular day.");
// }

// Question no 2
// var cityName = prompt("Enter the city name:");

// switch (cityName.toLowerCase()) {
//     case "paris":
//         alert("You entered Paris! The city of lights.");
//         break;
//     case "new york":
//         alert("You entered New York! The city that never sleeps.");
//         break;
//     case "tokyo":
//         alert("You entered Tokyo! The bustling metropolis.");
//         break;
//     default:
//         alert("City not recognized. Please enter a valid city name.");
// }
