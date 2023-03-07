
function showbtn() {
    const agefeild = document.getElementById('search-feild');
    const ageText = agefeild.value;
    const errortag = document.getElementById('error')


    try {
        //console.log(brabria);
        const age = parseInt(ageText);
        if (isNaN(age)) {
            //console.log('not found', age, ageText);
            throw "please enter a number";
        }else if(age < 18){
              throw " bacca kacca not allow"
        }
        else if(age > 30){
            throw "murbbbira doywa koire asiyenna"
        }
        errortag.innerHTML=""
    }
    catch (error) {
        console.log('error', error);
        errortag.innerHTML = 'Error ' + error;
    }

    finally {
        console.log('inside try catch all done!')
    }
    console.log(1111);
}