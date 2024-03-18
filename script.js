let boxes = document.querySelectorAll(".game-button");
let disabledBtn = document.querySelector("#btn-reset");
let newGameBtn = document.querySelector("#btn-start");
let winmsg = document.querySelector("#win-msg");
let resetBtn = document.querySelector("#btn-reset");
let winingPattern  = [
    [0, 1, 2] ,
    [0, 3, 6] ,
    [0, 4, 8] ,
    [1, 4, 7] ,
    [2, 5, 8] ,
    [2, 4, 6] ,
    [3, 4, 5] ,
    [6, 7, 8] 
];

let turn = true;

let resetGame = () => {
    turn = true;
    enableBoxes();
    winmsg.classList.add("hide");
    resetBtn.classList.add("hide");
}



boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        if(turn) {
            box.innerText = 'X';
            turn = false;
            // console.log(winingPattern[box])
        }
        else {
            box.innerText = 'O';
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    })
})


let checkWinner= () => {
    for(let pattern of winingPattern) {
        if((boxes[pattern[0]].innerText != "" && boxes[pattern[1]].innerText != "" && boxes[pattern[2]].innerText != "") && (boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText)) {
            console.log("winner is: " + boxes[pattern[0]].innerText);
            disableBoxes();
            showWinner(boxes[pattern[0]].innerText);
            
        }
        checkGameOver();
    }
}

let checkGameOver = () => {
    let isOver = true;
    for( let box of boxes) {
        if(box.innerText === "") {
            isOver = false
        }
    }
    if(isOver) {
        showGameOver();
    }
}

let disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

let enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
}

let showWinner = (winner) => {
    winmsg.innerText = `Congratulations, Winner is: ${winner}`
    disabledBtn.classList.remove("hide");
    winmsg.classList.remove("hide");
}

let showGameOver = () => {
    winmsg.innerText = `Ooops, Game is Over! Please Restart`
    disabledBtn.classList.remove("hide");
    winmsg.classList.remove("hide");
}




resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener('click', resetGame);
console.log(resetBtn, newGameBtn);