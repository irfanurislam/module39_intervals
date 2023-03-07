console.log(1);
const timeoutId = setTimeout (() =>{
    console.log('lazy log')
},4000)
console.log(2);
console.log(3);
function dosmoething(){
    console.log(7);
}
console.log(4);
console.log(5);
console.log(6);

let num = 0;
const intervalId = setInterval (() => {
    //num++;
    console.log(++num)
    if(num === 10){
        clearInterval(intervalId);
    }
},1000);
//++num use korbo karon age ekbrai nibo then use korbo num++ 0 theke start hobe ar ++num 1 theke start hoi 
//console.log(setTimeout);