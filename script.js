// @ts-nocheck
const button = document.querySelector('button');
const container = document.querySelector('#container');
const body = document.body;
const modalEle = document.createElement("div");
const gameSectionInner = document.querySelector(".game-section-inner");
const gameSection = document.querySelector(".game-section");
const eleButton = document.querySelector("#element-button");
const rps = ["paper", "rock", "scissors"];
const scoreCount = document.querySelector("#score-count");
const resultSection = document.querySelector(".result-section");
const resultText = document.querySelector("#result");
const playAgain = document.querySelector(".play-again");
const com = document.querySelector(".computer");


let modal = null


// Modal section 
modalEle.innerHTML = `<div id="modal">
<div class="modal-heading">
  <h2>RULES</h2>
  <div class="close" onclick="closeModal()">
    <img src="./images/icon-close.svg" alt="close" style="object-fit: contain;">
  </div>
</div>
<div class="modal-body">
  <img src="./images/image-rules.svg" alt="rules">
</div>

</div>`
  ;

function showModal() {
  body.appendChild(modalEle);
  modal = document.getElementById('modal');
  if (modal) {
    container ? container.style.opacity = "0.20" : null;
    modal.style.display = "block";
  } else null;
}

function closeModal() {
  modal.style.display = "none";
  container ? container.style.opacity = "1.00" : null;
  body.removeChild(modalEle);
}


//Play Section

let computerId;
function showComputer() {
  const rand = Math.floor(Math.random() * 3);
  computerId = rand;
  setTimeout(() => {
    // const com = document.createElement("section");
    switch (rps[rand]) {
      case "paper": com.innerHTML = `<h3>THE HOUSE PICKED</h3><div class="parent paper">
                                    <div class="child">
                                    <img src="./images/icon-paper.svg" alt="paper">
                                    </div>
                                    </div>`;
        // gameSectionInner.appendChild(com);
        break;
      case "rock": com.innerHTML = `<h3>THE HOUSE PICKED</h3><div class="parent rock">
                                    <div class="child">
                                      <img src="./images/icon-rock.svg" alt="rock">
                                    </div>
                                    </div>`;
        // gameSectionInner.appendChild(com);
        break;

      case "scissors": com.innerHTML = `<h3>THE HOUSE PICKED</h3><div class="parent scissors">
                                      <div class="child">
                                        <img src="./images/icon-scissors.svg" alt="scissors">
                                      </div>
                                      </div>`;
        // gameSectionInner.appendChild(com);
        break;
    }
  }, 500);


}



function customizeGameSection(Ele) {
  // gameSectionInner.style.display = "flex";
  // gameSectionInner.style.justifyContent = "space-between";
  gameSectionInner.innerHTML = Ele;
  // gameSection.appendChild(gameSectionInner);
  document.querySelector(".content").style.display = "none";
  gameSection.style.display = "block";

}


let score = 0;
function getScore(id) {
  let selectedId;

  if (id == 'paper-outer' || id == 'paper-inner' || id == 'paper-img')
    selectedId = "paper";
  else if (id == 'rock-outer' || id == 'rock-inner' || id == 'rock-img')
    selectedId = "rock";
  else if (id == 'scissors-outer' || id == 'scissors-inner' || id == 'scissors-img')
    selectedId = "scissors";

  console.log(selectedId, rps[computerId]);
  if (selectedId == rps[computerId]) {
    return [score, "draw"];
  }
  else if ((selectedId == "paper" && rps[computerId] == "rock") || (selectedId == "rock" && rps[computerId] == "scissors") || (selectedId == "scissors" && rps[computerId] == "paper")) {
    score = score + 1;
    return [score, "win"];
  }
  else if ((selectedId == "paper" && rps[computerId] == "scissors") || (selectedId == "rock" && rps[computerId] == "paper") || (selectedId == "scissors" && rps[computerId] == "rock")) {
    score = score - 1;
    return [score, "lose"];
  }
}

eleButton.addEventListener('click', (e) => {



  if (e.target.id == 'paper-outer' || e.target.id == 'paper-inner' || e.target.id == 'paper-img') {
    console.log('paper clicked');
    const paperEle = `<section>
                        <h3>YOU PICKED</h3>
                        <div class="parent paper">
                        <div class="child">
                        <img src="./images/icon-paper.svg" alt="paper">
                        </div>
                        </div>
                      </section>`

    // <section><h3>THE HOUSE PICKED</h3><div id="computer" style="border-radius:50%; background:hsl(229, 25%, 31%);width:100%"></div></section>`

    customizeGameSection(paperEle);

    showComputer();
  }
  else if (e.target.id == 'rock-outer' || e.target.id == 'rock-inner' || e.target.id == 'rock-img') {
    console.log('rock clicked');
    const rockEle = `<section>
                        <h3>YOU PICKED</h3>
                        <div class="parent rock">
                        <div class="child">
                          <img src="./images/icon-rock.svg" alt="rock">
                        </div>
                        </div>
                      </section>`

    // <section> <h3>THE HOUSE PICKED </h3><div id="computer" style="border-radius:50%; background:hsl(229, 25%, 31%);width:100%"></div></section>`

    customizeGameSection(rockEle);

    showComputer();
  }
  else if (e.target.id == 'scissors-outer' || e.target.id == 'scissors-inner' || e.target.id == 'scissors-img') {
    console.log('scissors clicked');
    const scissorEle = `<section>
                        <h3>YOU PICKED</h3>
                        <div class="parent scissors">
                        <div class="child">
                          <img src="./images/icon-scissors.svg" alt="scissors">
                        </div>
                        </div>
                        </section>`

    // <section> <h3>THE HOUSE PICKED </h3><div id="computer" style="border-radius:50%; background:hsl(229, 25%, 31%);width:100%"></div></section>`

    customizeGameSection(scissorEle);

    showComputer();
  }


  setTimeout(() => {
    let [score, result] = getScore(e.target.id);
    if (result == "win") {
      resultText.textContent = "YOU WIN";
      playAgain.style.color = "hsl(230, 89%, 62%)";
    }
    else if (result == "lose") {
      resultText.textContent = "YOU LOSE";
      playAgain.style.color = "hsl(349, 71%, 52%)";
    }
    else if (result == "draw") {
      resultText.textContent = "DRAW";
      playAgain.style.color = "hsl(39, 89%, 49%)";
    }
    resultSection.style.display = "block";
    console.log(score);
    scoreCount.textContent = score;
  }, 900)


  e.stopPropagation();
})

function restart() {
  com.innerHTML = null;
  resultSection.style.display = "none";
  gameSection.style.display = "none";
  document.querySelector(".content").style.display = "block";
}