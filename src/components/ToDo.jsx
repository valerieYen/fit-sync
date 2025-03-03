import React, { useState } from "react";

function ToDo() {
    const [toDo, setToDo] = useState("");
    const [list, setList] = useState([]);

    function addToDo() {
        if (toDo.trim()) {
            setList([...list, toDo]);
            setToDo("");
        }
    }

    function removeToDo(index) {
        setList(list.filter((todo, todoIndex) => todoIndex !== index));
    }

    return (

        <div className="ToDo SubPage">
            <h1>-To Do List-</h1>
            <input
                placeholder="Add todo here"
                name="todo"
                value={toDo}
                onChange={(e) => setToDo(e.target.value)}
            />
            <button onClick={addToDo}>Add</button>

            <ul>
                {list.map((todo, index) => (
                    <li key={index}>
                        {todo}{" "}
                        <button onClick={() => removeToDo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDo;
