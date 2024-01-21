import React from 'react';
import './styles.css'

interface beltitems {
    items: string,
    direction: string
}

function WordBelt({items,direction}: beltitems) {
    const animationName = direction === 'right' ? 'moveRight' : 'moveLeft';
    const wordStyle = {
        marginRight: '20px',
        whiteSpace: 'nowrap',
        animation: `${animationName} 25s linear infinite`,
        padding: '1em',
        borderRadius: '2em',
        borderColor: '#74c6e7',
        borderStyle: 'inset',
    };

    return (
        <div className='wordBelt'>
            <div className='word' style={wordStyle}>{items}</div>
            <div className='word' style={wordStyle}>Design</div>
            <div className='word' style={wordStyle}>App Development</div>
            <div className='word' style={wordStyle}>Web Development</div>
            <div className='word' style={wordStyle}>Machine Learning</div>
            <div className='word' style={wordStyle}>UI/UX</div>
            <div className='word' style={wordStyle}>Events</div>
            <div className='word' style={wordStyle}>Hackathons</div>
            <div className='word' style={wordStyle}>Git</div>
            <div className='word' style={wordStyle}>Open Source</div>
            <div className='word' style={wordStyle}>Linux</div>
            <div className='word' style={wordStyle}>DevOps</div>

            <div className='word' style={wordStyle}>{items}</div>
            <div className='word' style={wordStyle}>Design</div>
            <div className='word' style={wordStyle}>App Development</div>
            <div className='word' style={wordStyle}>Web Development</div>
            <div className='word' style={wordStyle}>Machine Learning</div>
            <div className='word' style={wordStyle}>UI/UX</div>
            <div className='word' style={wordStyle}>Events</div>
            <div className='word' style={wordStyle}>Hackathons</div>
            <div className='word' style={wordStyle}>Git</div>
            <div className='word' style={wordStyle}>Open Source</div>
            <div className='word' style={wordStyle}>Linux</div>
            <div className='word' style={wordStyle}>DevOps</div>
            {/* Add more words as needed */}
        </div>
    );
};

export { WordBelt }