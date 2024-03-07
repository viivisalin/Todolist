export default function TodoTable(props) {

    return (
        <table>
            <thead>
                <th>Description</th>
                <th>Date</th>
            </thead>
            <tbody>
                {
                    props.todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                            <td><button onClick={() => props.handleDeleteTodo(index)}>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
    );
}
