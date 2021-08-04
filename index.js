// Selectors
const todoInput = document.querySelector('.todo-Input');
const todoButton = document.querySelector('.todo-Button');
const todoList = document.querySelector('.todo-List');
const filtrOption = document.querySelector('.filter-todo');


// Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOptions.addEventListener('click', filtertodo);

// Functions

function addTodo(event) {
    // prevents the default event from taking place. In this case 'Submitting'
    event.preventDefault();

    // Creating an Element 'todo DIV'
    const todoDiv = document.createElement('div');

    // Giving it a class
    todoDiv.classList.add('todo');

    // Creating another element 'Li'
    const newTodo = document.createElement('li');

    // Todo text
    const todoText = todoInput.value;
    newTodo.innerText = todoText;

    // giving it a class
    newTodo.classList.add('todo-item');

    // this shifts the item in 'newTodo' to 'todoDiv'
    todoDiv.appendChild(newTodo);

// CHECK BUTTON!!!!
    // Creating another element 'button' that is completed
    const completedBtn = document.createElement('button');

    // using innerHTML !innerText, call the check icon with the i tag//
    completedBtn.innerHTML = '<i class ="fas fa-check"></i>';

    // Give it a class
    completedBtn.classList.add('completed-btn');

    // append it to the main div
    todoDiv.appendChild(completedBtn);


// TRASH/DELETE BUTTON
    // Creating another element 'button' that is delete
    const deleteBtn = document.createElement('button');

    // using innerHTML !innerText, call the check icon with the i tag//
    deleteBtn.innerHTML = '<i class ="fas fa-trash"></i>';

    // Give it a class
    deleteBtn.classList.add('delete-btn');

    // append it to the main div
    todoDiv.appendChild(deleteBtn);

    // APPENDING THE "todoDiv" TO THE "todoList"
    todoList.appendChild(todoDiv);

    // Clear todo value after appending
    todoInput.value = "";

}


//BUTTON FUNCTIONING
function deleteCheck(e) {
    const item = e.target;

    // DELETE TODO
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;

 // Animation
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }


    // CHECK ITEM...
    if (item.classList[0] === "completed-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}

function filtertodo(e){
    const todos = todoList.childNodes;
    todo.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
            break;
            case "completed":
                if (todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todos.style.display = 'none';
                }
        }
    });
}

