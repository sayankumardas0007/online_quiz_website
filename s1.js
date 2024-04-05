//q2


document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('.sub1').addEventListener('click', function () {
        // Call a function to check the answers
       
        let one=document.querySelector(".one1");
        let two=document.querySelector(".two1");
        
        one.classList.add("none");
        two.classList.remove("none");
        checkAnswers();

        
        // one.style.display = 'none';
       
    });
  
});

function checkAnswers() {
    
    var correctAnswers = 0;

    // Question 1
    if (document.getElementById('q12').checked) {
        correctAnswers++;
    }

    // Question 2
    if (document.getElementById('q21').checked) {
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
    if (document.getElementById('q54').checked) {
        correctAnswers++;
    }

    // Question 6
    if (document.getElementById('q62').checked) {
        correctAnswers++;
    }

    // Question 7
    if (document.getElementById('q72').checked) {
        correctAnswers++;
    }

    // Question 8
    if (document.getElementById('q81').checked) {
        correctAnswers++;
    }

    // Question 9
    if (document.getElementById('q91').checked) {
        correctAnswers++;
    }

    // Question 10
    if (document.getElementById('q101').checked) {
        correctAnswers++;
    }
    // var polAns=document.getElementById("pol");
    // polAns.innerTextL=correctAnswers;
       var polAns = document.getElementById('pol1');
        polAns.innerText = correctAnswers*10+"%";
        polAns.style.display = 'block';

    // Display the number of correct answers
    // alert('You got ' + correctAnswers + ' out of 10 questions correct.');
}
