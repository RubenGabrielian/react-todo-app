import React, { useRef, useState } from 'react';


function Form({ data, setData }) {

    const inputElement = useRef(null);
    const submitForm = (e) => {
        e.preventDefault();
        
        setData([...data, { label: inputElement.current.value, complated: false }]);
        inputElement.current.value = '';
    }


    return (
        <form onSubmit={submitForm}>
            <input type="text" ref={inputElement} />
            <button>Add</button>
        </form>
    )
}

export default Form;