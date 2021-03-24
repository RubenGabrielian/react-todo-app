import React from 'react';
import ListItem from './ListItem';

function List({ data, setSata, deleteTodo, updateTodoChecked }) {
    return (
        <div>
            {data.map((item, i) => {
                return (
                    <ListItem todo={item} deleteTodo={deleteTodo} updateTodoChecked={updateTodoChecked} key={i} />
                );
            })}
        </div>
    );
}

export default List;