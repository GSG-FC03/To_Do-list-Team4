// Select the Elements
// const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";


// Show todays date
// const options = {weekday : "long", month:"short", day:"numeric"};
// const today = new Date();

// dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function addToDo(toDo, id, done, trash){
  
  if(trash){ return; }
    
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";
  
  const item = `<li class="item">
                  <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                  <p class="text ${LINE}">${toDo}</p>
                  <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  

                  
                </li>
              `;


  const position = "beforeend";
  
  list.insertAdjacentHTML(position, item);
}



// addToDo("d", 1, false, false)
//  addToDo("c", 2, true, false)
//  addToDo("x", 3, true, true)

function logSubmit(event) {
  event.preventDefault();
  const todo = input.value;
  if(todo){
    addToDo(todo,0,false,false);    
  }

  input.value="";

}

const form = document.getElementById('form');
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


