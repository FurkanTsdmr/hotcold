const result = document.getElementById("result");
const guessBtn = document.getElementById("guess-btn");
const restartBtn = document.getElementById("restart-btn");
const guess = document.getElementById("guess");
const form = document.querySelector("form");
const guessDiv = document.querySelector(".last-guesses");

let number = Math.floor(Math.random() * 100) + 1;
let lastGuesses = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(guess.value == ""){
        result.style.color="orange"
        result.textContent = "Lütfen Bir Sayi Giriniz."
        setTimeout ( () => result.textContent = "",1500);
    }else{
        console.log(guess.value,number)
        result.style.color="red"
        lastGuesses.push(guess.value);
        let diff = Math.abs(guess.value - number)
        printLastGuess();
        getDiff(diff);
    }

})

restartBtn.addEventListener("click",restart)


function getDiff(diff){
    if( diff == 0){
        result.textContent = "Tebrikler Canim Kazandin."
        restartBtn.style.display = "block";
        }
    else if(diff < 5)result.textContent = "Cok Sicak"
    else if (diff < 15) result.textContent = "Az Daha Ver Odunu.";
    else if (diff < 30) result.textContent = "Elini Korkak Alistirma Ver 3 -5 Birşeyler Daha.";
    else if (diff < 40) result.textContent = "Soguk, Farki Azaltmaya Calis.";
    else if (diff < 70) result.textContent = "Cok Soguk, Buz Devrinde Bile Daha Sicakti.";
    else result.textContent = "Sincap Bile Kitalari Boyle Ayiramadi Be Adam."
}

function printLastGuess(){
    let index = lastGuesses.length - 1;
    let li = document.createElement("li");
    li.textContent = lastGuesses[index];
    guessDiv.appendChild(li);
}


function restart(){
    restartBtn.style.display="none";
    result.textContent = "";
    guessDiv.textContent = "";
    form.reset();
    number = Math.floor(Math.random() * 100) + 1;

}