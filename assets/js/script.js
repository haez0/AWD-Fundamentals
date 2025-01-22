//variable declaration
let userName;
let randomNumber = Math.floor(Math.random()* 10) + 1;

//io
document.getElementById("greet-btn").addEventListener("click", function ()
{
  userName = document.getElementById("username").value;
  const output= userName
  ?`Hello, ${userName}! Welcome to the demo.`
  :"Please enter your name!";
  document.getElementById("output").textContent=output;
});

//condi statements
document.getElementById("check-btn").addEventListener("click", function () {
  //gets the value entered in the "guess" input bar which is a string and converts it to a number using rhe Number() function.
  const userGuess = Number(document.getElementById("guess").value);
  if (userGuess === randomNumber) {
    document.getElementById("result").textContent = "Correct! You guessed the number!";
  } else if (userGuess > randomNumber) {
    document.getElementById("result").textContent = "Too high! Try again.";
  } else {
    document.getElementById("result").textContent = "Too low! Try again.";
  }
});

//looping statements
document.getElementById("countdown-btn").addEventListener("click", function ()
{
  const countdownList = document.getElementById("countdown");
  countdownList.innerHTML = "";//to clear prev countdown
  //loop starts at 5 and counts down to 1, decreasing the value of i by 1 on each iteration.
  for (let i = 5; i >0; i--){
    const listItem = document.createElement("li")
    listItem.textContent = `${i}`;
    countdownList.appendChild(listItem);
  }
})