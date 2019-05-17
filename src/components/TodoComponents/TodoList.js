// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const todo = [];

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todo
        };
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    addTodoHandler = event => {
        event.preventDefault();
        let newTodo = {
            task: this.state.task,
            id: Date.now(),
            completed: false,
        };
        this.setState({
            todo: [...this.state.todo, newTodo],
            task: '',
        });
    };

    toggleToDo = todoId => {
        console.log('todoId: ', todoId);
        this.setState({
            todo: this.state.todo.map(todo => {
                if (todoId === todo.id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        });
    };

    clearCompletedHandler = event => {
        event.preventDefault();
        this.setState({
            todo: this.state.todo.filter(todo => !todo.completed)
        });
    };

    render() {
        return (
            <div>
                <h2>Todo List: MVP</h2>

                <div className='todo-list'>
                    {this.state.todo.map(todo => (
                        <Todo key={todo.id} todo={todo} toggleToDo={this.toggleToDo}/>
                    ))}
                </div>

                <TodoForm
                    addTodoHandler={this.addTodoHandler}
                    changeHandler={this.changeHandler}
                    clearCompletedHandler={this.clearCompletedHandler}
                    task={this.state.task}
                    id={this.state.id}
                    completed={this.state.completed}
                />

            </div>
        );
    };
};

export default TodoList;