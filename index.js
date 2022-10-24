let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    // Create an array of three elements
    const arr = ['Rock', 'Paper', 'Scissors']
    // Create a random number and round it up
    const randomNumber = Math.floor(Math.random() * 3)
    // Use the random number within the created array to get any of the elements randomly
    const randomArr = arr[randomNumber].toLowerCase()
    return randomArr
}

function playOneRound(playerSelection, computerSelection){
    // Declare a result variable
    let result = '';
    // Play game to check who wins
    if(playerSelection === 'rock'){
        if(computerSelection === 'rock'){
            result = `It's a tie!`
        } else if(computerSelection === 'scissors'){
            playerScore++
            result = `You win! Rock beats Scissors.`
        } else if(computerSelection === 'paper') {
            result = `You lose! Paper beats Rock`
            computerScore++
        }
    } else if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            result = `You win! Paper beats Rock`
            playerScore++
        } else if(computerSelection === 'scissors'){
            result = `You lose! Scissors beats Paper`
            computerScore++
        } else if(computerSelection === 'paper') {
            result = `It's a tie`
        }
    } else if(playerSelection === 'scissors'){
        if(computerSelection === 'scissors'){
            result = `It's a tie`
        } else if(computerSelection === 'paper'){
            result = `You win! Scissors beats Paper`
            playerScore++
        } else if(computerSelection === 'rock') {
            result = `You lose! Rock beats Scissors`
            computerScore++
        }
    }

    return result
}


