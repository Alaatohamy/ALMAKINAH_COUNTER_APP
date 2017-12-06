import React, { Component } from 'react';

export default class Counter extends Component{
    render(){
        const {count, increment, decrement, reset} = this.props;
        return (
            <div>
                {count}
                <button onClick={increment}>Increment</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        )
    }
}
