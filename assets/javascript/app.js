//array of possible questions and asnwers
var questionsArray = [
    {
        question = "Which character uses the quote 'Great Scott!'?",
        answers =["Marty McFly", "Doc Holiday", "Dr. Emmett Brown", "Biff Tannen"],
        correctAnswer = "Doc Brown",
    },
    {
        question = "What was the name of Doc Brown's dog in the 80's?",
        answers =["Einstein", "Spot", "Calpernius", "Newton"],
        correctAnswer = "Einstein",
    },
    {
        question = "What kind of car was used for the time machine?",
        answers =["Bronco", "DeLorean", "Ferari", "Ford Pinto"],
        correctAnswer = "DeLorean",
    },
    {
        question = "What song did Marty McFly play at his parents' school dance?",
        answers =["Johnny B Good", "Under the Sea", "Great Balls of Fire", "Gin and Juice"],
        correctAnswer = "Johnny B Good",
    },
    {
        question = "What was the name of the school dance where Marty's parents first kissed?",
        answers =["Under the Stars", "Enchantment Under the Sea", "Doc Brown", "Biff"],
        correctAnswer = "Enchantment Under the Sea",
    },
];

var maxGuesses = 2;
var correctGuesses = 0;
var incorrectGuesses = 0;

