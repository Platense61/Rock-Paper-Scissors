//session storage will be useful

//make sure there is no null using if statements

//(1)display results

//(2)remove images hide function

//(3) Write values for score using session storage

function show(id){
  var result;
  var myRock = document.getElementById("player-rock").id;
  var myPaper = document.getElementById("player-paper").id;
  var myScissors = document.getElementById("player-scissors").id;
  //the number 0 represents rock, number 1 represents paper, and 2
  //represents scissors
  var rand = Math.floor(Math.random() * 3);

  if(myRock === id){
    document.getElementById('player-paper').style.visibility = 'hidden';
    document.getElementById('player-scissors').style.visibility = 'hidden';
  }
  else if(myPaper === id){
    document.getElementById('player-rock').style.visibility = 'hidden';
    document.getElementById('player-scissors').style.visibility = 'hidden';
  }
  else{
    document.getElementById('player-paper').style.visibility = 'hidden';
    document.getElementById('player-rock').style.visibility = 'hidden';
  }
  //ai chooses rock
  if(rand == 0){
    document.getElementById('ai-paper').style.visibility = 'hidden';
    document.getElementById('ai-scissors').style.visibility = 'hidden';
  }
  //ai chooses paper
  else if(rand == 1){
    document.getElementById('ai-rock').style.visibility = 'hidden';
    document.getElementById('ai-scissors').style.visibility = 'hidden';
  }
  //ai chooses scissors
  else{
    document.getElementById('ai-paper').style.visibility = 'hidden';
    document.getElementById('ai-rock').style.visibility = 'hidden';
  }
  //time to determine who won
  if(id==="player-rock"){
    if(rand == 0){
      //player ties
      document.getElementById('win-status').innerHTML="Tie!";
      //document.getElementById('tie-score').innerHTML="Tie!";
      result = "tie";
    }
    else if(rand == 1){
      //player looses
      document.getElementById('win-status').innerHTML="Lost!";
      result = "lost";

    }
    else{
      //player wins
      document.getElementById('win-status').innerHTML="Win!";
      result = "win";

    }
  }
  else if(id === "player-paper"){
    if(rand == 0){
      //player Wins
      document.getElementById('win-status').innerHTML="Win!";
      result = "win";

    }
    else if(rand == 1){
      //tie
      document.getElementById('win-status').innerHTML="Tie!";
      result = "tie";

    }
    else{
      //player loses
      document.getElementById('win-status').innerHTML="Lost!";
      result = "lost";

    }
  }
  //player chooses scissors
  else{
    if(rand == 0){
      //player looses
      document.getElementById('win-status').innerHTML="lost!";
      result = "lost";
    }
    else if(rand == 1){
      //player won
      document.getElementById('win-status').innerHTML="Win!";
      result = "win";
    }
    else{
      //tie
      document.getElementById('win-status').innerHTML="Tie!";
      result = "tie";
    }
  }

  let pWins = sessionStorage.getItem("pCount", 0);
  let aiWins = sessionStorage.getItem("aiCount", 0);
  let tieWins = sessionStorage.getItem("tieCount", 0);
  if (result == "win") {
        pWins++;
  }
  else if (pWins == null && aiWins == null && tieWins == null) {
        pWins = 0;
        aiWins = 0;
        tieWins = 0;
  }
  else if(result == "tie"){
    tieWins++;
  }
  else{
    aiWins++;
  }
  sessionStorage.setItem("pCount", pWins);
  sessionStorage.setItem("aiCount", aiWins);
  sessionStorage.setItem("tieCount", tieWins);

  document.getElementById('player-score').innerHTML = sessionStorage.getItem("pCount");
  document.getElementById('ai-score').innerHTML = sessionStorage.getItem("aiCount");
  document.getElementById('tie-score').innerHTML = sessionStorage.getItem("tieCount");

  console.log(pWins);



}

function reset(){
  document.getElementById('ai-rock').style.visibility = 'visible';
  document.getElementById('ai-paper').style.visibility = 'visible';
  document.getElementById('ai-scissors').style.visibility = 'visible';
  document.getElementById('player-rock').style.visibility = 'visible';
  document.getElementById('player-paper').style.visibility = 'visible';
  document.getElementById('player-scissors').style.visibility = 'visible';
  document.getElementById('win-status').innerHTML=" ";



}
