let wins = 0; let loses = 0;
const choices = ["papier", "caillou", "ciseaux"];
const gameStatus = document.getElementById("gameStatus");
const gameScore = document.getElementById("gameScore");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");

function runGame(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  switch(userChoice + '_' + computerChoice) {
    case 'papier_ciseaux':
    case 'caillou_papier':
    case 'ciseaux_caillou':
      loses += 1;
      gameStatus.innerHTML = `M: ${userChoice} | C: ${computerChoice} -> C Wins`
      break;
    case 'papier_caillou':
    case 'caillou_ciseaux':
    case 'ciseaux_papier':
      wins += 1;
      gameStatus.innerHTML = `M: ${userChoice} | C: ${computerChoice} -> M Wins`
      break;
    case 'papier_papier':
    case 'caillou_caillou':
    case 'ciseaux_ciseaux':
      gameStatus.innerHTML = `M: ${userChoice} | C: ${computerChoice} -> Egalité`
      break;
  }

  gameScore.innerHTML = `Me: ${wins} | Co: ${loses}`;
}

paper.addEventListener("click", () => runGame("papier"));
rock.addEventListener("click", () => runGame("caillou"));
scissors.addEventListener("click", () => runGame("ciseaux"));