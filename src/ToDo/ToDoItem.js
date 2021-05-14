import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from "../context";


function ToDoItem({item, index, onSelect}) {

    const {removeTodo} = useContext(Context);
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
            <button className="rm" onClick={removeTodo.bind(null, item.id)}>&times;</button>
        </li>
    );
}

ToDoItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number,
    onSelect: PropTypes.func.isRequired
}
export default ToDoItem;