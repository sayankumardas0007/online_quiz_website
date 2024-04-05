
//q3



document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('.sub1').addEventListener('click', function () {
        // Call a function to check the answers
       
        let one=document.querySelector(".one2");
        let two=document.querySelector(".two2");
        
        one.classList.add("none");
        two.classList.remove("none");
        checkAnswers();

        
        // one.style.display = 'none';
       
    });
  
});

function checkAnswers() {
    
    var correctAnswers = 0;

    // Question 1
    if (document.getElementById('q11').checked) {
        correctAnswers++;
    }

    // Question 2
    if (document.getElementById('q22').checked) {
        correctAnswers++;
    }

    // Question 3
    if (document.getElementById('q31').checked) {
        correctAnswers++;
    }

    // Question 4
    if (document.getElementById('q42').checked) {
        correctAnswers++;
    }

    // Question 5
    if (document.getElementById('q51').checked) {
        correctAnswers++;
    }

    // Question 6
    if (document.getElementById('q61').checked) {
        correctAnswers++;
    }

    // Question 7
    if (document.getElementById('q73').checked) {
        correctAnswers++;
    }

    // Question 8
    if (document.getElementById('q83').checked) {
        correctAnswers++;
    }

    // Question 9
    if (document.getElementById('q92').checked) {
        correctAnswers++;
    }

    // Question 10
    if (document.getElementById('q101').checked) {
        correctAnswers++;
    }
    // var polAns=document.getElementById("pol");
    // polAns.innerTextL=correctAnswers;
       var polAns = document.getElementById('pol2');
        polAns.innerText = correctAnswers*10+"%";
        polAns.style.display = 'block';

    // Display the number of correct answers
    // alert('You got ' + correctAnswers + ' out of 10 questions correct.');
}

