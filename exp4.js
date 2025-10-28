// 1) Variables and operators

let a = 10;
let b = 20;
let sum = a + b;
console.log("SUM:", sum);

let isGreater = a > b;
console.log("Is a greater than b?", isGreater);

let condition = (a < b) && (b > 15);
console.log("Condition (a < b) && (b > 15):", condition);

// 2) Conditions

if (a > b) {
    console.log("a is greater than b");
} else if (a == b) {
    console.log("a is equal to b");
} else {
    console.log("a is less than b");
}

// 3) Loops

for (let i = 1; i <= 5; i++) {
    console.log("Loop iteration:", i);
}

let j = 0;
while (j < 5) {
    console.log("While loop iteration:", j);
    j++;
}

// 4) Functions
function greetname(name) {
    return "Hello," + name + "!";
}

console.log(greetname("Alice"));

// 5) Events
function onButtonClick() {
    alert("Button was clicked!");
}

// Alternative:- In html file
// <button onclick="showMessage()">Click Me</button>
// <script>
// function showMessage() {
//   alert("Button clicked! Event triggered successfully.");
// }
// </script>

// 6) Classes and Objects

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log("Student Name:", this.name);
        console.log("Student Age:", this.age);
    }
}

let s1 = new Student("Bob", 21);
s1.displayInfo();

// 7) Error Handling

try {
    let result = a / 0;
    if (!isFinite(result)) throw new Error("Division by zero is not allowed.")
} catch (err) {
    console.error("Error occurred:", err.message);
} finally {
    console.log("Execution completed.");
}

// 8) Validations

function validateEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
        console.log("Valid email address.", email);
    } else {
        console.log("Invalid email format")
    }
}

validateEmail("example@gmail.com");
validateEmail("wrongemail");

// 9) Arrays

let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Date");
console.log("Fruits array:", fruits);
console.log("First fruit:", fruits[0]);

fruits.forEach((fruit, index) => {
    console.log(`Fruit ${index + 1}: ${fruit}`)
});

// 10) Strings

let message = "Hello, World!";
console.log("Message length:", message.length);
console.log("Uppercase message:", message.toUpperCase());
console.log("Substring (0,5):", message.substring(0, 5));

// 11) Date

let today = new Date();
console.log("Today's date:", today);
console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1); // Months are zero-based
console.log("Day:", today.getDate());
