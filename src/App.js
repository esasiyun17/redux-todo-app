import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addToDo} from './action/actions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  render() {
    const {dispatch,eklenmisTodos} = this.props
    return (
      <div className="App container">
        <AddTodo onAddClick={text=>dispatch(addToDo(text))}/>
        <TodoList todos={eklenmisTodos}/>
      </div>
    );
  }
}

function select(state){
  return {
    eklenmisTodos: state.todos
  }
}

export default connect(select) (App);

