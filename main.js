//  Namta --------->

// const namta = prompt("Enter Your Value");

// // For Loop --------->

// for (let i = 1; i <= 10; i++) {
//   //   console.log(namta + " x " + i + " = " + namta * i);
//   console.log(`${namta} X ${i} = ${namta * i}`);
// }

//  while loop --------->

// let x = 1;
// while (x <= 10) {
//   console.log(x * namta);
//   x++;
// }

//  Array  ------------------>

// let array = [
//   "Beef",
//   "Chicken",
//   "Muttton",
//   "Vegitable",
//   "Thai Green",
//   "Thai Red",
// ];
// array[1] = 333;
// array.pop();
// array.push("FDR");
// array.shift();
// array.unshift("Red");

// array.splice(2, 1);
// array.splice(2, 0, "add");
// console.log(array);

// for (let x = 0; x < array.length; x++) {
//   console.log(`${array[x]} Curry`);
// }

// <--------- Calculation ---------->

const sum = (a = 10, b = 10) => {
  const sumresult = a + b;
  const suminfo = { sumresult: sumresult, funName: "sum" };
  return suminfo;
};

const sub = (a = 10, b = 10) => {
  const subresult = a - b;
  const subinfo = { subresult: subresult, funName: "sub" };
  return subinfo;
};

const multi = (a = 10, b = 10) => {
  const multiresult = a * b;
  const multiinfo = { multiresult: multiresult, funName: "multi" };
  return multiinfo;
};

const divison = (a = 10, b = 10) => {
  const divisonresult = a / b;
  const divisoninfo = { divisonresult: divisonresult, funName: "divison" };
  return divisoninfo;
};

const modulas = (a = 10, b = 10) => {
  const modulasresult = a % b;
  const modulasinfo = { modulasresult: modulasresult, funName: "modulas" };
  return modulasinfo;
};

const expo = (a = 10, b = 10) => {
  const exporesult = a ** b;
  const expoinfo = { exporesult: exporesult, funName: "expo" };
  return expoinfo;
};

//  Store all data in array   ------>
const allData = [sum, sub, multi, divison, modulas, expo];
const inputfirstValue = document.getElementById("value1");
const inputsecondValue = document.getElementById("value2");
const btn = document.getElementById("btn");
const display = document.getElementById("display");

btn.addEventListener("click", () => {
  const firstValue = +inputfirstValue.value;
  const secondValue = +inputsecondValue.value;

  // calling All Function

  for (let a = 0; a < allData.length; a++) {
    const finalResult = allData[a](firstValue, secondValue);
    // display.innerHTML += `${finalResult} </br>`;
    console.log(finalResult);
    if (finalResult.funName === "sum") {
      display.innerHTML += `Addition is :  ${finalResult.sumresult} <br>`;
    } else if (finalResult.funName === "sub") {
      display.innerHTML += `Substraction is : ${finalResult.subresult} <br>`;
    } else if (finalResult.funName === "multi") {
      display.innerHTML += `Multiplication is : ${finalResult.multiresult} <br>`;
    } else if (finalResult.funName === "divison") {
      display.innerHTML += `Division is : ${finalResult.divisonresult} <br>`;
    } else if (finalResult.funName === "modulas") {
      display.innerHTML += `Modulas is : ${finalResult.modulasresult} <br>`;
    } else if (finalResult.funName === "expo") {
      display.innerHTML += `Exponential is : ${finalResult.exporesult} <br>`;
    }
  }
});
