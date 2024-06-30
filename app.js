/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll(".button");
/*-------------------------------- Variables --------------------------------*/
let sum;
let totalSum;
let firstNum;
let operation;
let secondNum;
let section;
let isEqualPressed = false;
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener("click", displayer);
/*-------------------------------- Functions --------------------------------*/
//this function responsible for split the expretion then calculate it and display it

function A() {
  section = document.querySelector(".display").innerHTML.split(/[\+\-\*\/]/);

  firstNum = section[0];
  operation = document
    .querySelector(".display")
    .innerHTML.match(/[\+\-\*\/]/)[0];
  secondNum = section[1];
  if ((secondNum === "0" && operation === "/") || secondNum === "") {
    document.querySelector(".display").innerHTML = "Error";
    setTimeout(function () {
      document.querySelector(".display").innerText = "";
      sum = undefined;
      operation = undefined;
      totalSum = undefined;
    }, 2000);
  } else {
    document.querySelector(".display").innerHTML = eval(
      document.querySelector(".display").innerText
    );
    sum = document.querySelector(".display").innerHTML;
    totalSum = parseInt(sum);
  }
}

function displayer(event) {
  const id = event.target.innerText;

  if (event.target.classList.contains("number")) {
    // if the clicked button is a number do
    if (totalSum > 0 || document.querySelector(".display").innerText === "0") {
      // if there is a bast total sum and we clicked on a number without using C
      // it should clear the display and reset the bast sum to 0 then do a new calc
      document.querySelector(".display").innerText = "";
      totalSum = 0;
    }
    document.querySelector(".display").innerText += id;
  }
  //else if we clicked on a operation without using C
  // and there is a sum alredy on the display it should continue the calc using that sum
  else if (
    event.target.innerText === "*" ||
    event.target.innerText === "-" ||
    event.target.innerText === "+" ||
    event.target.innerText === "/"
  ) {
    // if the equal was pressed and i click on an operation it will reset the total sum to 0
    //so when i continue to click on a number it will not enter the first if and count it as new calc
    if (isEqualPressed) {
      totalSum = 0;
    }
    document.querySelector(".display").innerText += id;
    isEqualPressed = false;
  }

  // this if responsible for reset the calculator
  if (event.target.innerText === "C") {
    document.querySelector(".display").innerText = "";
    sum = undefined;
    operation = undefined;
    totalSum = undefined;
  }
  //this if responsible for calculate the sum
  if (event.target.innerText === "=") {
    //if its the first time that i click the '=' it will do the calc normaly and it will set the isEqualPressed to true
    //so it will not enter this part again unless i press on an operation because it will restrat the isEqualPressed to false
    if (isEqualPressed === false) {
      A();
      isEqualPressed = true;
    } else {
      // the else part responsible for continue doing the last operation if you continue click =

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
      }
    }
  }
  sum = undefined;
}
