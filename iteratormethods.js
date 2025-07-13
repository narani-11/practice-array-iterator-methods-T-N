// Task 1: Using forEach()
// 1. Create an array of five of your favorite cities.
let cities = ["New York", "Paris", "Tokyo", "Barcelona", "Sydney"];
// 2. Use forEach() to log each city name to the console in uppercase.
cities.forEach(city => {
    console.log(city.toUpperCase());
});
/*
Output:
NEW YORK
PARIS
TOKYO
BARCELONA
SYDNEY
*/
// Task 2: Transforming with map()
// 1. Create an array called numbers with the numbers 1-5.
let numbers = [1, 2, 3, 4, 5];
// 2. Use map() to create an array where each number is squared.
let squares = numbers.map(num => num * num);
// 3. Log the new array.
console.log(squares);
/*
Output:
[1, 4, 9, 16, 25]
*/
// Task 3: Filtering with filter()
// 1. Create an array called scores
let scores = [85, 42, 90, 75, 30, 100];
// 2. Use filter() to create a new array containing only scores >= 80
let highScores = scores.filter(score => score >= 80);
// 3. Log the new array.
console.log(highScores);
/*
Output:
[85, 90, 100]
*/
// Task 4: Finding with find() and findIndex()
// 1. Create an array called favoriteFood
let favoriteFood = ["pizza", "sushi", "ramen", "pasta", "taco", "pie"];
// 2. Use find() to locate the first food with more than 4 letters.
let firstLongFood = favoriteFood.find(food => food.length > 4);
// 3. Use findIndex() to find the index of that food.
let firstLongFoodIndex = favoriteFood.findIndex(food => food.length > 4);
// Log the results
console.log(firstLongFood);      // Output: "pizza"
console.log(firstLongFoodIndex); // Output: 0
