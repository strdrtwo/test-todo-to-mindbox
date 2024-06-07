import styled from 'styled-components';

export const TodoItemContainer = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const TodoText = styled.span<{ completed: boolean }>`
  font-size: 1rem;
  ${({ completed }) => completed && `
    text-decoration: line-through;
    color: #9ca3af;
  `}
  max-width: 80%;
  word-wrap: break-word;
`;