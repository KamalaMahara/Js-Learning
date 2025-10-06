let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset");
let newGamebtn = document.querySelector("#newGame");
let msgcontainer = document.querySelector(".winMessage");
let msg = document.querySelector("#msg");

let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
  [2, 5, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwin();
  });
});

const checkwin = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log(`winner ${pos1Val}`);
        showwinner(pos1Val);
      }
    }
  }
};
const disableboxes = () => {
  boxes.forEach((box) => (box.disabled = true));
};
const showwinner = (winner) => {
  msg.innerText = ` 🎉 Congratulations!🎊, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};

const resetGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    msgcontainer.classList.add("hide");
    turnO = true;
  });
};
newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
