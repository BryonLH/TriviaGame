//array of possible questions and asnwers
var questionsArray = [
    {
        question: "Which character uses the quote 'Great Scott!'?",
        answers: ["Marty McFly", "Doc Holiday", "Dr. Emmett Brown", "Biff Tannen"],
        correctAnswer: "Doc Brown",
    },
    {
        question: "What was the name of Doc Brown's dog in the 80's?",
        answers: ["Einstein", "Spot", "Calpernius", "Newton"],
        correctAnswer: "Einstein",
    },
    {
        question: "What kind of car was used for the time machine?",
        answers: ["Bronco", "DeLorean", "Ferari", "Ford Pinto"],
        correctAnswer: "DeLorean",
    },
    {
        question: "What song did Marty McFly play at his parents' school dance?",
        answers: ["Johnny B Good", "Under the Sea", "Great Balls of Fire", "Gin and Juice"],
        correctAnswer: "Johnny B Good",
    },
    {
        question: "What was the name of the school dance where Marty's parents first kissed?",
        answers: ["Under the Stars", "Enchantment Under the Sea", "Winter Woner Land", "Jump Up and Dance"],
        correctAnswer: "Enchantment Under the Sea",
    },
];

var maxGuesses = 2;
var guessCount = 0;
var correctGuesses = 0;
var incorrectGuesses = 0;
var gameActive = false;
var time = 0;
var questionNum = 0;


console.log("hello");

console.log(JSON.stringify(questionsArray));



// newGame = function(event) {
//     $("#new-game-button").remove();
//     gameActive = true;
//     console.log(gameActive);
//     console.log("you clicked it");
// }

//start the game upon button press
$(document).ready(function() {
$("#new-game").on("click", function() {
    $("#new-game-button").empty();
});

//start timer

});



// if (gameActive === false) {
//     //display button to start game
//     var startButton = $("<input/>").attr({
//         type: "button",
//         id: "start-button",
//         value: "Start Trivia"
//     });
//     $("#new-game").append(startButton);
// };

// window.onload = function() {
//         var startButton = $("<input/>").attr({
//         type: "button",
//         id: "start-button",
//         value: "Start Trivia"
//     });
//     $("#new-game").append(startButton);
// };

// $("")

// newGame = function (event) {

// }



