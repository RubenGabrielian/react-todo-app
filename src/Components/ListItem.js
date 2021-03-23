import React from 'react';


function ListItem({ todo }) {
    return (
        <label>
            <input type="checkbox" />
            <span>{todo.label}</span>
        </label>
    )
}

export default ListItem;