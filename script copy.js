// 'use strict';

// const todoControl = document.querySelector('.todo-control'),
//     headerInput = document.querySelector('.header-input'),
//     todoList = document.querySelector('.todo-list'),
//     todoCompleted = document.querySelector('.todo-completed');

// const todoData = [];

// for (let i = 0; i < localStorage.length; i++) {
//     todoData[i] = (localStorage.getItem(i+1).split(','));
// }

// const render = function() {
//     todoList.textContent = '';
//     todoCompleted.textContent = '';

//     todoData.forEach(function(item){
//         const li = document.createElement('li');
        
//         li.classList.add('todo-item');

//         li.innerHTML = '<span class="text-todo">' + item[0] + '</span>' + 
//         '<div class="todo-buttons">'+
//             '<button class="todo-remove"></button>'+
//             '<button class="todo-complete"></button>'+
//         '</div>';
//         if (Boolean(item[1])) {
//             todoCompleted.append(li);
//         } else {
//             todoList.append(li);
//         }
//         const btnTodoComplete = li.querySelector('.todo-complete');
//         btnTodoComplete.addEventListener('click', function(){
//             item.completed = !item.completed;
//             render();
//         });
//         const btnTodoRemove = li.querySelector('.todo-remove');
//         btnTodoRemove.addEventListener('click', function(){
//             todoData.forEach(function(item, i){
//             console.log(i);
//             localStorage.removeItem(todoData.indexOf(item), 1);});
//             //console.log(item[0]);
//            // todoData.splice(item, 1); 
//             render();
//         });

//     });
// };



// todoControl.addEventListener('submit', function(){
//     let index = localStorage.length;
//     index++;
//     event.preventDefault();
//     if (headerInput.value){
//     const newTodo = [
//         headerInput.value,
//         ''
//     ];
//     localStorage.setItem(index, newTodo);
//     render();
// }
// headerInput.value = '';
//     render();
// });

// render();