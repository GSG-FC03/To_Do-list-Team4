// Select the Elements

const list = document.getElementById("list");
const input = document.getElementById("input");
let todos= [];
const form = document.getElementById("form");
const section=document.getElementsByClassName("section1")[0];
// Classes names
// // const CHECK =document.createElement("");
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

function addToDo(toDo, id, done, trash) {
  if (trash) {
    return;
  }

  // const DONE = done ? CHECK : UNCHECK;
  // const LINE = done ? LINE_THROUGH : "";
  // // ${DONE}
  const item = `<li class="item">
                  <i class="fal fa-circle" job="complete" ></i> 
                  <p class="text">${toDo}</p>
                  <i class="fal fa-trash" job="delete" ></i>
                </li>
              `;

  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
 
}
function logSubmit(event) {

  event.preventDefault();
  const todo = input.value;
  todos.push(todo);
  if (todo) {
    addToDo(todo, 0, false, false);
  }
  if(input.value==""){
alert("The addtoDolist is emty")
  }
  else{input.value = "";}


localStorage.setItem("to",JSON.stringify(todos));

}

form.addEventListener("submit", logSubmit);
 const toDoList=window.onload=function(){
  const p= localStorage.getItem("to")
  const arr=JSON.parse(p)
  for(let s=0;arr.length>s;s++ ){
    const o = document.createElement("li");
    const trash= document.createElement('i');
           trash.classList.add('delIcon',"fal","fa-trash");
            trash.setAttribute('onclick', 'delet(event)');
    const circle= document.createElement("i");
    const text=document.createElement("p");
  //  trash.classList.add("fal","fa-trash")
  // trash.setAttribute("onclick","delet(event)");
   circle.classList.add("fal","fa-circle")
  o.setAttribute("class","item")
text.setAttribute("class","text")
text.textContent=arr[s];
o.appendChild(text)
o.appendChild(trash)
o.appendChild(circle)
list.appendChild(o)
section.appendChild(list)


  }}
//   const s=localStorage.getItem("to")
// //  if(s.length!=null){
//   const de= document.getElementsByClassName("fa-trash");
//   // for(let s=0;s<de.length;s++){
// function delet(event){
// const value=event.target.parentNode.textContent;
// console.log(5,value)
//  const deleted =todos.splice(todos.indexOf(value),1)
//  console.log(deleted)
// localStorage.setItem("to",JSON.stringify(deleted))
// event.parentNode.remove()

  //  const div = this.parentElement;
  //   div.style.display = "none";



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
