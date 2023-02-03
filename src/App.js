import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = { displayBio: false };
    }


    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Yash Kasat. I'm a software engineer.</p>
                <p>I'm always looking forward to working on meaningful projects</p>
                {
                this.state.displayBio ? (
                <div>
                    <p>I live in Pune, and code everyday.</p>
                    <p>My favourite language is JavaScript, and I think React.js is awesome</p>
                    <p>Besides Coding, I also love badminton and ramen!</p>
                </div>
                ) : null
                }
            </div>
        );
    }
}

export default App;
