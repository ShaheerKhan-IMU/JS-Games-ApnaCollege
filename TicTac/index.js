// let btn = document.querySelector('#btn');
// btn.addEventListener('dblclick', () => {
//     const para = document.createElement('p');
//     para.textContent = "Game Started!";
//     document.body.appendChild(para);
// })



let buttons = document.querySelectorAll('.box');
let turn0 = true;

let successes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let checkwinner = () => {
    for(let success of successes){
        let pos1val = buttons[success[0]].innerText;
        let pos2val = buttons[success[1]].innerText;
        let pos3val = buttons[success[2]].innerText;
        if(pos1val === pos2val && pos2val === pos3val && pos1val !== ""){
            let winner = document.createElement('h1');
            winner.innerText = `Winner is ${pos1val}`;
            document.body.appendChild(winner);
            buttons.forEach((button) => {
                button.disabled = true;
            })
        }
}}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(turn0){
            button.innerText = "O";
            turn0 = false;
        } else{
            button.innerText = "X";
            turn0 = true;
        }
        button.disabled = true;
        checkwinner();
        })
    
})

let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    buttons.forEach((button) => {
        button.innerText = "";
        button.disabled = false;
    })
    let winner = document.querySelector('h1');
    if(winner) {
        winner.remove();
    }
    turn0 = true;
})