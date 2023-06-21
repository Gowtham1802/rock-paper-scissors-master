//steps to solve it
/* 1. user input
  2. comp generated i/p 
  3. compare 
  4. show the result
*/

// 1. array, random num
// let scoreNo = document.querySelector('.score_number');
// scoreNo.innerText = 34;
// console.log(scoreNo);

// input --->
let scoreNum = document.querySelector('.score_number');
console.log(scoreNum);

let rockBtn = document.querySelector('.btn-rock');
console.log(rockBtn);

let paperBtn = document.querySelector('.btn-paper');
console.log(paperBtn);

let scissorsBtn = document.querySelector('.btn-scissors');
console.log(scissorsBtn);

let playBtn = document.querySelector('.play_gme');
console.log(playBtn);

let resultBtn = document.querySelector('.result');
console.log(resultBtn);

let myChoise_Scissors = document.querySelector('#mychoise_scissors');
console.log(mychoise_scissors);

let mychoise_rock = document.querySelector('#mychoise_rock');
console.log(mychoise_rock);

let mychoise_paper = document.querySelector('#mychoise_paper');
console.log(mychoise_paper);

let computerchoise_rock = document.querySelector('#computerchoise_rock');
console.log(computerchoise_rock);

let computerchoise_paper = document.querySelector('#computerchoise_paper');
console.log(computerchoise_paper);

let computerchoise_scissors = document.querySelector('#computerchoise_scissors');
console.log(computerchoise_scissors);

let nextScreenBox = document.getElementById('container2');
console.log(nextScreenBox);

let firstScreenBox = document.getElementById('container');
console.log(firstScreenBox);

let rule_model_cont = document.getElementById('rule_model_cont');
console.log(rule_model_cont)

let basic_rules_btn = document.getElementById('basic_rules_btn');
console.log(basic_rules_btn)

let icon_close = document.getElementById('icon_close');
console.log(icon_close)

function basicRulesClose(){
  rule_model_cont.style.display = "none";
}

function basicRulesOpen(){
  rule_model_cont.style.display = "flex";
}

basic_rules_btn.addEventListener("click",basicRulesOpen);
console.log(basic_rules_btn);
icon_close.addEventListener("click",basicRulesClose);

let Array = ["rock", "paper", "scissors"];
let score = 0;
 
function computerGeneratedInput(){
  const myChoise = Math.trunc (Math.random()*3);
  return Array[myChoise];
}

function gameResult(userInput){
  let compChoise = computerGeneratedInput();
  if (userInput == "rock"){
    nextScreenBox.style.display = "flex";
    firstScreenBox.style.display = "none";
    mychoise_paper.style.display = "none";
    myChoise_Scissors.style.display = "none";
    mychoise_rock.style.display = "inline";
    // user
    if (compChoise == "paper"){
      resultBtn.innerText = "You Lost";
      computerchoise_paper.style.display = "inline";
      computerchoise_rock.style.display = "none";
      computerchoise_scissors.style.display = "none";
      return "User lose";
    }else if (compChoise == "scissors"){
      resultBtn.innerText = "You Won";
      computerchoise_paper.style.display = "none";
      computerchoise_rock.style.display = "none";
      computerchoise_scissors.style.display = "inline";
      score = score + 1;
      scoreNum.innerText = score;
      return "Won";
    }else {
      resultBtn.innerText = "Match Draw";
      computerchoise_paper.style.display = "none";
      computerchoise_rock.style.display = "inline";
      computerchoise_scissors.style.display = "none";
      return "Draw"
    }
  }
  else if (userInput == "paper"){
    nextScreenBox.style.display = "flex";
    firstScreenBox.style.display = "none";
    myChoise_Scissors.style.display = "none";
    mychoise_rock.style.display = "none";
    mychoise_paper.style.display = "inline";

    if (compChoise == "scissors"){
      resultBtn.innerText = "You Lost";
      computerchoise_paper.style.display = "none";
      computerchoise_rock.style.display = "none";
      computerchoise_scissors.style.display = "inline";
      return "User lose";
    }else if (compChoise == "rock"){
      resultBtn.innerText = "You Won";
      computerchoise_paper.style.display = "none";
      computerchoise_rock.style.display = "inline";
      computerchoise_scissors.style.display = "none";
      score = score + 1;
      scoreNum.innerText = score;
      return "Won";
    }else {
      resultBtn.innerText = "Match Draw";
      computerchoise_paper.style.display = "inline";
      computerchoise_rock.style.display = "none";
      computerchoise_scissors.style.display = "none";
      return "Draw";
    }
  }
  else if (userInput == "scissors"){
    nextScreenBox.style.display = "flex";
    firstScreenBox.style.display = "none";
    mychoise_paper.style.display = "none";
    mychoise_rock.style.display = "none";
    myChoise_Scissors.style.display = "inline";

    if (compChoise == "rock"){
      resultBtn.innerText = "You Lost";
      computerchoise_paper.style.display = "none";
      computerchoise_rock.style.display = "inline";
      computerchoise_scissors.style.display = "none";
      return "User lose";
    }else if (compChoise == "paper"){
      resultBtn.innerText = "You Won";
      computerchoise_paper.style.display = "inline";
      computerchoise_rock.style.display = "none";
      computerchoise_scissors.style.display = "none";
      score = score + 1;
      scoreNum.innerText = score;
      return "Won";
    }else {
      resultBtn.innerText = "Match Draw";
      computerchoise_paper.style.display = "none";
      computerchoise_rock.style.display = "none";
      computerchoise_scissors.style.display = "inline";
      return "Draw";
    }
  }
}
rockBtn.addEventListener('click',()=>{
  console.log(gameResult("rock"));
});

paperBtn.addEventListener('click',()=>{
  console.log(gameResult("paper"));
});

scissorsBtn.addEventListener('click',()=>{
  console.log(gameResult("scissors"));
});

playBtn.addEventListener('click',function(){
  nextScreenBox.style.display = "none";
  firstScreenBox.style.display = "flex";
})





