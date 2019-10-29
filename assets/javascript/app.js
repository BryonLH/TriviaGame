//array of possible questions and asnwers
var questionsArray = [
    {
        questionId: "1",
        question: "Which character uses the quote 'Great Scott!'?",
        answers: ["Marty McFly", "Doc Holiday", "Dr. Emmett Brown", "Biff Tannen"],
        correctAnswer: "Dr. Emmett Brown",
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
var timer = 0;
var timeRemaining = 20;
var currentQuestionId = 1;


console.log("hello");

console.log(JSON.stringify(questionsArray));

displayQuestion = function() {
    $("#question-section").html(questionsArray[currentQuestionId - 1].question);
    console.log(questionsArray[currentQuestionId - 1].question);
    questionsArray[currentQuestionId - 1].answers.forEach(function (char) {
        console.log(char)
        $("#answers-section").append("<div><input type='button' class='btn btn-primary btn-lg btn-block answer-button' id='answer-button' value = '" + char + "'/></div>");
        $("#timer-section").text(timeRemaining);
        $("#score-section").text(`Correct Guesses: ${correctGuesses} | Incorrect Guesses: ${incorrectGuesses}`);
        console.log(questionsArray[currentQuestionId - 1].correctAnswer);
    });
};


// newGame = function(event) {
//     $("#new-game-button").remove();
//     gameActive = true;
//     console.log(gameActive);
//     console.log("you clicked it");
// }
// console.log(questionsArray[currentQuestionId - 1].question);
//start the game upon button press
$(document).ready(function() {
    $("#new-game").on("click", function () {
        gameActive = true;
        console.log(gameActive);
        displayQuestion();
        $("#new-game-button").empty();
        // $("#question-section").html(questionsArray[currentQuestionId - 1].question);

        // questionsArray[currentQuestionId - 1].answers.forEach(function (char) {
        //     console.log(char)
        //     $("#answers-section").append("<div><input type='button' class='btn btn-primary btn-lg btn-block answer-button' id='answer-button' value = '" + char + "'/></div>");
        //     // $("#answers-section").append(char).attr({
        //     //     "type": "button", 
        //     //     "class": "btn btn-primary btn-lg btn-block", 
        //     //     "id": "answer-button", 
        //     //     "value": char});
        // });
        // If clicked button value = correct answer, then user moves on
        // console.log(questionsArray[currentQuestionId - 1].correctAnswer);
        $(".answer-button").on("click", function (event) {
            if (event.currentTarget.defaultValue === questionsArray[currentQuestionId - 1].correctAnswer) {
            //     // you won function
                correctGuesses++;
                console.log("correct guesses:" + correctGuesses);
                currentQuestionId++;
                $("#answers-section").empty();
                displayQuestion()
            } else {
                incorrectGuesses++;
            //     // you lose function
                console.log("incorrect guesses:" + incorrectGuesses);
                currentQuestionId++;
                $("#answers-section").empty();
                displayQuestion()
            }
            
            // console.log("correct guesses:" + correctGuesses);
            // console.log("incorrect guesses:" + incorrectGuesses);
            
        });
        
    });
    
});

checkAnswer = function() {
    if (event.currentTarget.defaultValue === questionsArray[currentQuestionId - 1].correctAnswer) {
        //     // you won function
            correctGuesses++;
            console.log("correct guesses:" + correctGuesses);
            currentQuestionId++;
            $("#answers-section").empty();
            displayQuestion();
            
        } else {
            incorrectGuesses++;
        //     // you lose function
            console.log("incorrect guesses:" + incorrectGuesses);
            currentQuestionId++;
            $("#answers-section").empty();
            displayQuestion();
        }
}

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



