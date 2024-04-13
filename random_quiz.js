// Define an array of quiz questions with options and correct answers
const quizQuestions = [
    {
        question: "What is the time complexity of bubble sort algorithm?",
        options: ["A) O(n)", "B) O(n^2)", "C) O(log n)", "D) O(n!)"],
        correctAnswer: "B"
    },
    {
        question: "Which data structure uses LIFO (Last-In-First-Out) principle?",
        options: ["A) Queue", "B) Stack", "C) Heap", "D) Linked List"],
        correctAnswer: "B"
    },
    {
        question: "In algorithm analysis, Big O notation describes the _____ bound.",
        options: ["A) Upper", "B) Lower", "C) Exact", "D) None of the above"],
        correctAnswer: "A"
    },
    {
        question: "Dynamic programming is a technique used to solve problems by _____?",
        options: ["A) Repeating computations", "B) Breaking problems into smaller subproblems", "C) Generating random solutions", "D) None of the above"],
        correctAnswer: "B"
    },
    {
        question: "Recursion is a technique where a function calls itself. Which of the following is NOT a requirement for recursion?",
        options: ["A) Base case", "B) Looping structure", "C) Recursive case", "D) All of the above are required"],
        correctAnswer: "B"
    },
    {
        question: "Breadth-First Search (BFS) explores nodes _____.",
        options: ["A) Level by level", "B) Along each branch first", "C) Randomly", "D) None of the above"],
        correctAnswer: "A"
    },
    {
        question: "Which of the following languages supports multiple inheritance?",
        options: ["A) Java", "B) C++", "C) Python", "D) JavaScript"],
        correctAnswer: "B"
    },
    {
        question: "In OOP, polymorphism allows objects of different classes to be treated as objects of a common _____.",
        options: ["A) Subclass", "B) Superclass", "C) Interface", "D) None of the above"],
        correctAnswer: "B"
    },
    {
        question: "Database normalization helps in reducing _____.",
        options: ["A) Readability", "B) Redundancy", "C) Performance", "D) None of the above"],
        correctAnswer: "B"
    },
    {
        question: "Which of the following sorting algorithms has the best average-case time complexity?",
        options: ["A) Bubble Sort", "B) Merge Sort", "C) Selection Sort", "D) Insertion Sort"],
        correctAnswer: "B"
    },
    {
        question: "Which data structure uses FIFO (First-In-First-Out) principle?",
        options: ["A) Stack", "B) Queue", "C) Heap", "D) Tree"],
        correctAnswer: "B"
    },
    {
        question: "In algorithm analysis, Omega notation describes the ____ bound.",
        options: ["A) Upper", "B) Lower", "C) Exact", "D) None of the above"],
        correctAnswer: "B"
    },
    {
        question: "Which of the following is NOT a dynamic programming problem?",
        options: ["A) Fibonacci series", "B) Longest common subsequence", "C) Tower of Hanoi", "D) Knapsack problem"],
        correctAnswer: "C"
    },
    {
        question: "Which of the following is NOT a requirement for recursion?",
        options: ["A) Base case", "B) Recursive case", "C) Looping structure", "D) All of the above are required"],
        correctAnswer: "C"
    },
    {
        question: "Depth-First Search (DFS) explores nodes _____.",
        options: ["A) Level by level", "B) Along each branch first", "C) Randomly", "D) None of the above"],
        correctAnswer: "B"
    },
    {
        question: "Which of the following languages does NOT support multiple inheritance?",
        options: ["A) Java", "B) C++", "C) Python", "D) JavaScript"],
        correctAnswer: "A"
    },
    {
        question: "In OOP, polymorphism allows objects to be treated as their _____.",
        options: ["A) Subclasses", "B) Superclass", "C) Interfaces", "D) None of the above"],
        correctAnswer: "B"
    },
    {
        question: "Database normalization helps in improving _____.",
        options: ["A) Readability", "B) Redundancy", "C) Performance", "D) None of the above"],
        correctAnswer: "C"
    },
    {
        question: "Which of the following sorting algorithms has the worst-case time complexity of O(n^2)?",
        options: ["A) Bubble Sort", "B) Merge Sort", "C) Selection Sort", "D) Quick Sort"],
        correctAnswer: "A"
    },
    {
        question: "Which data structure uses both FIFO and LIFO principles?",
        options: ["A) Queue", "B) Stack", "C) Heap", "D) Linked List"],
        correctAnswer: "D"
    },
    {
        question: "In algorithm analysis, Theta notation describes the ____ bound.",
        options: ["A) Upper", "B) Lower", "C) Exact", "D) None of the above"],
        correctAnswer: "C"
    },
    {
        question: "Which of the following is a classical example of a dynamic programming problem?",
        options: ["A) Fibonacci series", "B) Longest common subsequence", "C) Tower of Hanoi", "D) Knapsack problem"],
        correctAnswer: "D"
    },
    {
        question: "Which of the following is NOT a requirement for recursion?",
        options: ["A) Base case", "B) Recursive case", "C) Looping structure", "D) All of the above are required"],
        correctAnswer: "C"
    },
    {
        question: "Breadth-First Search (BFS) explores nodes _____.",
        options: ["A) Level by level", "B) Along each branch first", "C) Randomly", "D) None of the above"],
        correctAnswer: "A"
    },
    {
        question: "Which of the following languages supports multiple inheritance?",
        options: ["A) Java", "B) C++", "C) Python", "D) JavaScript"],
        correctAnswer: "B"
    },
    {
        question: "In OOP, polymorphism allows objects of different classes to be treated as objects of a common _____.",
        options: ["A) Subclass", "B) Superclass", "C) Interface", "D) None of the above"],
        correctAnswer: "B"
    },
    {
        question: "Database normalization helps in reducing _____.",
        options: ["A) Readability", "B) Redundancy", "C) Performance", "D) None of the above"],
        correctAnswer: "B"
    },
    {
        question: "Which of the following sorting algorithms has the best average-case time complexity?",
        options: ["A) Bubble Sort", "B) Merge Sort", "C) Selection Sort", "D) Insertion Sort"],
        correctAnswer: "B"
    },
    {
        question: "Which data structure uses FIFO (First-In-First-Out) principle?",
        options: ["A) Stack", "B) Queue", "C) Heap", "D) Tree"],
        correctAnswer: "B"
    },
    {
        question: "In algorithm analysis, Omega notation describes the ____ bound.",
        options: ["A) Upper", "B) Lower", "C) Exact", "D) None of the above"],
        correctAnswer: "B"
    },
    {
        question: "Which of the following is NOT a dynamic programming problem?",
        options: ["A) Fibonacci series", "B) Longest common subsequence", "C) Tower of Hanoi", "D) Knapsack problem"],
        correctAnswer: "C"
    }
];

// Function to select a random quiz question
function getRandomQuestion() {
    return quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
}

// Function to generate quiz HTML for the current question
function generateQuizHTML(question) {
    let quizHTML = "<h1>Random Quiz</h1>";
    quizHTML += `<div id="question">
                    <p>${question.question}</p>
                    <form id="quiz-form">`;
    
    question.options.forEach(option => {
        quizHTML += `<input type="radio" name="answer" value="${option.charAt(0)}"> ${option}<br>`;
    });

    quizHTML += `</form>
                    <button id="submit">Check Answer</button>
                    
                </div>`;

    return quizHTML;
}

// Function to check the answer
function checkAnswer(userAnswer, correctAnswer) {
    return userAnswer.toUpperCase() === correctAnswer.toUpperCase();
}

// Display a random quiz question when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    const randomQuestion = getRandomQuestion();
    const quizContainer = document.getElementById("quiz-container");

    if (quizContainer) {
        quizContainer.innerHTML = generateQuizHTML(randomQuestion);

        // Event listener for form submission
        const submitButton = document.getElementById("submit");
        if (submitButton) {
            submitButton.addEventListener("click", function(event) {
                event.preventDefault();

                const userAnswer = document.querySelector('input[name="answer"]:checked');

                if (userAnswer) {
                    if (checkAnswer(userAnswer.value, randomQuestion.correctAnswer)) {
                        alert("Correct answer!");
                    } else {
                        alert("Incorrect answer! The correct answer is " + randomQuestion.correctAnswer);
                    }
                } else {
                    alert("Please select an answer!");
                }
            });
        }
    }
});
