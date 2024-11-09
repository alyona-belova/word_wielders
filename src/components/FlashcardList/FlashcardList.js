import React, { useState } from 'react';
import Flashcard from '../Flashcard/Flashcard';
import '../FlashcardList/FlashcardList.css'

function FlashcardList({ flashcards, onDeleteFlashcard, categories }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const filteredFlashcards = selectedCategory === 'All'
        ? flashcards
        : flashcards.filter((card) => card.category === selectedCategory);
    return (
        <div>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <div className='flashcard-list'>
                {filteredFlashcards.map((card, index) => (
                    <Flashcard key={index}
                        id={card.id}
                        frontText={card.frontText}
                        backText={card.backText}
                        category={card.category}
                        onDeleteFlashcard={onDeleteFlashcard}
                    />
                ))}
            </div>
        </div>
    );
};

export default FlashcardList;