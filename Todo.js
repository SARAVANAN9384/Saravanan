let button=document.getElementById("add");
let Todolist=document.getElementById("todo");
let input=document.getElementById("input");

let todo=[];
window.onload=()=>{
  todo =JSON.parse(localStorage.getItem('todo')) || []
  todo.forEach(todo =>addtodo(todo));

}

button.addEventListener('click',()=>{
    todo.push(input.value)
    localStorage.setItem('todo',JSON.stringify(todo))
    addtodo(input.value)
    input.value=''
})

function addtodo(todo){
    let para =document.createElement('p');
    para.innerText=todo;
    Todolist.appendChild(para)

    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(todo)
    })

    para.addEventListener('dblclick',()=>{
        Todolist.removeChild(para)
        remove(todo)
    })
}

function remove(todo){
    let index = todo.indexOf(todo)
    if(index>-1){
    todo.splice(index,1);
    }
    localStorage.setItem('todo',JSON.stringify(todo))

}