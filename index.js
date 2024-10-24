let userRock = document.getElementById("user-rock")
let userPaper = document.getElementById("user-paper")
let userScissor = document.getElementById("user-scissor")
let computerEl = document.getElementById("computer")
let resultEl = document.getElementById("result")


function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissor"]
    let randomNumber = Math.floor(Math.random()*choices.length)
    return choices[randomNumber]
}

function getWinner(computerChoice, userChoice){
    if(computerChoice === userChoice){
        return "It's a tie"
    } else if(computerChoice === "Rock" && userChoice === "Scissor" ||
        computerChoice === "Paper" && userChoice === "Rock" ||
        computerChoice === "Scissor" && userChoice === "Paper"
    ){
        return "Winner is: Computer"
    }
    else{
        return "Winner is: User"
    }
}

function playGame(userChoice){
    let computerChoice = getComputerChoice()
    computerEl.innerText = computerChoice
    let winner = getWinner(computerChoice, userChoice)
    resultEl.innerText = winner
    console.log(`Computer=${computerChoice} and User=${userChoice}`) //--> i'm using this to find if the code is correctly working or not
}

userRock.addEventListener("click", function(){
    playGame("Rock")
})
userPaper.addEventListener("click", function(){
    playGame("Paper")
})
userScissor.addEventListener("click", function(){
    playGame("Scissor")
})
