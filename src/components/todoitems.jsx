import React from "react";

const TodoItems = (props) =>{
    return(
        <li className="todo-items">
            <span>
        <input type="checkbox" />
        <span className="todo-text">{props.text}</span>
        </span>
        <p>...</p>
        </li>
        )
}
export default TodoItems;