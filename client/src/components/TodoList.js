import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, updateTodo, deleteTodo, }) => (
  <div>
    { todos.map( todo => 
        <Todo
          key={todo.id}
          { ...todo }
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      )
    }
  </div>
);

export default TodoList;