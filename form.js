var input=document.getElementById("text");
let x 
function checkInput(){

    input.addEventListener("change" , addValue );

    function addValue(){
    x=input.value

    }
    console.log(x);
}
checkInput();