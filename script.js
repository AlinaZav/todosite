const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document. getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = todoInput.value;

    if (newTask === '' ){
        alert('Пожалуйста впишите задачу');
        return;
    }

    todoInput.value = '';

    addTask(newTask);
});

function addTask(task){
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');

  taskText.textContent = task;  
  listItem.appendChild(taskText);
 
  const chekBox = document.createElement('input');
    chekBox.setAttribute('type', 'checkbox');

    listItem.appendChild(chekBox);

    const deleteButton = document.createElement('button');
  deleteButton.textContent ='Delete';

  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);


  chekBox.addEventListener('change', function(){
    if(this.checked){
        taskText.style.textDecoration = 'line-through';
    } else {
        taskText.style.textDecoration = 'none';
    }

});

deleteButton.addEventListener('click', function(){
todoList.removeChild(listItem);
});



}



