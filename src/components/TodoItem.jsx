import styles from "../App.css";
import { useState } from 'react';


const TodoItem = ({ itemProp, handleChange,delTodo, setUpdate }) => {
    const [editing, setEditing] = useState(false);
    const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
          setEditing(false);
        }
      };
    const handleEditing = () => {
        setEditing(true);
      };

      let viewMode = {};
      let editMode = {};
      if (editing) {
        viewMode.display = 'none';
      } else {
        editMode.display = 'none';
      }
    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };
    return (
      <li className={styles.item}>
        <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
          <button onClick={handleEditing}>Edit</button>
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        <span style={itemProp.completed ? completedStyle : null}>
        {itemProp.title}
        </span>
        <input
      type="text"
      value={itemProp.title}
      className={styles.textInput}
      style={editMode}
      onKeyDown={handleUpdatedDone}
      onChange={(e) => setUpdate(e.target.value, itemProp.id)}
    />
        </div>
      </li>
    );
  };
  export default TodoItem;
  