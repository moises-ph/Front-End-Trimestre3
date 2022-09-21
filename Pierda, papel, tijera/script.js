const game = ["stone", "paper", "scissors"];

let scores = [0,0];

const stone = document.getElementById("stone");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

document.addEventListener("DOMContentLoaded", Score);
stone.addEventListener("click", (e)=> Game(e));
paper.addEventListener("click", (e)=> Game(e));
scissors.addEventListener("click", (e)=> Game(e));

const getRandomInt = (max) => Math.floor(Math.random() * max);


function Alert(value_computer, value_human){
  const results = Validation(value_computer, value_human);
  results[0] == results[1] ? Swal.fire("Empate"): 
  results[0] > results[1] ? Swal.fire("Perdiste") : 
  results[0] < results[1] ? Swal.fire("Ganaste"): null;
}

function Score(){
  document.getElementById("score_pc").innerText = scores[0];
  document.getElementById("score_human").innerText = scores[1];
}

function Game(e){
  const element = e.path.filter(element => element.localName == "button");
  const value_human = element[0].value;
  const value_computer = game[getRandomInt(3)];
  let validation = Validation(value_computer, value_human);
  scores[0] += validation[0];
  scores[1] += validation[1];
  Score();
  Alert(value_computer, value_human)
}

function Validation(computer, human){
  if(computer == "stone" && human == "scissors") return [1,0];
  else if(computer == "scissors" && human == "stone") return [0,1];
  if(computer == "paper" && human == "stone") return [0,1];
  else if(computer == "stone" && computer == "paper")  return [1,0];
  if(computer == "scissors" && human == "paper") return [1,0];
  else if(computer == "paper" && human == "scissors") return [0,1];
  if(computer == "scissors" && human == "scissors") return [1,1];
  if(computer == "paper" && human == "paper") return [1,1];
  if(computer == "stone" && human == "stone") return [1,1];
}