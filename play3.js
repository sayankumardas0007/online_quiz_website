const questions = [
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            {text: " Atlantic Ocean" , correct: false},
            {text: " Indian Ocean" , correct: false},
            {text: "Southern Ocean" , correct: false},
            {text: "Pacific Ocean" , correct: true},
        ]
    },

    {
        question: "Which bird is known for its ability to mimic human speech?",
        answers: [
            {text: " Eagle" , correct: false},
            {text: " Hummingbird" , correct: false},
            {text: " Owl" , correct: false},
            {text: " Parrot" , correct: true},
        ]
          
    },
    {
      
        question: "What is the largest rainforest in the world?",
        answers: [
            {text: " Amazon Rainforest" , correct: true},
            {text: " Congo Rainforest" , correct: false},
            {text: "  Borneo Rainforest" , correct: false},
            {text: " Daintree Rainforest" , correct: false},
        ]
    },
    {
       
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "  Venus" , correct: false},
            {text: "  Mars" , correct: true},
            {text: " Jupiter" , correct: false},
            {text: " Saturn" , correct: false},
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            {text: "Amazon River", correct: false},
            {text: "Yangtze River", correct: false},
            {text: "Mississippi River", correct: false},
            {text: "Nile River", correct: true},
        ]
    },
    {
        question: "Which country has the largest population as of 2024?",
        answers: [
            {text: "United States", correct: false},
            {text: "India", correct: true},
            {text: "China", correct: false},
            {text: "Indonesia", correct: false},
        ]
    },
    {
        question: "Which country has the largest land area?",
        answers: [
            {text: "United States", correct: false},
            {text: "China", correct: false},
            {text: "Canada", correct: false},
            {text: "Russia", correct: true},
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers: [
            {text: "Toronto", correct: false},
            {text: "Vancouver", correct: false},
            {text: "Ottawa", correct: true},
            {text: "Montreal", correct: false},
        ]
    },
    {
        question: "Mount Everest is part of which mountain range?",
        answers: [
            {text: "Rockies", correct: false},
            {text: "Andes", correct: false},
            {text: "Himalayas", correct: true},
            {text: "Alps", correct: false},
        ]
    },
    {
        question: "Which desert is the hottest in the world?",
        answers: [
            {text: "Arabian Desert", correct: false},
            {text: "Sahara Desert", correct: true},
            {text: "Kalahari Desert", correct: false},
            {text: "Gobi Desert", correct: false},
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



