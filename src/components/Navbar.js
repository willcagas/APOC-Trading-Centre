import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import GitHubButton from 'react-github-button';

import logo from './../assets/images/logo.png';
import music from './../assets/sounds/PVZtheme.mp3';

import './../assets/styles/Navbar.css';
import { Howl } from 'howler';

const Header = () => {
    const [musicPlaying, setMusicPlaying] = useState(false);

    const playMusic = () => {
        if (!musicPlaying) {
        const bgMusic = new Howl({
            src: [music],
            loop: true,
            volume: 0.5,
        });

        bgMusic.play();
        setMusicPlaying(true);
        }
    }

    return (
        <header>
            <button onClick={playMusic}>
                <img className="site-logo" height={55} src={logo} alt=''/>
            </button>
            
            <nav>
                <Link to="/" >Home</Link>
                <Link to="/post-listing">Post</Link>

            </nav>
        </header>
    );
};

export default Header;
