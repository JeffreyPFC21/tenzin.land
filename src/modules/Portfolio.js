import React, { Component } from 'react'
import '../App.css';
import { Button } from 'evergreen-ui';

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

        document.getElementsByClassName("buttonLoad")[0].style.visibility = 'hidden';
    }

    render() {
        return (
            <div className="App">
                <br></br>
                <br></br>

                <p>{this.state.message}</p>
                <Button className="buttonLoad" intent="success" appearance="primary" onClick={() => this.clickHandler()}>load</Button>
            </div>
        )
    }
}

export default Portfolio