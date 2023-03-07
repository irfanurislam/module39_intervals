

const getdata = new Promise((resolve,reject) => {
    //resolve(564355); //Promise { 564355 }
    const num = Math.random()*10;
    console.log(num);
    if(num > 5){
        resolve(564355);
    }
    else{
        reject('no get the more');
    }
    


})
//console.log(getdata);
 getdata
      .then(data => console.log(data)) //564355
      .catch(err => console.error('ERR',err))
      

/*const getload = new Promise ((resolve,reject) => {
    reject ('no data have');
})
getload
.then(data => console.log(data))
.catch(error => console.error('ERR',error)); */