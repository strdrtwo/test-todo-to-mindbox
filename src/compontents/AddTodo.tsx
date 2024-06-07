import React, {useState} from 'react';
import {AddTodoForm, TodoInput, SubmitButton} from './AddTodoStyles'

interface AddTodoProps {
    addTodo: (text: string) => void
}

export const AddTodo: React.FC<AddTodoProps> = ({addTodo}) => {
    const [text, setText] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!text.trim()) {
            return;
        }
        addTodo(text)
        setText('')
    }

    return (
        <AddTodoForm onSubmit={handleSubmit}>
            <div>
                <TodoInput
                    value={text}
                    placeholder={'Whats need to be done?'}
                    onChange={(e) => setText(e.target.value)}
                />
                <SubmitButton
                    type="submit"
                >
                    Add Todo
                </SubmitButton>
            </div>
        </AddTodoForm>
    )
}