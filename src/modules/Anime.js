import React, {
    Component,
    // useLocation
} from 'react';
import '../App.css';
import qs from 'querystring';
import fetch from 'node-fetch';
import { MetaTags } from 'react-meta-tags';

class AnimeWatch extends Component {
    constructor(props) {
        super(props)

        this.state = {
        };

    }

    buildURL(qs) {
        //https://anime-chi.vercel.app/api/watching/boku-no-hero-academia/1
        //console.log(qs)
        return `https://anime-chi.vercel.app/api/watching/${qs["?id"]}/${Number.parseInt(qs.episode)}`;
    }

    buildURL2(qs) {
        //https://anime-chi.vercel.app/api/details/
        // console.log(qs)
        return `https://anime-chi.vercel.app/api/details/${qs["?id"]}`;
    }



    render() {
        console.log(this.state)
        var qsp = qs.parse(window.location.href.split("/watch")[1]);

        fetch(`${this.buildURL2(qsp)}`)
            .then(response => response.json()
                .then(resps => {
                    this.setState({ "raw2": resps });
                }));
        fetch(`${this.buildURL(qsp)}`)
            .then(response => response.json()
                .then(resps => {
                    this.setState({"url": resps.links.find(e => e.size === "1080P")});
                }
                ));        return (
            <div>
                <MetaTags>
                    <title>{this.state.raw2.results[0].title}</title>
                    <meta name="description" content={this.state.raw2.results[0].summary} />
                    <meta property="og:title" content={this.state.raw2.results[0].title} />
                    <meta property="og:video" content={this.state.url} />
                </MetaTags>
            </div>
        )
    }
}

export default AnimeWatch