import React from 'react';
import { Link } from 'react-router';

import { socket } from '../config';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = { hasGong: false };
        this.handleHideGong = this.handleHideGong.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        socket.on('gong', msg => {
            this.handleGong();
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleGong() {
        this.setState({ hasGong: true });
        this.getConfetti();
        const HIDE_TIMEOUT = 3000;
        if (this.gongTimeout) {
            window.clearTimeout(this.gongTimeout);
        }
        this.gongTimeout = window.setTimeout(this.handleHideGong, HIDE_TIMEOUT);
    }

    handleHideGong() {
        if (!this._isMounted) {
            return;
        }
        this.setState({ hasGong: false });
    }

    getConfetti() {
        var flakes = '',
            randomColor;
        for(var i = 0, len = 400; i < len; i++) {
            randomColor = Math.floor(Math.random()*16777215).toString(16);
            flakes += '<div class="ball" style="background: #'+randomColor;
            flakes += '; animation-duration: '+(Math.random() * 9 + 2)+'s; animation-delay: ';
            flakes += (Math.random() * 2 + 0)+'s;"></div>';
        }
        document.getElementById('confetti').innerHTML = flakes;
    }

    render() {
        const classes = this.state.hasGong ? "gong-container has-gong" : "gong-container";
        return (
            <div className="app-container">
                <header>
                    <Link to="/">
                        <img src="/img/gong-logo2.png" />
                    </Link>
                </header>
                <div className={classes}>
                    <div id="confetti" />
                    <div className="gong-text">
                        <img src="/img/gong-man.png" />
                        We closed a new deal!
                    </div>
                </div>
                <div className="app-content">{this.props.children}</div>
            </div>
        );
    }
}
