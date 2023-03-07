// synchornus
console.log('I');
console.log('Eat');
console.log('Ice cream');


// async

console.log('I');
setTimeout(() =>{
    console.log('eat');
},2000)

console.log('ice cream');

/* 
I
Eat
Ice cream
I
ice cream
eat */