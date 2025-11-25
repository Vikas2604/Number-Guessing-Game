const minNum = 1;
const maxNum = 100;

let answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

const submit = document.querySelector('#submit-btn');
const inputBox = document.querySelector('#input-box');
const msg = document.querySelector('#message');
const attemptBox = document.querySelector('#attempt-value');
const rst = document.querySelector('#rst-btn');
const resultMsg = document.querySelector('#result-msg')
let attempts = 0;
attemptBox.innerHTML = 0
function submitFun() {
  let userInp = inputBox.value;
  if (userInp == "") {
    msg.innerHTML = `Please Provide a Valid Input.`;
  } else {
    userInp = parseInt(userInp);
    if (userInp >= minNum && userInp <= maxNum) {
      msg.innerHTML = `Your Number : ${userInp}`;
      attempts++;
      attemptBox.innerHTML = attempts;
      if (userInp == answer) {
        msg.innerHTML = "You Guessed The Right Number!"
        resultMsg.style.display = 'block'
        resultMsg.innerHTML = `You Have Succesfully Completed the Game In ${attempts} Attempts.`;
        submit.disabled = true;
        setTimeout(() => {
          attemptBox.innerHTML = 0;
          attempts = 0;
          answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
          resultMsg.style.display = 'none';
          msg.innerHTML = '';
          inputBox.value = '';
          submit.disabled = false;
        }, 5000);
      } else if (userInp < answer) {
        msg.innerHTML = "Too Low! Try a Higher Number..."
      } else if (userInp > answer) {
        msg.innerHTML = "Too High! Try a Lower Number..."
      }
    } else {
      msg.innerHTML = "Please enter a number between 1 and 100.";
    }
  }
}


function rstFun() {
  msg.innerHTML = "Game Resetting...";
  submit.disabled = true;
  rst.disabled = true;
  setTimeout(() => {
    attempts = 0;
    answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
    attemptBox.innerHTML = "0";
    resultMsg.innerHTML = '';
    resultMsg.style.display = 'none';
    inputBox.value = '';
    msg.innerHTML = '';
    alert("Game Reset, You May Start A New Game.")
    submit.disabled = false;
    rst.disabled = false;
  }, 5000);
}

