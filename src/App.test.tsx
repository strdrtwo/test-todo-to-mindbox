// src/components/App.test.tsx

import React from 'react';
import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For better assertions
import App from './App';

describe('App', () => {
    test('renders the header', () => {
        render(<App />);
        const headerElement = screen.getByText(/todos/i);
        expect(headerElement).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<App />);
        const inputElement = screen.getByPlaceholderText(/Whats need to be done?/i);
        const addButton = screen.getByText(/Add Todo/i);

        fireEvent.change(inputElement, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        const todoElement = screen.getByText(/New Todo/i);
        expect(todoElement).toBeInTheDocument();
    });

    test('toggles todo completion', () => {
        render(<App />);
        const inputElement = screen.getByPlaceholderText(/Whats need to be done?/i);
        const addButton = screen.getByText(/Add Todo/i);

        fireEvent.change(inputElement, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();

        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
    });

    test('clears completed todos', async() => {
        render(<App />);
        const inputElement = screen.getByPlaceholderText(/Whats need to be done?/i);
        const addButton = screen.getByText(/Add Todo/i);

        fireEvent.change(inputElement, { target: { value: 'Todo to be completed' } });
        fireEvent.click(addButton);

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox); // Mark the todo as completed

        await waitFor(() => expect(screen.getByText(/Clear Completed/i)).toBeInTheDocument());

        fireEvent.click(screen.getByText(/Clear Completed/i));
        expect(screen.queryByText(/Todo to be completed/i)).toBeNull();
    });
});