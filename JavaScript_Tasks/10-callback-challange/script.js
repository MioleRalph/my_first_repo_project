// 1. Custom Map Function
let numbers = [1, 2, 3];
let doubled = customMap(numbers, function(num) { return num * 2; });

function customMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        //push the result to the new array
        result.push(callback(arr[i], i, arr)); 
    }
    return result;
}

console.log(doubled); 


// 2. Filter Function
let filteredResult = filter([1,2,3,4,15], function(val) { return val < 10; });

function filter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        // check if the element satisfies the condition
        if (callback(arr[i], i, arr)) { 
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(filteredResult); 


// 3. Some Function
let someResult = some([1,2,3,4], function(val) { return val > 5; });

function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        //return true if condition is met
        if (callback(arr[i], i, arr)) { 
            return true;
        }
    }
    return false; // If no element satisfies the condition, return false
}
console.log(someResult); 


// 4. Every Function
let everyResult = every([1,2,3], function(val) { return val > 0; });

function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        //will return false if condition is met
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true; 
}
console.log(everyResult);

// 5. Reduce Function
let sum = reduce([1,2,3], function(acc, num) { return acc + num; }, 0);

function reduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0]; 
    // Determine start index based on initial value
    let startIndex = initialValue !== undefined ? 0 : 1; 
    for (let i = startIndex; i < arr.length; i++) {
        // Apply callback function for accumulation
        accumulator = callback(accumulator, arr[i], i, arr); 
    }
    return accumulator;
}
console.log(sum); 

// 6. Includes Check
let includesResult = includes([1,2,3], function(val) { return val === 2; });

function includes(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) { 
            return true;
        }
    }
    return false; 
}
console.log(includesResult); 
