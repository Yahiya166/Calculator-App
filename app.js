var input = document.getElementById("input");

function calc(num) {
    input.value += num;
}

function Clear(){
    input.value = "0";
}


function Result(){
    input.value = eval(input.value);
}