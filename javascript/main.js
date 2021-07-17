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


