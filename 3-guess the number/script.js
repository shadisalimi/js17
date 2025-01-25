let randomNumber = Math.floor(Math.random() * 100 + 1);

let tryNumber=0
let maxTry=10

function guessNumber() {
  const guessNumber= document.querySelector('.inputs-Values').value;
  const guess=Number(guessNumber)
  const finalOutput= document.querySelector('.final-output');
  const triesOutput = document.querySelector('.Tries-output');

  if(guess==='' || isNaN(guess)|| guess<1 || guess>100){
    finalOutput.textContent="Please enter a number between 1 and 100";
    return;
  }else{
    tryNumber++
    let remainder=maxTry-tryNumber;
    triesOutput.textContent=`Remaining tries:${remainder}`
  }

  if(guess>randomNumber){
    finalOutput.textContent="Number is too high, try again."
  }else if(guess<randomNumber){
    finalOutput.textContent="Number is too low, try again."
  }else{
    finalOutput.textContent=`you win! the number is ${randomNumber}`

  }

  if(guess>maxTry){
    finalOutput.textContent=`game over! the number is ${randomNumber}`
  }


}


function newGame() {
 randomNumber=Math.floor(Math.random()*100+1)
 
 tryNumber=0

 document.querySelector('.final-output').textContent = "Guess a number between 1 and 100.";
 document.querySelector('.Tries-output').textContent = `your max tries: ${maxTries}`;
}

document.querySelector('.btnGuess').addEventListener('click', guessNumber);
document.querySelector('.btnNewGame').addEventListener('click', newGame);


