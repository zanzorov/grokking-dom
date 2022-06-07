const firstDiv = document.createElement("div");
const secondDiv = document.createElement("div");
const thirdDiv = document.createElement("div");

firstDiv.classList.add("red");
secondDiv.classList.add("green");
thirdDiv.classList.add("blue");

thirdDiv.textContent = "я вложен";

firstDiv.append(secondDiv);
secondDiv.append(thirdDiv);

console.log(firstDiv);
