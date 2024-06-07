import React, {useState} from 'react';
import {Todo} from "./types";
import {AddTodo} from "./compontents/AddTodo";
import {TodoList} from "./compontents/TodoList";
import { Container, Header, ButtonGroup, StyledButton } from './styles/AppStyles';


type Filter = 'all' | 'active' | 'completed'

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [filter, setFilter] = useState<Filter>('all')

    const addTodo = (text: string) => {
        const newTodo = {id: Date.now(), text, completed: false};
        setTodos([...todos, newTodo])
    }

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        )
    }

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed))
    }

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed
        if (filter === 'completed') return todo.completed
        return true
    })

    return (
        <Container>
            <Header>todos</Header>
            <AddTodo addTodo={addTodo} />
            <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
            <ButtonGroup>
                <StyledButton
                    onClick={() => setFilter('all')}
                    variant="primary"
                    active={filter === 'all'}
                >
                    All
                </StyledButton>
                <StyledButton
                    onClick={() => setFilter('active')}
                    variant="secondary"
                    active={filter === 'active'}
                >
                    Active
                </StyledButton>
                <StyledButton
                    onClick={() => setFilter('completed')}
                    variant="secondary"
                    active={filter === 'completed'}
                >
                    Completed
                </StyledButton>
                <StyledButton
                    onClick={clearCompleted}
                    variant="danger"
                >
                    Clear Completed
                </StyledButton>
            </ButtonGroup>
        </Container>
    );
};

export default App;