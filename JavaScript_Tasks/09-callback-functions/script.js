
// Task 1: Custom Array Filter

function customFilter(arr, callback) {
    var result = [];
    for(var i = 0; i< arr.length; i++){
        if(callback(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers);  // Output: [2, 4, 6]


// Task 2: Countdown Timer

function countdown(start, callback){
    let interval = setInterval(function(){
        callback(start);
        if(start === 0){
            clearInterval(interval);
        }
        start--;
    },1000);
}
function displayNumber(num){
    console.log(num);
}
countdown(5, displayNumber)


// Task 3: Simple Event Listener

function createButton(buttonText, callback) {
    const button = document.createElement("button");
    button.textContent = buttonText;
    button.onclick = callback;

    document.body.appendChild(button);
}

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("Click Me", buttonClicked);


// Task 4: Task Runner

function runTasks(tasks) {
    let index = 0;
    function executeNext() {
        if (index < tasks.length) {
            tasks[index]();
            index++;
            setTimeout(executeNext, 1000);
        }
    }
    executeNext();
}

function task1() {
    console.log("Task 1 completed");
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");
}

runTasks([task1, task2, task3]);
