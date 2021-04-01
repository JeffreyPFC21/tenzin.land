import React, { Component } from 'react'

export class Counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            counter: 0,
            message: "who me?",
            wmm: true
        }
    }
    
    setCounter() {
        // this.setState({
        //     counter: this.state.counter + 1
        // })
        if(this.state.wmm) {
            this.setState(prevState => ({
                counter: prevState.counter + 1,
                message: "yes you"
            }))
        } else {
            this.setState(prevState => ({
                counter: prevState.counter + 1,
                message: "bruh you smell go away"
            }))
        }
    }

    setCounter5() {
        this.setCounter()
        this.setCounter()
        this.setCounter()
        this.setCounter()
        this.setCounter()
    }

    render() {
        return (
            <div>
                <h1>Count - {this.state.counter}</h1>
                <h1>Tenzin says "{this.state.message}"</h1>
                <button onClick={() => { this.setCounter()}}>Increment & Say something</button>
                <button onClick={() => { this.setCounter5()}}>Increment 5</button>
            
            </div>
        )
    }
    
}

export default Counter
