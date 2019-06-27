//array of possible questions and asnwers
var questionsArray = [
    {
        questionId: "1",
        question: "Which character uses the quote 'Great Scott!'?",
        answers: ["Marty McFly", "Doc Holiday", "Dr. Emmett Brown", "Biff Tannen"],
        correctAnswer: "Doc Brown",
    },
    {
        questionId: "2",
        question: "What was the name of Doc Brown's dog in the 80's?",
        answers: ["Einstein", "Spot", "Calpernius", "Newton"],
        correctAnswer: "Einstein",
    },
    {
        questionId: "3",
        question: "What kind of car was used for the time machine?",
        answers: ["Bronco", "DeLorean", "Ferari", "Ford Pinto"],
        correctAnswer: "DeLorean",
    },
    {
        questionId: "4",
        question: "What song did Marty McFly play at his parents' school dance?",
        answers: ["Johnny B Good", "Under the Sea", "Great Balls of Fire", "Gin and Juice"],
        correctAnswer: "Johnny B Good",
    },
    {
        questionId: "5",
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
var currentQuestionId = 1;


console.log("hello");

console.log(JSON.stringify(questionsArray));


// newGame = function(event) {
//     $("#new-game-button").remove();
//     gameActive = true;
//     console.log(gameActive);
//     console.log("you clicked it");
// }
console.log(questionsArray[currentQuestionId-1].question);
//start the game upon button press
$(document).ready(function () {
    $("#new-game").on("click", function () {
        gameActive = true;
        console.log(gameActive);
        $("#new-game-button").empty();
        $("#question-section").html(questionsArray[currentQuestionId-1].question);
        // for (var i = 0; i < questionsArray[currentQuestionId-1].answers; i++) {
        //     console.log(questionsArray[currentQuestionId-1].answers[i])
        // }

        questionsArray[currentQuestionId-1].answers.forEach(function (char) {
            console.log(char)
            $("#answers-section").append("<div><button type='button' class='btn btn-primary btn-lg btn-block' id='new-game'>" + 
            char + "</button></div>");
        })
        // var answerOptions = 
        // console.log(questionsArray[currentQuestionId-1].answers);
        // $("#answers-section").html(questionsArray[currentQuestionId-1].answers);
        
        // $("#question-section").html()
    });

    //start timer
    

});

// var currentQuestion = $.map(questionsArray, function(val) {
//     return val.questionId =="1" ? val.foo : null;
//     console.log(currentQuestion);

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



