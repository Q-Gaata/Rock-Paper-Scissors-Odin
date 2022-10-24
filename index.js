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
            result = `It's a tie! Score: ${playerScore} to ${computerScore}`
        } else if(computerSelection === 'scissors'){
            playerScore++
            result = `You win! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`
        } else if(computerSelection === 'paper') {
            computerScore++
            result = `You lose! Paper beats Rock. Score: ${playerScore} to ${computerScore}`
        }

    } else if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            playerScore++
            result = `You win! Paper beats Rock. Score: ${playerScore} to ${computerScore}`
            
        } else if(computerSelection === 'scissors'){
            computerScore++
            result = `You lose! Scissors beats Paper. Score: ${playerScore} to ${computerScore}`
        } else if(computerSelection === 'paper') {
            result = `It's a tie. Score: ${playerScore} to ${computerScore}`
        }

    } else if(playerSelection === 'scissors'){
        if(computerSelection === 'scissors'){
            result = `It's a tie. Score: ${playerScore} to ${computerScore}`
        } else if(computerSelection === 'paper'){
            playerScore++
            result = `You win! Scissors beats Paper. Score: ${playerScore} to ${computerScore}`
            
        } else if(computerSelection === 'rock') {
            computerScore++
            result = `You lose! Rock beats Scissors. Score: ${playerScore} to ${computerScore}`
        }
    }

    return result
}

function game(){
    
    for(i = 0; i < 5; i++){
        const playerSelection = prompt('Choose among Rock, Paper or Scissors').toLowerCase()
        const computerSelection = getComputerChoice()
        console.log(playOneRound(playerSelection,computerSelection))
    }
    
    if(playerScore > computerScore){
        console.log(`Congratulations! You win by ${playerScore} to ${computerScore}`)
    } else if(computerScore > playerScore){
        console.log(`Game over!! You lose by ${playerScore} to ${computerScore}`)
    } else {
        console.log(`Draw! Play again`)
    }
}
game()
