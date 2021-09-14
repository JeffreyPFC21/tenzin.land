import React, { Component } from 'react'
import StarfieldAnimation from 'react-starfield-animation'


class FallenStars extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        if(document.querySelector("body > nav")) {
            var el = document.querySelector("body > nav")
            el.style.visibility = 'hidden';
            el.style.display = 'none';
            // var el1 = document.getElementsByTagName("body").style = null;
            // var bg = document.getElementsByTagName("body")[0];
            // bg.style.backgroundColor = 'grey';
        }
        return (
            <div className="hi">
                <StarfieldAnimation style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%'
                    }}
                />

            </div>
        )
    }
}

export default FallenStars