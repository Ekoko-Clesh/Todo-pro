let todoButton = document.querySelector(".todo-button");
let todoListElements = document.querySelector(".todo-list");
let todoInput = document.querySelector(".todo-input");
let deleteButton = document.querySelector(".todo-list");
let filtro = document.querySelector(".filtro-todo");
filtro.addEventListener("click", changeState);
deleteButton.addEventListener("click", removeTodoItems)
todoButton.addEventListener("click", addTodo);




function addTodo(Event){
    Event.preventDefault();
    // criacao de DIV
    const DivTodo = document.createElement("div");
    DivTodo.classList.add("todo");

    // criacao de Li

    const novoTodo = document.createElement("li")
    novoTodo.innerHTML = todoInput.value;
    novoTodo.classList.add("todo-item");
    DivTodo.appendChild(novoTodo);

    todoListElements.appendChild(DivTodo);
    todoInput.value = null;

    // Criacao de butao check
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></li>`
    completedButton.classList.add("completed-button")
    todoListElements.appendChild(completedButton);
    DivTodo.appendChild(completedButton);

    // Criacao de Check lixeira
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></li>`;
    trashButton.classList.add("trash-button");
    DivTodo.appendChild(trashButton);
    console.log(todoListElements.childNodes.length)

}
function removeTodoItems(Event){

const item = Event.target;

//delete Todo
if (item.classList[0] === "trash-button"){
    const todo = item.parentElement;

//    Animacao de remocao
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function(){
         todo.remove();

    })
}
    // Marcar como completo o trabalho
    if(item.classList[0] === "completed-button"){
        const todo = item.parentElement;
       todo.classList.toggle('completed');
    }
}
function changeState(Event){
    const todos = todoList.childNodes;
    todos.forEach(function(Event){
        switch(e.target.value){
            case "todos": 
                todo.style.display = "flex";
                break;
            case "completos":
                if (todo.classList.contains('completos')){
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = "none";
                }
                break;
            case "incompletos":
                if(!todo.classList.contains('completos')){
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = "none";
                }
                break;
        }
    })
}
