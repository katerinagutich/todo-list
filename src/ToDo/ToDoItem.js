import React from 'react'
import PropTypes from 'prop-types'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function ToDoItem({item, index}) {
    return (
        <li style={styles.li}>
            <span>
                <input type="checkbox" style={styles.input}/>
                <strong>{index + 1}</strong>
                &nbsp;
                {item.title}
            </span>
            <button className="rm">&times;</button>
        </li>
    )
}

ToDoItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number
}
export default ToDoItem