
function displayRed(){

   alert('Red color')
  
}

function displayWhite(){

    alert('White color')
   
 }



function displayBlue(){

    alert('Blue color')
   
 }





function flipColors(){
    document.querySelector("#red").style.backgroundColor= 'blue';
    document.querySelector("#blue").style.backgroundColor= 'red';

}

function resetColors(){
    document.querySelector("#red").style.backgroundColor= 'red';
    document.querySelector("#blue").style.backgroundColor= 'blue';

}