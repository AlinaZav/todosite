const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document. getElementById('todo-list');
const TodoTu = document. getElementById('tuturu');
const TodoIt = document. getElementById('jdi');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = todoInput.value;

    if (newTask === '' ){
        alert('Пожалуйста впишите задачу');
        return;
    }else{
        TodoIt.play();
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
  deleteButton.textContent ='Удалить';

  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);

 

  chekBox.addEventListener('change', function(){
    if(this.checked){
        TodoTu.play();
        taskText.style.textDecoration = 'line-through';
        
    } else {
        taskText.style.textDecoration = 'none';
    }

});

deleteButton.addEventListener('click', function(){
todoList.removeChild(listItem);
});


}



