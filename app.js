/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");
/*-------------------------------- Variables --------------------------------*/
let sum;
let totalSum;
let firstNum;
let operation;
let secondNum;
let section;
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", displayer);
/*-------------------------------- Functions --------------------------------*/
//this function responsible for split the expretion then calculate it and display it
function A() {
  section = document.querySelector(".display").innerHTML.split(" ");
  firstNum = section[0];
  operation = section[1];
  secondNum = section[2];

  document.querySelector(".display").innerHTML = eval(
    document.querySelector(".display").innerText
  );
  sum = document.querySelector(".display").innerHTML;
  totalSum = parseInt(sum);
}

function displayer(event) {
  const id = event.target.innerText;

  if (
    event.target.classList.contains("number") ||
    event.target.innerText === "*" ||
    event.target.innerText === "-" ||
    event.target.innerText === "+" ||
    event.target.innerText === "/"
  ) {
    document.querySelector(".display").innerText += " " + id;
  }
  // this if responsible for reset the calculator
  if (event.target.innerText === "C") {
    document.querySelector(".display").innerText = "";
    sum = undefined;
    operator = undefined;
    totalSum = undefined;
  }
  //this if responsible for continue doing the last operation if you continue click =
  if (event.target.innerText === "=") {
    if (totalSum !== undefined) {
      if (operation === "+") {
        totalSum += parseInt(secondNum);
      }
      if (operation === "-") {
        totalSum -= parseInt(secondNum);
      }
      if (operation === "*") {
        totalSum *= parseInt(secondNum);
      }
      if (operation === "/") {
        totalSum /= parseInt(secondNum);
      }
      document.querySelector(".display").innerHTML = totalSum;
    } else {
      A();
    }

    sum = undefined;
  }
}
