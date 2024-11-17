const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const clearAllButton = document.getElementById('clear-all');
const notification = document.getElementById('notification');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Load todos from localStorage
document.addEventListener('DOMContentLoaded', loadTodos);

// Add new todo
todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoText = todoInput.value;
  const todoObj = { text: todoText, id: Date.now() };
  todos.push(todoObj);
  localStorage.setItem('todos', JSON.stringify(todos));
  todoInput.value = '';
  displayTodos();
  showNotification('Tarea agregada con éxito');
});

// Display todos
function loadTodos() {
  todos.forEach(todo => {
    createTodoElement(todo);
  });
}

function displayTodos() {
  todoList.innerHTML = '';
  todos.forEach(todo => {
    createTodoElement(todo);
  });
}

// Create todo element
function createTodoElement(todo) {
  const todoItem = document.createElement('div');
  todoItem.className = 'card';
  todoItem.innerHTML = `
        <span>${todo.text}</span>
        <div>
            <button class="edit-btn" data-id="${todo.id}">Editar</button>
            <button class="delete-btn" data-id="${todo.id}">Eliminar</button>
        </div>
    `;
  todoList.appendChild(todoItem);

  // Edit button event
  todoItem.querySelector('.edit-btn').addEventListener('click', () => {
    const newText = prompt('Editar tarea:', todo.text);
    if (newText) {
      todo.text = newText;
      localStorage.setItem('todos', JSON.stringify(todos));
      displayTodos();
      showNotification('Tarea editada con éxito');
    }
  });

  // Delete button event
  todoItem.querySelector('.delete-btn').addEventListener('click', () => {
    todos = todos.filter(t => t.id !== todo.id);
    localStorage.setItem('todos', JSON.stringify(todos));
    displayTodos();
    showNotification('Tarea eliminada con éxito');
  });
}

// Clear all todos
clearAllButton.addEventListener('click', () => {
  todos = [];
  localStorage.removeItem('todos');
  displayTodos();
  showNotification('Todas las tareas han sido eliminadas');
});

// Show notification
function showNotification(message) {
  notification.innerText = message;
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}