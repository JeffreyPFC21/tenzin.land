import React, { Component } from 'react'
import { Button, Pill } from 'evergreen-ui';

export class Counter extends Component {

    constructor(props) {
        super(props)

        this.messages = [
            "who me",
            "penis cheese",
            "UwU",
            "OwO",
            "leak.to kinda cute",
            "im not racist i promise",
            "bruh go away",
            "yush thats me :blush:",
            "nyoo im cuter than u",
            "tush i hab lots of frens",
            "bruh 1345",
            "razu do b coot tho :wait:",
            "tainted 7 FTW",
            ":wait:"
        ]

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
        if (this.state.wmm) {
            this.setState(prevState => ({
                counter: prevState.counter + 1,
                message: `${this.messages[Math.floor(Math.random() * this.messages.length)]}`,
                wmm: false,
            }))
        } else {
            this.setState(prevState => ({
                counter: prevState.counter + 1,
                message: `${this.messages[Math.floor(Math.random() * this.messages.length)]}`,
                wmm: true
            }))

            setTimeout(() => {
                this.setState(ps => ({
                    wmm: true
                }))
            }, 5000)
        }
    }

    setCounter5() {
        this.setCounter()
        this.setCounter()
        this.setCounter()
        this.setCounter()
        this.setCounter()
    }

    clearCounter() {
        this.setState({
            counter: 0
        })
    }

    render() {
        return (
            <div>
                <Pill style={{"font-size": "1.2em", "text-align": "center"}} display="inline-flex" margin={8} width={50} height={50} color="red" isSolid>{this.state.counter}</Pill>
                <h1>Tenzin says "{this.state.message}"</h1>
                <Button display="inline-block" justifyContent="center" intent="success" appearance="primary" onClick={() => { this.setCounter() }}>Increment & Say something</Button>
                <Button display="inline-block" justifyContent="center" intent="success" appearance="primary" onClick={() => { this.setCounter5() }}>Increment 5</Button>
                <Button display="inline-block" justifyContent="center" intent="danger"  appearance="primary" onClick={() => { this.clearCounter() }}>Clear your Cookies</Button>
            </div>
        )
    }

}

export default Counter
