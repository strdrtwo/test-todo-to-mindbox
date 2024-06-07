import React from 'react';
import {Todo} from "../types";
import {TodoItem} from "./TodoItem";


interface TodoListProps {
    todos: Todo[],
    toggleTodo: (id:number) => void;
}
export const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo}) => {
    return (
        <div className="">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </div>
    )
}