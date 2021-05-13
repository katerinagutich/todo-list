import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from "../context";

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

function ToDoItem({item, index, onSelect}) {

    const {removeTodo} = useContext(Context)
    const classes = []
    if (item.completed) {
        classes.push('done')
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input
                    type="checkbox"
                    checked={item.completed}
                    style={styles.input}
                    onChange={() => onSelect(item.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {item.title}
            </span>
            <button className="rm" onClick={removeTodo.bind(null, item.id)}>&times;</button>
        </li>
    )
}

ToDoItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number,
    onSelect: PropTypes.func.isRequired
}
export default ToDoItem