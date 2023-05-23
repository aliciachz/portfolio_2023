import React from 'react';
import Particle from './Particle';
import CustomCursor from './CustomCursor';

const Loading = () => {
    return (
        <div className="loading-container mouse-lg">
            <Particle />
            <CustomCursor />
            <div className="planet">
                <div className="ring"></div>
                <div className="cover"></div>
                <div className="spots"></div>
            </div>
            <h1 className='loading'>Loading...</h1>
        </div>
    );
}

export default Loading;
