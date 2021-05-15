import React from 'react';
import PropTypes from 'prop-types';

function ToDoItem({item, index, onSelect, onDelete}) {

    const classes = [];
    if (item.completed) {
        classes.push('done')
    }

    return (
        <li>
            <span className={classes.join(' ')}>
                <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => onSelect(item.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {item.title}
            </span>
            <button className="rm" onClick={() => onDelete(item.id)}>&times;</button>
        </li>
    );
}

ToDoItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        completed: PropTypes.bool,
        title: PropTypes.string
    }),
    index: PropTypes.number,
    onSelect: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}
export default ToDoItem;