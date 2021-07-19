

const list = document.getElementById("list");
const input = document.getElementById("input");

let todoList = [];


function alogSubmit(event) {
  event.preventDefault();
  const toDo = input.value;
  console.log(toDo);
  todoList.push(toDo);
  console.log(todoList, 5);

  localStorage.setItem("todoList", JSON.stringify(todoList));

  
  const item = `<li class="item">
   <i class="fal fa-circle" job="complete" ></i> 
  <p class="text">${toDo[0]}</p>
  <i class="fal fa-trash" job="delete" "></i>
</li>
`;
console.log(item)
  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
}

const form = document.getElementById("form");

form.addEventListener("submit", alogSubmit);
let date = { weekday: "long", month: "short", day: "numeric" };
const d = new Date();
const day = document.getElementsByClassName("day")[0];
day.textContent = d.toLocaleDateString("English", date);

const img = document.getElementsByClassName("image")[0];
const darli = document.body;
function dark() {
  darli.classList.toggle("dark-mode");
  img.classList.toggle("sunset");
}
