import React, { useState } from 'react';
import './Flashcard.css';

function Flashcard({ id, frontText, backText, onDeleteFlashcard }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => { setIsFlipped(!isFlipped); };

    return (
        <div className={`flashcard-container ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flashcard-inner">
                <div className="flashcard front">
                    <p>{frontText}</p>
                    <button className='delete-button' onClick={(e) => {
                        e.stopPropagation();
                        onDeleteFlashcard(id)
                    }}>
                        X
                    </button>
                </div>
                <div className="flashcard back">
                    <p>{backText}</p>
                </div>
            </div>
        </div >
    );
}

export default Flashcard;