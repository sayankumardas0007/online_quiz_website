const questions = [
    {
        question: "What is the largest mammal in the world??",
        answers: [
            {text: " African Elephant" , correct: false},
            {text: " Bule Whale" , correct: true},
            {text: " Polar Bear" , correct: false},
            {text: " Giraffe" , correct: false},
        ]
    },

    {
        question: "Which gas do plants absorb during photosynthesis?",
        answers: [
            {text: " Carbon Dioxide" , correct: true},
            {text: "Nitrogen" , correct: false},
            {text: " Hydrogen" , correct: false},
            {text: " Oxygen" , correct: false},
        ]
          
    },
    {
      
        question: "Which endangered species is known for its black and white fur and is native to China?",
        answers: [
            {text: " Snow Leopard" , correct: false},
            {text: "  Bengal Tiger" , correct: false},
            {text: "Giant Panda" , correct: true},
            {text: "  African Elephantr" , correct: false},
        ]
    },
    {
       
        question: "What is the process by which green plants make their own food using sunlight?",
        answers: [
            {text: "  Respiration" , correct: false},
            {text: "  Photosynthesis" , correct: true},
            {text: " Fermentation" , correct: false},
            {text: " Digestion" , correct: false},
        ]
    },
    {
        question: "What is the tallest tree species in the world?",
        answers: [
            {text: "Redwood", correct: true},
            {text: "Oak", correct: false},
            {text: "Maple", correct: false},
            {text: "Pine", correct: false},
        ]
    },
    {
        question: "Which is the only bird that can hover in one place?",
        answers: [
            {text: "Hummingbird", correct: true},
            {text: "Eagle", correct: false},
            {text: "Parrot", correct: false},
            {text: "Sparrow", correct: false},
        ]
    },
    {
        question: "What is the largest coral reef system in the world?",
        answers: [
            {text: "The Great Barrier Reef", correct: true},
            {text: "Red Sea Coral Reef", correct: false},
            {text: "New Caledonia Barrier Reef", correct: false},
            {text: "Florida Reef", correct: false},
        ]
    },
    {
        question: "What is the primary diet of a giant panda?",
        answers: [
            {text: "Bamboo", correct: true},
            {text: "Fish", correct: false},
            {text: "Insects", correct: false},
            {text: "Fruit", correct: false},
        ]
    },
    {
        question: "What type of habitat does a polar bear primarily live in?",
        answers: [
            {text: "Arctic", correct: true},
            {text: "Desert", correct: false},
            {text: "Rainforest", correct: false},
            {text: "Savanna", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            {text: "Sahara Desert", correct: false},
            {text: "Antarctic Desert", correct: true},
            {text: "Gobi Desert", correct: false},
            {text: "Arabian Desert", correct: false},
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



