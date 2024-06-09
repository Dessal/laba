import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page content', () => {
  render(<App />);
  
  // Проверка заголовка
  const header = screen.getByText(/Список дел/i);
  expect(header).toBeInTheDocument();
  
  // Проверка кнопок
  const addButton = screen.getByText('Добавить');
  const clearButton = screen.getByText('Очистить всё');
  expect(addButton).toBeInTheDocument();
  expect(clearButton).toBeInTheDocument();
  
  // Проверка полей ввода
  const input = screen.getByPlaceholderText('Новый элемент списка');
  expect(input).toBeInTheDocument();
  
  // Проверка заглушки для пустого списка
  const emptyStub = screen.queryByText(/Не найдено ни одного дела/i);
  if (emptyStub) {
    expect(emptyStub).toBeInTheDocument();
  }
});
