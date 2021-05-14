import React, {useState} from 'react';
import PropTypes from 'prop-types';

function AddTodo({onCreate}) {

    const [value, setValue] = useState('');

    const input = {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }

    const submitHandler = event => {
        event.preventDefault();
        if (input.value().trim()) {
            onCreate(input.bind.value);
            input.clear();
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input {...input.bind} />
            <button type="submit">ADD</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo;