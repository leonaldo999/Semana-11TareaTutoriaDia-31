# Tarea tutoria semana 11

## ToDo List en JavaScript

Este proyecto es una aplicación simple de lista de tareas (ToDo List) construida con HTML, CSS y JavaScript. Permite a los usuarios agregar, editar, eliminar y limpiar todas las tareas. Los datos se almacenan en el `localStorage` del navegador, lo que permite que las tareas persistan incluso después de cerrar la página.

## Estructura del Proyecto

El proyecto está compuesto por tres archivos principales:

1. **index.html**: Contiene la estructura básica de la aplicación.
2. **styles.css**: Define el estilo y diseño de la aplicación.
3. **app.js**: Contiene la lógica de la aplicación.

## Descripción de los Archivos

### 1. index.html

Este archivo contiene la estructura HTML de la aplicación. Incluye:

- Un formulario para agregar nuevas tareas.
- Un botón para eliminar todas las tareas.
- Un contenedor para mostrar la lista de tareas.
- Un área para mostrar notificaciones.

```html
<main class="container">
  <section class="form-section">
    <h1 class="title">Actividad</h1>
    <form id="todo-form">
      <input type="text" id="todo-input" placeholder="Agregar nueva tarea" required>
      <button type="submit">Agregar</button>
    </form>
    <button id="clear-all" class="btn-danger">Eliminar Todo</button>
  </section>

  <section id="todo-list" class="todo-list"></section>
</main>
```

### 2. styles.css
Este archivo contiene el estilo de la aplicación. Se utiliza para dar un diseño moderno y atractivo a la interfaz de usuario. Incluye estilos para el contenedor principal, formularios, botones y tarjetas de tareas.

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f4f8;
  margin: 0;
  padding: 0;
}

.container {
  width: 80%;
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
```

### 3. script.js

Este archivo contiene la lógica de la aplicación. Aquí se manejan las interacciones del usuario y la manipulación de datos. Las principales funciones son:

- *Cargar tareas desde localStorage*: Al cargar la página, se recuperan las tareas almacenadas y se muestran en la lista.

- *Agregar nuevas tareas*: Al enviar el formulario, se agrega una nueva tarea a la lista y se almacena en localStorage.

- *Editar tareas*: Permite al usuario editar el texto de una tarea existente.

- *Eliminar tareas*: Permite al usuario eliminar una tarea específica.

- *Eliminar todas las tareas*: Permite al usuario limpiar la lista de tareas.

- *Mostrar notificaciones*: Muestra mensajes de éxito al usuario después de realizar acciones.

```js
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
```

## Cómo Ejecutar el Proyecto

1. Clona este repositorio o descarga los archivos.

1. Abre el archivo index.html en tu navegador.

1. Agrega tareas utilizando el formulario.

1. Edita o elimina tareas según sea necesario.

1. Utiliza el botón "Eliminar Todo" para limpiar la lista de tareas.
