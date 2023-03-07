// console.log('practiced')
// ;
let intervalId;
const intervalStart = () =>{
 let num = 0;
  intervalId = setInterval(() =>{
      document.getElementById('text_count').innerText = ++num;
 },1000)
}

function startbtn(){
   
   //start_count.innerText = ++num; 
   intervalStart();
}

function stop(){
   clearInterval(intervalId);
};
function resetBtn(){
  clearInterval(intervalId);
  document.getElementById('text_count').innerText = 0;
};









/* setInterval(displayHello, 1000);

function displayHello() {
  document.getElementById("demo").innerHTML += "Hello";
} */