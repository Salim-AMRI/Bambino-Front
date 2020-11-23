import React, { Component } from 'react';
import Foot from "../Components/foot";
import Propos from '../Components/Apropos';

export class Apropos extends Component {
    render() {
        return (
            <div>
                <Propos />
                <Foot />
            </div>
        )
    }
}

export default Apropos
