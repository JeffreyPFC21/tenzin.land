import React, { Component } from 'react'
import '../App.css';
import { Button } from 'evergreen-ui';

class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "pls load tyty"
        }
    }

    clickHandler() {
        this.setState(ps => ({
            message: "get scammed haha lol"
        }))

        document.getElementsByClassName("buttonLoad")[0].style.visibility = 'hidden';
    }

    render() {
        if(document.querySelector("body > nav")) {
            var el = document.querySelector("body > nav")
            el.style.visibility = 'hiddenn';
            el.style.display = 'none';
        }
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