const gameArea = document.querySelector(".game");
const buttone = document.querySelector("button");
const message = document.querySelector(".message");
//new comment
let gamePlay = false;
let score = 0;
buttone.addEventListener("click", doThis);

//another comment
function doThis() {
    if (!gamePlay) {
        let p = 6; 
        p = prompt("game number?",6);
        gamePlay = true;
        gameArea.innerHTML ="";
        score = 0;
        maker(p);
        buttone.innerHTML = "Check Combo";
        message.innerHTML = "Guess";
    } else {
        const numbers = document.querySelectorAll(".numb");
        score++;
        message.innerHTML = "Your Guess is: " + score;
        let final = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i].value == numbers[i].correct) {
                numbers[i].style.backgroundColor = "green";
                final++;    
                numbers[i].style.color = "white";
            } else {
                if (numbers[i].value < numbers[i].correct) {
                    numbers[i].style.backgroundColor = "blue";
                } else {
                    numbers[i].style.backgroundColor = "red";
                }
            }if (final == numbers.length){
                message.innerHTML = "Your Guess is: " + score + "<br /> You finished the Game!";
                finish();
            }
        }
    }
}

function maker(p) {
    for (let x = 0; x < p; x++) {
        let el = document.createElement("input");
        el.setAttribute("type", "number");
        el.max = 9;
        el.min = 0;
        el.size = 1;
        el.width = "50px";
        el.classList.add("numb");
        el.correct = Math.floor(Math.random() * 10);
        el.value = 0;
        el.order = x;
        gameArea.appendChild(el);
    }

}

function finish(){
    buttone.innerHTML = "Reset";
    gamePlay = false;
}