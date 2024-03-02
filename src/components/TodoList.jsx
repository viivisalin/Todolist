import { useState } from "react";
import TodoTable from "./TodoTable";

export default function TodoList() {

    const [todo, setTodo] = useState({ description: '', date: '' });
    const [todos, setTodos] = useState([]);

    const handleChange = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    };

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
        setTodo({ description: "", date: "" });
    };

    const deleteByIndex = (index) => {
        console.log("poistettavan index = " + index);
        setTodos(todos.filter((todo, i) => i != index));
    }

    return (
        <>
            <input
                type="text"
                name="description"
                placeholder="Description"
                onChange={handleChange}
                value={todo.description}
            />
            <input
                type="text"
                name="date"
                placeholder="Date"
                onChange={handleChange}
                value={todo.date}
            />
            <button onClick={addTodo}>Add</button>
            <TodoTable todos={todos} poistaTodo={deleteByIndex} />
        </>
    );
}
