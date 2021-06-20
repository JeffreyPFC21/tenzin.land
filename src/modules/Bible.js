import React, { Component } from 'react'
import '../App.css';
import '../index.css';
import Sound from 'react-sound';
import outside from './outside.mp3';

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
                    <Sound 
                        url={outside}
                        playStatus={Sound.status.PLAYING}
                        playFromPosition={100}
                        loop={true}
                        volume={30}
                    />
                    <br></br><br></br>
                    <h1>Welcome to the Deemo Bibles. Here i record all biblical sayings said by art Deemo Christ</h1>
                    <br></br><br></br>
                    <h1 >Deemisis - The Beggining of art Deemo Christ</h1>
                    <h3 >One</h3>
                    <p>Selling Zoe for 40$ Cashapp. Tap in :inde:</p>
                    <p>Let there be kids in my dms (tenzin suggests this happened)</p>
                    <br/><h1 >Deemology - The Upcoming of Lordeemo</h1>
                    <h3>One</h3>
                    <p>Marriage is good</p>
                    <p>Marriage is only good for taxes :man_kneeling: :pray:</p>
                    <p>why is this bitch hoeing for nitro</p>
                    <p>who tryna get extorted</p>
                    <p>For a man that gets 0 puss, I can sense when a bitch has a body count with triple digits</p>
                    <p>Finna go full KanKan on some of you bitches</p>
                    <h2>Vertelemetry</h2>
                    <p>@everyone hi</p>
                    <h2>Drayyology - Dray being retarded or illegal</h2>
                    <p>Nigga its robotology</p>
                    <p>Ima molest u</p>
                    <p>Weather forecate</p>
                    <p>,play music to play when grooming discord egirls</p>
                    <h2>Tenzologistics</h2>
                    <h3>One</h3>
                    <p>i miss my wife</p>
                    <p>i miss my mom</p>
                    <p>i miss xvell</p>
                    <p>i miss prism gen</p>
                    <p>i miss gustavo</p>
                    <p>i miss x1</p>
                    <p>i miss the computer scientist</p>
                    <h3>Two</h3>
                    <p>imagine you b cranking 90s in fn and yo girl b crankin 90s on yo dick :rofl:</p>
                    <br/><h1>Deewomen - The jeeting and skeeting</h1>
                    <h3>One</h3>
                    <p>I am not single</p>
                    <p>i like to beat dior violently</p>
                    <br/><h1>Juicintologistals - Juicy being cute</h1>
                    <p>-------</p>
                    <p>"ayo juicy you wanna come over" - deemo</p>
                    <p>"na nigga i got a girl" - juicy</p>
                    <p>-------</p>
                    <p>"juicy how many bitches u got" - deemo</p>
                    <p>"none" - juicy</p>
                    <p>silence</p>
                    <p>-------</p>
                    <p>yo who wanna see my tits?</p>
                    <p>-------</p>
                    <br/><h1>Retardeemo - Deemo being a tard</h1>
                    <h3>One</h3>
                    <p>id rather buy a didlo to suck on than buy bleed</p>
                    <p>*laughing randomly at nothing in vc*</p>
                    <p>,p sex music</p>
                    <p>Groovy - Now playing ":smiling_imp:Sex Music 2021:tongue:Erotic Music:fire:Sex Playlist 2021:tongue: :fire:Bedroom Mix :smirk:Music To Make Love:fire:"</p>
                    <p>i wanna see someone butt naked other than tenzin</p>
                    <br /><h1>BIYF Hall - balls in your face</h1>
                    <p>-------</p>
                    <p>tenzin — Today at 18:04</p>
                    <p>yo any of u got a sugon.js?</p>
                    <p>daunt — Today at 18:04</p>
                    <p>whats sugon.js</p>
                    <p>tenzin — Today at 18:04</p>
                    <p>sugon deez nuts stupid ass</p>
                    <br /><h1>kennedickles - a victim of degroomo (first egirl!!)</h1>
                    <p>stop lookin at my butt lil creep</p>
                    <p>-------</p>
                    <p>i have a slave kink</p>
                    <p>-------</p>
                    <br /><h1>degroomo - thou shalt not snitch!</h1>
                    <p>-------</p>
                    <p>kennedickles - "ong"</p>
                    <p>kennedickles - "fuck consent"</p>
                    <p>kennedickles - "just rape me"</p>
                    <p>deemo - "sure"</p>
                    <p>-------</p>
                    <p>saeko sent noodles pic</p>
                    <p>-------</p>

            </div>
        );
    }
}
//im homophobic right yeah no stfu *spits*
export default Bible