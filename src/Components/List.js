import React from 'react';
import ListItem from './ListItem';

function List({ data, setSata }) {
    return (
        <div>
            {data.map((item, i) => {
                return (
                    <ListItem todo={item} key={i} />
                );
            })}

        </div>
    );
}

export default List;