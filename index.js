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



