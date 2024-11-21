import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

test('renders TodoList with initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build Todo App')).toBeInTheDocument();
});

test('allows users to add a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');
  const addButton = screen.getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'Test new todo' } });
  fireEvent.click(addButton);

  expect(screen.getByText('Test new todo')).toBeInTheDocument();
});

test('allows users to toggle a todo as completed or not completed', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');

  fireEvent.click(todoItem);

  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('allows users to delete a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText('Delete')[0];

  fireEvent.click(deleteButton);
  
  expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
});
