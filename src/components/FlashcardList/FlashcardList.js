import React from 'react';
import Flashcard from '../Flashcard/Flashcard';
import '../FlashcardList/FlashcardList.css'

function FlashcardList({ flashcards, onDeleteFlashcard }) {
    return (
        <div>
            <div className='flashcard-list'>
                {flashcards.map((card, index) => (
                    <Flashcard key={index}
                        id={card.id}
                        frontText={card.frontText}
                        backText={card.backText}
                        onDeleteFlashcard={onDeleteFlashcard}
                    />
                ))}
            </div>
        </div>
    );
};

export default FlashcardList;