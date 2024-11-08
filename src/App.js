import React, { useState, useEffect } from 'react';
import './App.css';
import FlashcardList from './components/FlashcardList/FlashcardList';
import NewFlashcardForm from './components/NewFlashcardForm/NewFlashcardForm';

function App() {
    const [flashcards, setFlashcards] = useState(() => {
        const savedFlashcards = localStorage.getItem('flashcards');
        return savedFlashcards ? JSON.parse(savedFlashcards) : [];
    });

    useEffect(() => {
        localStorage.setItem('flashcards', JSON.stringify(flashcards));
    }, [flashcards]);

    const addFlashcard = (newFlashcard) => {
        setFlashcards([
            ...flashcards,
            { ...newFlashcard, id: Date.now() }
        ]);
    };
    const deleteFlashcard = (id) => {
        setFlashcards(flashcards.filter((card) => card.id !== id));
    };

    return (
        <div className="App">
            <h1>Word Wielders</h1>
            <NewFlashcardForm
                onAddFlashcard={addFlashcard} />
            <FlashcardList
                flashcards={flashcards}
                onDeleteFlashcard={deleteFlashcard} />
        </div>
    );
}

export default App;