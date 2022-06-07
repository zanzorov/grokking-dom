let arr = [
  {
    name: "Google",
    url: "https://google.com",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    name: "intocode",
    url: "https://intocode.ru",
  },
];

const ul = document.createElement("ul");

function render(params) {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    const link = document.createElement("a");
    ul.append(li);
    li.append(link);
    link.href = arr[i].url;
    link.textContent = arr[i].name;
  }
}

document.body.append(ul);

render(arr);
