import React, { Component } from 'react';
import Home from '../Components/Home';
import Foot from '../Components/foot'
import Contact from '../Action/Contact';


export class Accueil extends Component {
    render() {
        return (
            <div>
                <Home/>
                <Contact/>
                <Foot />
            </div>
        )
    }
}

export default Accueil