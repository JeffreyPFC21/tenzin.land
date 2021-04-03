import React, { Component } from 'react'
import '../App.css';
import '../index.css'

class Bible extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        document.onload = function () {
            document.getElementsByTagName("head")[0].innerHTML += `
            <meta name="theme-color" content="#DDA0DD" />
            <meta
                name="og:image"
                content="https://cdn.discordapp.com/emojis/764118435797925898.png"
            />
            <meta
                name="description"
                content="Praise the Lordeemo!"
            />`;
        };
        return (
            <div style={{
                "h1": {
                    "font-family": 'Cardo, serif',
                    "font-style": "italic"
                },
                "h2": {
                    "font-family": 'Cardo, serif',
                    "font-style": "italic"
                },
                "h3": {
                    "font-family": 'Cardo, serif',
                    "font-style": "italic"
                },
                "p": {
                    "font-family": 'Cardo, serif',
                    "font-style": "italic"
                },
            }} className="Bible">
                    <br></br><br></br>
                    <h1>Welcome to the Deemo Bibles. Here i record all biblical sayings said by art Deemo Christ</h1>
                    <br></br><br></br>
                    <h1 >Deemisis - The Beggining of art Deemo Christ</h1>
                    <h3 >One</h3>
                    <p >Selling Zoe for 40$ Cashapp. Tap in :inde:</p>
                    <p>Let there be kids in my dms (tenzin suggests this happened)</p>
                    <br /><h1 >Deemology - The Upcoming of Lordeemo</h1>
                    <h3>One</h3>
                    <p>Marriage is good</p>
                    <p>Marriage is only good for taxes :man_kneeling: :pray:</p>
                    <p>why is this bitch hoeing for nitro</p>
                    <p>who tryna get extorted</p>
                    <p>For a man that gets 0 puss, I can sense when a bitch has a body count with triple digits</p>
                    <p>Finna go full KanKan on some of you bitches</p>
                    <h2>Vertelemetry</h2>
                    <p>@everyone hi</p>
                    <h2>Tenzologistics</h2>
                    <p>i miss my wife</p>
                    <p>i miss my mom</p>
                    <p>i miss xvell</p>
                    <p>i miss prism gen</p>
                    <br/><h1>Deewomen - The jeeting and skeeting</h1>
                    <h3>One</h3>
                    <p>I am not single</p>
                    <p>i like to beat dior violently</p>
            </div>
        );
    }
}

export default Bible