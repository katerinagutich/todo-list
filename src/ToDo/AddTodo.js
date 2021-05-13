import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo({onCreate}) {

    const [value, setValue] = React.useState('')

    function submitHandler(event) {
        event.preventDefault()

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <button type="submit">ADD</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo