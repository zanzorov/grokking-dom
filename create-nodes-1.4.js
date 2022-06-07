/* Задача 1.4. Создай узел тега ul и добавь к нему класс list. 
Следом создай узел тега li с текстовым контентом "привет, мир". 
Вложи узел li внутрь узла ul. Выведи в консоль оба получившихся узла. */

const ulNode = document.createElement("ul");
ulNode.classList.add("list");

const liNode = document.createElement("li");
liNode.textContent = "привет, мир";
ulNode.append(liNode);

console.log(ulNode);
console.log(liNode);
