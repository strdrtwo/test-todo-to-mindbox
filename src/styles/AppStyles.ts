import styled, { css } from 'styled-components';
import React from "react";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
`;

export const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    active?: boolean;
}

const baseButtonStyles = css`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  &:focus {
    outline: none;
  }
`;

const primaryStyles = css`
  background-color: #3b82f6;
  color: white;
  &:hover {
    background-color: #2563eb;
  }
`;

const secondaryStyles = css`
  background-color: #e5e7eb;
  color: black;
  &:hover {
    background-color: #d1d5db;
  }
`;

const dangerStyles = css`
  background-color: #ef4444;
  color: white;
  &:hover {
    background-color: #dc2626;
  }
`;

const activeStyles = css`
  border: 2px solid #3b82f6;
`;

export const StyledButton = styled.button<ButtonProps>`
  ${baseButtonStyles}
  ${({ variant }) => variant === 'primary' && primaryStyles}
  ${({ variant }) => variant === 'secondary' && secondaryStyles}
  ${({ variant }) => variant === 'danger' && dangerStyles}
  ${({ active }) => active && activeStyles}
`;