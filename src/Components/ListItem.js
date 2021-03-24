import React, { useRef, useState } from 'react';


function ListItem({ todo, deleteTodo, updateTodoChecked }) {

    const [check, setCheck] = useState(false);
    const checked = useRef(false);

    const changeCheckbox = () => {
        setCheck(checked.current.checked)
        updateTodoChecked(todo.id)
    }



    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <label>
                <input
                    type="checkbox"
                    onChange={changeCheckbox}
                    ref={checked}
                    defaultChecked={check}
                />
                <span>{todo.label}</span>
            </label>
            <span onClick={() => deleteTodo(todo.id)}>X</span>
        </div>
    )
}

export default ListItem;