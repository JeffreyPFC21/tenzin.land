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

    clickHandler() {
        this.setState(ps => ({
            isLoaded: true,
            message: "get scammed haha lol"
        }))

        var x = document.getElementsByClassName("buttonLoad")[0];
        x.parentNode.removeChild(x)
    }

    render() {
        return (
            <div className="App">
                <p>{this.state.message}</p>
                <button onClick={() => this.clickHandler()}>load</button>
            </div>
        )
    }
}

export default Portfolio