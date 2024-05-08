import React from 'react';
import AboutMe from './layouts/aboutme';
import Football from './layouts/football';
import Footer from './layouts/footer';
import Header from './layouts/header';
import Menu from './layouts/menu';
import Projects from './layouts/projects';

function App() {
    return (
        <>
            <Menu />
            <div id="home">
                <Header />
            </div>
            <div id="aboutMe">
                <AboutMe />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="football">
                <Football />
            </div>
            <div id="footer">
                <Footer />
            </div>
        </>
    );
}

export default App;
