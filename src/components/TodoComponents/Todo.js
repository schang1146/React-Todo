import React from 'react';

function Todo(props) {
    return (
        <div className='todo-item'>
            <p>
                {props.todo.task}
            </p>
        </div>
    );
};

export default Todo;