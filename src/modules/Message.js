import React from 'react';
import { Button } from 'evergreen-ui'

export default class Message extends React.Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome vistor',
            isSubbed: false,
            subMsg: 'Subscribe',
            usb: 0
        }
    }
 
    changeMessage() {
        if(this.state.isSubbed) {
            this.setState(psl => ({
                message: "Welcome random person i dont know",
                isSubbed: false,
                subMsg: "Subscribe (i know you unsubbed " + psl.usb + " times)"
            }))
        } else {
            this.setState(psl => ({
                message: "Welcome subsciber i defo know",
                isSubbed: true,
                subMsg: "dont you dare",
                usb: psl.usb + 1
            }))
        }
    }
    render() {
        return (
         <div>
            <h1><code>{this.state.message}</code></h1>
            <Button intent="success" appearance="primary" onClick={() => this.changeMessage()}>{this.state.subMsg}</Button>
        </div>
        )
    }
}