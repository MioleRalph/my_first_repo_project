// Task 1: Create and Use an Object

let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    isRead:false
};

// for the dot notation
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.isRead);

// for the bracket notation
console.log(book["title"]);
console.log(book["author"]);
console.log(book["pages"]);
console.log(book["isRead"]);

// update the isRead property to true and new property genre
book.isRead = true;
book.genre = "Fiction";

// Print the updated book object
console.log("Updated book details:", book);


// =================================================================================
// Task 2: Create and Modify an Array of Objects

let movies = [
    {title: "Ready Player One", director: "Steven Spielberg", year: 2018},
    {title: "Inception", director: "Christopher Nolan", year: 2010},
    {title: "The Matrix", director: "The Wachowskis", year: 1999}
];

//display the title of the second movie
console.log("The title of the second movie is :", movies[1].title);

//add a new movie object to the array
movies.push({title: "Interstellar", director: "Christopher Nolan", year: 2014});

//add a new movie in the list
movies.push({title: "The Dark Knight", director: "Christopher Nolan", year: 2008});

// to update the year of the first movie to 2023
movies[0].year = 2023;

// to print the entre updated movies array
console.log("Updated movies list:", movies);


// =================================================================================
// Task 3: Combine Objects and Arrays

let student = {
    name: "Ralph Miole",
    age: 24,
    subjects: ["Mathematics", "Physics", "Computer Science"]
};

//print the first subject
console.log("First subject:", student.subjects[0]);

//add a new subject to the subjects array
student.subjects.push("Chemistry");

// print the updated student object
console.log("Updated student object:", student);


// =================================================================================
// Task 4: Challenge Task (Optional)
let recipe = {
    name: "Lumpia",

    ingredients: [
        { name: "Ground pork", quantity: "1 pound" },
        { name: "Lumpia wrapper", quantity: "50 pieces" },
        { name: "Cooking oil", quantity: "3 cups" },
        { name: "Onion", quantity: "2 pieces" },
        { name: "Eggs", quantity: "2 pieces" },
        { name: "Ground black pepper", quantity: "1 teaspoon" }
    ],
    isVegitarian: false
};

// add new ingredient in the ingredients array
recipe.ingredients.push({ name: "Garlic", quantity: "3 cloves" });

// Print the name of the second ingredient
console.log("Second ingredient:", recipe.ingredients[1].name);

// Print the entire recipe object
console.log("Full recipe details:", recipe);