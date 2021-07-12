import React, { FunctionComponent } from 'react';
import {Link} from 'react-router-dom';

const About: FunctionComponent = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default About;

