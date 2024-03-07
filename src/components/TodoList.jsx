import { useState } from "react";
import TodoTable from "./TodoTable";

export default function TodoList() {

    const [todo, setTodo] = useState({ description: '', date: '' });
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        if (todo.date !== '' || todo.description !== ''){
            setTodos([...todos, todo]);
            setTodo({date:'', description:''});
        } else {
            alert("Input date and decription!")
        }
    };

    const handleDeleteTodo = (deleteIndex) => {
        setTodos(todos.filter((todo, index) => index !== deleteIndex));
    }

    return (
        <>
        <h1>Todos</h1>

            <label>Description</label>
            <input
                value= {todo.description}
                onChange={ e => setTodo({...todo, description: e.target.value})}
            />
            <label>Date</label>
            <input
                type="date"
                value= {todo.date}
                onChange={ e => setTodo({...todo, date: e.target.value})}
            />

            <button onClick={handleAddTodo}>Add</button>
            <TodoTable todos={todos} handleDeleteTodo={handleDeleteTodo} />
        </>
    );
}
