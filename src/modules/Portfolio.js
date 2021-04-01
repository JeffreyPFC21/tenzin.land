import React, { Component } from 'react'
import '../App.css';

class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            message: "pls load tyty"
        }
    }

    render() {
        return (
            <div className="App">
                <p>{this.state.message}</p>
                <button>load</button>
            </div>
        )
    }
}

export default Portfolio