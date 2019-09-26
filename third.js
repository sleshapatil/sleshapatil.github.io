var form = document.querySelector("form");
var taskinput = document.querySelector("input[type = 'text']");
console.log(form);
console.log(taskinput);

taskinput.addEventListener("keydown", runEvent);
taskinput.addEventListener("keyup", runEvent);
taskinput.addEventListener("keypress", runEvent);
taskinput.addEventListener("focus", runEvent);
taskinput.addEventListener("blur", runEvent);
taskinput.addEventListener("input", runEvent);
//cut,paste,focus,blur,input

function runEvent(e){
    e.preventDefault();
    console.log(e.type);
    console.log(e.target.value);
}