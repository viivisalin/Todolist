export default function TodoTable(props) {
    const deleteByIndex = (index) => {
        props.poistaTodo(index);
    };  //muuten toimi mutta ilman tätä toimintoa, delete button ilmestyy mutta se ei toimi
        //yritin siirtää koko deleteByIndex 

    return (
        <table>
            <thead>
                <tr><th>Description</th><th>Date</th></tr>
            </thead>
            <tbody>
                {props.todos.map((todo, index) => (
                    <tr key={index}>
                        <td>{todo.description}</td>
                        <td>{todo.date}</td>
                        <td><button onClick={() => deleteByIndex(index)}>Del</button></td>
                    </tr>
                ))}
            </tbody>

        </table>
    );
}

// myöskin tein jaon komponenttikansioon niinkuin Matka-esimerkissä, toivottavasti ymmärsin oikein