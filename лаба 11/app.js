import React, { useState } from 'react';
import './style.css';
const initialTodoListData = [
  { task: "Сделать дело", createdAt: "05/02/2024" },
  { task: "Погладить кошку", createdAt: "06/02/2024" },
  { task: "Посадить картошку", createdAt: "06/02/2024" },
  { task: "Прочитать книгу", createdAt: "07/02/2024" },
  { task: "Сходить в магазин", createdAt: "05/03/2024" },
];

const TodoList = () => {
  const [todoListData, setTodoListData] = useState(initialTodoListData);
  const [taskText, setTaskText] = useState('');
  const createListItem = () => {
    if (taskText.trim() !== '') {
      const currentDate = new Date().toLocaleDateString('en-GB');
      const newTask = { task: taskText, createdAt: currentDate };
      setTodoListData([...todoListData, newTask]);
      setTaskText('');
    }
  };
  const removeListItem = index => {
    const newList = [...todoListData];
    newList.splice(index, 1);
    setTodoListData(newList);
  };
  const clearList = () => {
    setTodoListData([]);
  };
  return (
    <div className="mainPart">
      <div className="menu">
        <input
          className="inputText"
          type="text"
          placeholder="Новый элемент списка"
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
        />
        <button className="addButton" onClick={createListItem}>Добавить</button>
        <button className="clearButton" onClick={clearList}>Очистить всё</button>
      </div>
      <div className="uList">
        {todoListData.length === 0 && (
          <div className="hiddenText">Не найдено ни одного дела</div>
        )}
        <ul className="list-container">
          {todoListData.map((item, index) => (
            <li key={index} onClick={() => removeListItem(index)}>
              <div>
                {item.task}
                <sub>от {item.createdAt}</sub>
              </div>
              <button>✖️</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
const App = () => {
  return (
    <div className="app-container">
      <header>
        <h1>Список дел</h1>
      </header>
      <TodoList />
      <footer>
        <hr />
        <div className="footer-text">Copyright ©</div>
      </footer>
    </div>
  );
};
export default App;
