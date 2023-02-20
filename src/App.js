import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile1 from './assets/profile1.jpg';

class App extends Component {

    state = { displayBio: false};

    // constructor() {
    //     super();
    //     this.state = { displayBio: false };

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);

    // }

    toggleDisplayBio = ()=> {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <img src={profile1} alt='profile' className='profile1'/>
                <h1>Hello!</h1>
                <p>My name is Yash Kasat. I'm a software engineer.</p>
                <p>I'm always looking forward to working on meaningful projects</p>
                {
                this.state.displayBio ? (
                <div>
                    <p>I live in Pune, and code everyday.</p>
                    <p>My favourite language is JavaScript, and I think React.js is awesome</p>
                    <p>Besides Coding, I also love badminton and ramen!</p>
                    <button onClick={ this.toggleDisplayBio
                    }>Show less</button>
                </div>
                ) : (
                    <div>
                        <button onClick={ this.toggleDisplayBio}>
                            Read More
                        </button>
                    </div>
                )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        );
    }
}

export default App;
