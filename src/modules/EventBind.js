import React, { Component } from 'react';
import { Button } from 'evergreen-ui';

export class EventBind extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello'
        }
    }
    
    clickHandler() {
        if(this.state.message === "Hello") {
            this.setState({
                message: 'Goodbye'
            })
        } else if(this.state.message === "Goodbye") {
            this.setState({
                message: 'Hello'
            })
        }
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <Button appearance="primary" intent="danger" onClick={this.clickHandler.bind(this)}>Click</Button>
            </div>
        )
    }
}

export default EventBind
