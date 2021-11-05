//session storage will be useful

//make sure there is no null using if statements

//(1)display results

//(2)remove images hide function

//(3) Write values for score using session storage

function show(id){
  if(id === document.getElementById('rock').innerHTML)
    document.getElementById('player-paper').style.visibility = 'hidden';
    document.getElementById('player-scissors').style.visibility = 'hidden';

}
