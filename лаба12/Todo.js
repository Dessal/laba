import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './App.js';

test('adds a new todo', () => {
  render(<TodoList />);
  
  const input = screen.getByPlaceholderText('Новый элемент списка');
  const addButton = screen.getByText('Добавить');
  
  fireEvent.change(input, { target: { value: 'Новая задача' } });
  fireEvent.click(addButton);
  
  const newTodo = screen.getByText('Новая задача');
  expect(newTodo).toBeInTheDocument();
});

test('renders empty todo list', () => {
  render(<TodoList />);
  
  const clearButton = screen.getByText('Очистить всё');
  fireEvent.click(clearButton);

  const emptyStub = screen.queryByText(/Не найдено ни одного дела/i);
  expect(emptyStub).toBeInTheDocument();
});

test('renders filled todo list', () => {
  render(<TodoList />);
  
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(5); // начальное количество задач
  expect(todoItems[0]).toHaveTextContent('Сделать дело');
  expect(todoItems[1]).toHaveTextContent('Погладить кошку');
});
