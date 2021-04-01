import React from 'react';

export default class Message extends React.Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome vistor',
            isSubbed: false,
            subMsg: 'Subscribe'
        }
    }
 
    changeMessage() {
        if(this.state.isSubbed) {
            this.setState({
                message: "Welcome random person i dont know",
                isSubbed: false
            })
        } else {
            this.setState({
                message: "Welcome subsciber i defo know",
                isSubbed: true
            })
        }
    }
    render() {
        return (
         <div>
            <h1><code>Hey I'm Tenzin, Welcome to tenzin.land, {this.state.message}</code></h1>
            <button onClick={() => this.changeMessage()}>{this.state.subMsg}</button>
        </div>
        )
    }
}