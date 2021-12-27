import React, { Component } from 'react'
export class Counter extends Component {
    constructor(props){
        super(props);
        this.state={count:0}
    }
    counter=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <div>
                <h2> Counter </h2>
                <p>The counter is {this.state.count}</p>
                <button onClick={this.counter}> Increment</button>
                <button onClick={()=> this.setState({count:this.state.count-1})}> Decrement</button>
                <button onClick={()=> this.setState({count:0})}> Reset</button>
            </div>
        )
    }
}

export default Counter
