const buttons = document.getElementsByTagName('button')
const playerButtons = document.querySelector('.players-button')
const play = document.querySelector('.play')
const body = document.body

console.log(body)

let player = document.querySelector('#ply')
let computer = document.querySelector('#cpt')
let newResult = document.querySelector('.result')
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

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function (){
    const computerSelection = getComputerChoice()
    playOneRound(buttons[i].textContent.toLowerCase(), computerSelection)
    })
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
            computerScore++
            result = `You lose! Paper beats Rock`
        }

    } else if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            playerScore++
            result = `You win! Paper beats Rock.`
            
        } else if(computerSelection === 'scissors'){
            computerScore++
            result = `You lose! Scissors beats Paper.`
        } else if(computerSelection === 'paper') {
            result = `It's a tie.`
        }

    } else if(playerSelection === 'scissors'){
        if(computerSelection === 'scissors'){
            result = `It's a tie.`
        } else if(computerSelection === 'paper'){
            playerScore++
            result = `You win! Scissors beats Paper.`
            
        } else if(computerSelection === 'rock') {
            computerScore++
            result = `You lose! Rock beats Scissors.`
        }
    }

    newResult.textContent = result;
    newResult.classList.add('trans')
    player.textContent = `Player: ${playerScore}`;
    computer.textContent = `Computer: ${computerScore}`;

    stopGame()
   
}

function stopGame(){
    if(playerScore == 5){
        newResult.textContent = `Congratulations! You win`
        playerButtons.innerHTML = ''
        play.style.display = 'block'
        body.style.backgroundColor = '#4FA095'
    } else if(computerScore == 5){
        newResult.textContent = `Game Over!!!`
        playerButtons.innerHTML = ''
        play.style.display = 'block'
        body.style.backgroundColor = '#E0144C'
    } 
    
}

function playAgain(){
    play.addEventListener('click', () => {
        player.textContent = 'Player:'
        computer.textContent = 'Computer:'
        location.reload()
        
    })

}
playAgain()

































// // Function Constructor
// const Person = function(name, yearOfBirth, school, gender){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.school = school;
//     this.gender = gender;
//   }
  
//   Person.prototype.calculateAge = function(){
//     console.log(2016 - this.yearOfBirth)
//   }
//   Person.prototype.getNameGender = function(){
//     console.log(`My name is ${this.name} and I study at ${this.school} and I am a ${this.gender}`)
//   }

//   var john = new Person('John', 2002, 'Unilag', 'Male')
//   var kamal = new Person('Kamal', 1998, 'Unilorin', 'Male')
//   var abike = new Person('Abike', 2000, 'University of Oxford', 'Female')

//   john.calculateAge()
//   kamal.getNameGender()
//   abike.getNameGender()

























// function game(){
    
//     for(i = 0; i < 5; i++){
//         const playerSelection = prompt('Choose among Rock, Paper or Scissors').toLowerCase()
//         const computerSelection = getComputerChoice()
//         console.log(playOneRound(playerSelection,computerSelection))
//     }
    
//     if(playerScore > computerScore){
//         console.log(`Congratulations! You win by ${playerScore} to ${computerScore}`)
//     } else if(computerScore > playerScore){
//         console.log(`Game over!! You lose by ${playerScore} to ${computerScore}`)
//     } else {
//         console.log(`Draw! Play again`)
//     }
// }
// game()

