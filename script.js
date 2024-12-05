let boxes = document.querySelectorAll(".box");
let newbtn = document.querySelector(".new-game");
let resetbtn = document.querySelector(".btn");
let msgbtn = document.querySelector(".message");

const arr2 = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let turnO = true;
let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
            box.classList.remove("turnX");
        }
      box.disabled = true;
      count++;
      checkWinner();
      if(count === 9) {
        msgbtn.innerText = "OOps!! Game Is A Draw";
        msgbtn.classList.remove("hide");
      }
    })
})

const showWinner = (winner) => {
    msgbtn.innerText = `Congratulations!! ${winner} Wins The Game`;
    msgbtn.classList.remove("hide");
}

const checkWinner = () => {
      for(pattern of arr2) {
       let pos1val = boxes[pattern[0]].innerText;
       let pos2val = boxes[pattern[1]].innerText;
       let pos3val = boxes[pattern[2]].innerText;

       if(pos1val != "" && pos2val != "" && pos3val != "") {
        if(pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val);
        }
       }
      }
}

newbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
       box.innerText = "";
       box.disabled = false;
       msgbtn.classList.add("hide");
    })
})

resetbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
     })
})