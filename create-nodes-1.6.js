const mainDiv = document.createElement("div");
const ul = document.createElement("ul");
const item_1 = document.createElement("li");
const item_2 = document.createElement("li");
const link_1 = document.createElement("a");
const link_2 = document.createElement("a");

mainDiv.append(ul);
ul.append(item_1, item_2);
item_1.append(link_1);
item_2.append(link_2);

link_1.href = "https://instagram.com/intocode";
link_1.textContent = "наш инстаграм";

link_2.href = "https://intocode.ru";
link_2.textContent = "наш сайт";

document.body.append(mainDiv);


console.log(mainDiv);


