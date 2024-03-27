const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const choices = document.querySelectorAll('button')

let userChoice
let generatedChoice
let result
let winner = "You win!!! 😎"
let lose = "You lost 🫠, try again"

choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    generatedChoice = generateComputerChoice()
    result = generateResult(userChoice, generatedChoice)
    display(result, userChoice, generatedChoice)
}))

function generateComputerChoice(){
    let random = Math.floor(Math.random() * 3)
    if (random === 0) return 'paper'
    else if (random === 1) return 'rock'
    else if (random === 2) return 'scissor'
}

function generateResult(user, computer) {
    if (user === computer) return 1
    else if (user === 'scissor' && computer === 'rock') return false
    else if (user === 'rock' && computer === 'paper') return false
    else if (user === 'paper' && computer === 'scissor') return false
    else if (user === 'paper' && computer === 'rock') return true
    else if (user === 'rock' && computer === 'scissor') return true
    else if (user === 'scissor' && computer === 'paper') return true
}

function display(result, userChoice, computerChoice) {
    if (result === 1) {
        resultDisplay.style.color = "#FBBC05"
        resultDisplay.innerHTML = "Es un empate 😅"
    }
    else if (result) {
        resultDisplay.style.color = "#34A853"
        resultDisplay.innerHTML = winner
    }else{
        resultDisplay.style.color = "#EA4335"
        resultDisplay.innerHTML = lose
    }

    userChoiceDisplay.innerText = userChoice
    computerChoiceDisplay.innerText = computerChoice
}