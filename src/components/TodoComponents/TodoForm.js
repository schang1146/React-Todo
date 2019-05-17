import React from 'react';

class TodoForm extends React.Component {

    render() {
        return (
            <form className='todo-form' onSubmit={this.props.addTodoHandler}>
                <input
                    type='text'
                    value={this.props.task}
                    placeholder='...todo'
                    name='task'
                    onChange={this.props.changeHandler}
                />
                <button onClick={this.props.addTodoHandler}>Add Todo</button>
                <button onClick={this.props.clearCompletedHandler}>Clear Completed</button>
            </form>
        );
    };
};

export default TodoForm;