import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'wash my hair', isEditing: false },
    { id: 2, text: 'work on my project', isEditing: false },
    { id: 3, text: 'work on my yard', isEditing: false },
    { id: 4, text: 'walk the dog', isEditing: false },
    { id: 5, text: 'make the bed', isEditing: false }
  ]);

  const handleEdit = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isEditing: true } : todo
    ));
  };

  const handleInputChange = (id, value) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: value } : todo
    ));
  };

  const handleSave = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isEditing: false } : todo
    ));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="card-stack">
      <h1>Todo List</h1>
      <div className="card" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          {todos.map(todo => (
            <li className="list-group-item d-flex" key={todo.id}>
              {todo.isEditing ? (
                <input
                  type="text"
                  value={todo.text}
                  autoFocus
                  onBlur={() => handleSave(todo.id)}
                  onChange={(e) => handleInputChange(todo.id, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSave(todo.id);
                  }}
                />
              ) : (
                <span onClick={() => handleEdit(todo.id)}>
                  {todo.text}
                </span>
              )}
              <FontAwesomeIcon
                icon={faDeleteLeft}
                style={{ marginLeft: "auto", cursor: "pointer" }}
                onClick={() => handleDelete(todo.id)}
              />
            </li>
          ))}
        </ul>
        <div className="card-footer">
          {todos.length} items left
        </div>
      </div>
    </div>
  );
};

export default Home;
