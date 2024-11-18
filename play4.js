const questions = [
    {
        question: "Which element has the chemical symbol Hg?",
        answers: [
            {text: " Helium" , correct: false},
            {text: "Mercury" , correct: false},
            {text: " Gold" , correct: false},
            {text: " Hydrogen" , correct: true},
        ]
    },

    {
        question: "What is the currency of France?",
        answers: [
            {text: " Euro" , correct: true},
            {text: " Pound Sterling" , correct: false},
            {text: "Yen" , correct: false},
            {text: " Franc" , correct: false},
        ]
          
    },
    {
      
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            {text: " China" , correct: false},
            {text: "  South Korea" , correct: false},
            {text: "  Japan" , correct: true},
            {text: "  Vietnam" , correct: false},
        ]
    },
    {
       
        question: "Which planet is known as the blue planet in solar system?",
        answers: [
            {text: " Earth" , correct: true},
            {text: " Neptune" , correct: false},
            {text: "Jupitar" , correct: false},
            {text: "Mars" , correct: false},
        ]
    },
    {
        question: "What is the largest bone in the human body?",
        answers: [
            {text: "Humerus", correct: false},
            {text: "Femur", correct: true},
            {text: "Tibia", correct: false},
            {text: "Fibula", correct: false},
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            {text: "Mark Twain", correct: false},
            {text: "Charles Dickens", correct: false},
            {text: "William Shakespeare", correct: true},
            {text: "Jane Austen", correct: false},
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            {text: "Iron", correct: false},
            {text: "Gold", correct: false},
            {text: "Diamond", correct: true},
            {text: "Silver", correct: false},
        ]
    },
    {
        question: "Which country gifted the Statue of Liberty to the United States?",
        answers: [
            {text: "United Kingdom", correct: false},
            {text: "France", correct: true},
            {text: "Germany", correct: false},
            {text: "Italy", correct: false},
        ]
    },
    {
        question: "What is the main ingredient in traditional Japanese miso soup?",
        answers: [
            {text: "Tofu", correct: false},
            {text: "Miso paste", correct: true},
            {text: "Seaweed", correct: false},
            {text: "Rice", correct: false},
        ]
    },
    {
        question: "Which planet is the hottest in the solar system?",
        answers: [
            {text: "Mars", correct: false},
            {text: "Venus", correct: true},
            {text: "Mercury", correct: false},
            {text: "Jupiter", correct: false},
        ]
    }
    
];

const questionElement  = document.getElementById("Question");
const answerButtons  = document.getElementById("answer-buttons");
const nextButton  = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML =    `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}


nextButton.addEventListener("click" , ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();



