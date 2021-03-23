import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        return (
            <div>
                <ul className="collection">
                    {
                        this.props.todos.map(todo=>
                           <Todo key={todo.id} {...todo}/>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;