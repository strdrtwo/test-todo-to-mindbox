import React from 'react';
import {Todo} from "../types";
import {TodoItemContainer, TodoText} from './TodoItemStyles';

interface TodoItemProps {
    todo: Todo,
    toggleTodo: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({todo, toggleTodo}) => {
    return (
        <TodoItemContainer>
            <div>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                />
                <TodoText completed={todo.completed}>
                    {todo.text}
                </TodoText>
            </div>
        </TodoItemContainer>
    )
}