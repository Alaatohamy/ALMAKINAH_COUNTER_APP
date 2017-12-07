import React, { Component } from 'react';

export default class Todos extends Component{
    componentWillMount(){
        const {getTodos} = this.props;
        getTodos();
    }
    render(){
        const {todos, loading} = this.props;
        return (
            <div>
                {
                    todos.map((todo) => {
                        return (
                            <div>{todo.content}</div>
                        )
                    })
                }
            </div>
        )
    }
}
