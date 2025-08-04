let options = document.querySelectorAll('.choice');
let USERscore = 0;
let COMPscore = 0;
let result = document.querySelector('.para');

let winner = () => {
options.forEach((option) => {
    option.addEventListener('click', () => {//🔍 e.target refers to the actual element that was clicked.
                                            //🔍 e.currentTarget refers to the element the event listener is attached to.
        let array = ['Rock', 'Paper', 'Scissor'];
        let randomindex = Math.floor(Math.random() * 3);
        let CompChoice = array[randomindex];
        let UserChoice = option.getAttribute('id');
        if (CompChoice === UserChoice) {
            result.innerText = "It's a tie!";
            result.style.backgroundColor = 'yellow';
            result.style.color = 'black';
      } else if (
        (CompChoice === 'Rock' && UserChoice === 'Scissor') ||
        (CompChoice === 'Paper' && UserChoice === 'Rock') ||
        (CompChoice === 'Scissor' && UserChoice === 'Paper')
      ) {
        result.innerText = "Computer wins!";
        result.style.backgroundColor = 'red';
        COMPscore++;
        document.querySelector('#comp-score').innerText = COMPscore;
      } else {
        result.innerText = "You win!";
        result.style.backgroundColor = 'green';
        USERscore++;
        document.querySelector('#user-score').innerText = USERscore;
      }
      
    })
})
}
winner();       