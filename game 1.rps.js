var nam = prompt("What is your name?");

botArray = ["rock","paper","scissor"];

function userPickup(userChoice){
    var userChoiceId = userChoice.id;
    var randomIndex = Math.floor(Math.random()*3);
    var botChoiceId = botArray[randomIndex];
    var text = matchResult(userChoiceId, botChoiceId);
    displayResult(userChoiceId,botChoiceId, text);
    alert( "User choice :" + userChoiceId + "\nRobot choice :"+ botChoiceId + "\nResult: " + text);

}
function displayResult(userChoice, botChoice, text,nam){
    userChoice += "1";
    botChoice += "2";
document.getElementById(userChoice).setAttribute("class","visible");
document.getElementById(botChoice).setAttribute("class","visible");
document.getElementById("displayResult").setAttribute("class","visible");
document.getElementById("userChoice").setAttribute("class","invisible");
document.getElementById("result").innerHTML = text;
// document.getElementById("player").innerHTML = nam
}

 function matchResult(userChoice, botChoice){
     if(userChoice===botChoice){
         return "Match has Drawn";
     }
     else if(userChoice=="rock" && botChoice==="paper"){
         return "Bot has won the game";
     }
     else if(userChoice=== "paper" && botChoice=== "scissor" ){
         return "Bot has won the game";
     }
     else if(userChoice==="scissor" && botChoice=== "rock"){
         return "Bot has won the game";
     }
     else{
         return "User has won the game";
     }
 } 
