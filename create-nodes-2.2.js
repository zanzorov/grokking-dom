let arr = ["html", "css", "js"];
const ul = document.createElement("ul");

function render(params) {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    li.textContent = arr[i];
    ul.append(li);
  }
}

document.body.append(ul);

render(arr);
