const questions = [
    {
        question: "Which constitutional amendment led to the recent reorganization of the state of Jammu and Kashmir?",
        answers: [
            {text: "Article 35A" , correct: false},
            {text: "Article 370" , correct: true},
            {text: "Article 360" , correct: false},
            {text: "Article 371" , correct: false},
        ]
    },

    {
        question: "What is the total number of seats in the Lok Sabha as of 2024?",
        answers: [
            {text: "545" , correct: false},
            {text: "552" , correct: false},
            {text: "543" , correct: true},
            {text: "550" , correct: false},
        ]
          
    },
    {
      
        question: "In the United Kingdom, who is the head of state?",
        answers: [
            {text: "Prime Minister" , correct: false},
            {text: " Monarch (King/Queen)" , correct: true},
            {text: " President" , correct: false},
            {text: " Chancellor" , correct: false},
        ]
    },
    {
       
        question: "Who is the current President of the Indian National Congress party?",
        answers: [
            {text: " Sonia Gandhi" , correct: true},
            {text: " Rahul Gandhi" , correct: false},
            {text: "Priyanka Gandhi Vadra" , correct: false},
            {text: "None of these" , correct: false},
        ]
    },
    {
        question: "Who is known as the 'Father of the Indian Constitution'?",
        answers: [
            {text: "Jawaharlal Nehru", correct: false},
            {text: "B.R. Ambedkar", correct: true},
            {text: "Mahatma Gandhi", correct: false},
            {text: "Sardar Patel", correct: false},
        ]
    },
    {
        question: "Which country has a unicameral system in its parliament?",
        answers: [
            {text: "India", correct: false},
            {text: "United States", correct: false},
            {text: "New Zealand", correct: true},
            {text: "United Kingdom", correct: false},
        ]
    },
    {
        question: "Which Indian Prime Minister initiated the 'Green Revolution'?",
        answers: [
            {text: "Indira Gandhi", correct: true},
            {text: "Rajiv Gandhi", correct: false},
            {text: "Jawaharlal Nehru", correct: false},
            {text: "Lal Bahadur Shastri", correct: false},
        ]
    },
    {
        question: "What is the main function of the United Nations Security Council?",
        answers: [
            {text: "To regulate global trade", correct: false},
            {text: "To maintain international peace and security", correct: true},
            {text: "To oversee economic development", correct: false},
            {text: "To promote human rights", correct: false},
        ]
    },
    {
        question: "Which amendment of the U.S. Constitution grants freedom of speech?",
        answers: [
            {text: "First Amendment", correct: true},
            {text: "Second Amendment", correct: false},
            {text: "Third Amendment", correct: false},
            {text: "Fourth Amendment", correct: false},
        ]
    },
    {
        question: "Who was the first female Prime Minister of the United Kingdom?",
        answers: [
            {text: "Margaret Thatcher", correct: true},
            {text: "Theresa May", correct: false},
            {text: "Angela Merkel", correct: false},
            {text: "Benazir Bhutto", correct: false},
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



