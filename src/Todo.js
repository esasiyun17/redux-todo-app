import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div>
                <li className="collection-item">
                    {this.props.text}
                </li>
            </div>
        );
    }
}

export default Todo;