// Select the Elements

const list = document.getElementById("list");
const input = document.getElementById("input");
const form = document.getElementById('form');
// Classes names
// // const CHECK =document.createElement("");
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

function addToDo(toDo, id, done, trash){
  
  if(trash){ return; }
    
  // const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";
  // ${DONE} 
  const item = `<li class="item">
                  <i class="fal fa-circle" job="complete" id="${id}"></i> 
                  <p class="text ${LINE}">${toDo}</p>
                  <i class="fal fa-trash" job="delete" id="${id}"></i>
                </li>
              `;


  const position = "beforeend";
  
  list.insertAdjacentHTML(position, item);
  
}
function logSubmit(event) {
  event.preventDefault();
const todo = input.value;

  if(todo){
    addToDo(todo,0,false,false);    
  
  }
  input.value="";
}

form.addEventListener('submit', logSubmit);

let date ={weekday:"long" , month:"short" ,day:"numeric"} 
const d = new Date();
const day=document.getElementsByClassName("day")[0];
day.textContent =d.toLocaleDateString("English",date)

const img = document.getElementsByClassName("image")[0];
const darli = document.body;
function dark (){
   darli.classList.toggle("dark-mode"); 
   img.classList.toggle("sunset");
}






