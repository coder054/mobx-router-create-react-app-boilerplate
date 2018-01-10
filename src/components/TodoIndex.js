import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import {
  Redirect
} from 'react-router-dom'

@inject('TodoStore', 'UserStore')
@observer
class TodoIndex extends Component {
    render() {
        const { TodoStore, UserStore } = this.props
        return (
            <div className="TodoIndexRoot">
                {UserStore.authenticated? null : <Redirect to="/" />}
                <ul>
                    {
                        TodoStore.todos.slice().map((val, key) =>
                            <li id={val.id} className={val.done ? 'done' : 'notdone'} key={val.id}> {val.name}
                                <span> Status: {val.done ? 'done' : 'notdone'} </span>
                                <input
                                    type="checkbox"
                                    checked={val.done}
                                    onChange={(e) => TodoStore.toggleTodoStatus(val.id)} />
                                <button onClick={() => TodoStore.deleteTodo(val.id)}> delete </button>
                            </li >
                        )
                    }
                </ul>
                <div> Progress: {TodoStore.completedTodosCount}/{TodoStore.todos.length} </div>
                <button onClick={() => TodoStore.addTodo(prompt('name of todo', 'Coffe please'))}> New Todo </button>

            </div>
        )
    }
}

export default TodoIndex
