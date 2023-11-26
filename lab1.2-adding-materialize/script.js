const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

/**
 * Step 1: Create a quizData object!
 * quizData have 3 properties: question, options, and correctAnswer.
 */
const quizData = [
    {
        question: "In which German city is Porsche headquartered?",
        options: ["Ingolstadt", "Wolfsburg", "Stuttgart", "Wurzburg"],
        correctAnswer: "Stuttgart",
    },
    {
        question: "In which decade was Porsche founded?",
        options: ["1930s", "1920s", "1910s", "1900s"],
        correctAnswer: "1930s",
    },
    {
        question: "Who founded Porsche?",
        options: ["Kristof Porsche", "Ferdinand Porsche", "Leopold Porsche", "Franz Porsche"],
        correctAnswer: "Ferdinand Porsche",
    },
    {
        question: "Which vehicle has the most horsepower?",
        options: ["2006 Porsche Cayman S", "1997 Porsche 911 Turbo S", "2012 Porsche Panamera Turbo", "2008 Porsche Cayenne Turbo S"],
        correctAnswer:  "2008 Porsche Cayenne Turbo S",
    },
];

let currentQuestionIndex = 0;
let correct = 0;

function showQuestion(index) {
    // Step 2
    const question = quizData[index];
    questionElement.textContent = question.question;

    // Create a for loop that iterates through the options
    // Create a button element with the text of that option
    // Add an event listen to the button to call checkAnswer
    optionsElement.innerHTML = "";

    for(let i = 0; i < question.options.length; i++){
        const optionButton = document.createElement("button");
        optionButton.textContent = question.options[i];
        optionButton.addEventListener("click", () => {
            checkAnswer(optionButton.textContent)
        })
        optionsElement.appendChild(optionButton);
    }

}

function checkAnswer(selectedOption) {
    // Step 3
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

    if(selectedOption === correctAnswer) {
        correct++;
        alert("Correct!");
    }
    else{
        alert("Incorrect. The correct answer is: " + correctAnswer);
    }

    //move on to next question
    currentQuestionIndex++;

    if(currentQuestionIndex < quizData.length) {
        showQuestion(currentQuestionIndex);
    }
    else{
        questionElement.textContent = `Quiz complete! You scored ${correct} out of ${quizData.length}!`
        optionsElement.innerHTML = "";
    }
}

// Start the quiz
showQuestion(currentQuestionIndex);
