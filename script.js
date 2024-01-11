let button = document.getElementById('add');
let inputbox = document.getElementById('inputbox');
let todolist = document.getElementById('todoList');

let todos = [];

function Test(){
    console.log(inputbox.innerText);
    todos.push(inputbox.innerText);
    display(inputbox.value);
}
function display(todo){
    let para = document.createElement('p');
    para.innerText=todo;
    todolist.appendChild(para);
}