import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function ToDoList(props) {
    return (
        <ul style={styles.ul}>
            { props.list.map((todo, idx) => {
                return (
                    <ToDoItem
                        item={todo}
                        key={todo.id}
                        index={idx}
                        onSelect={props.onToggle}
                    />
                )
            })}
        </ul>
    );
}

ToDoList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default ToDoList;