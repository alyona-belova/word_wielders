import React, { useState, useEffect } from 'react';
import './App.css';
import FlashcardList from './components/FlashcardList/FlashcardList';
import NewFlashcardForm from './components/NewFlashcardForm/NewFlashcardForm';

function App() {
    const [flashcards, setFlashcards] = useState(() => {
        const savedFlashcards = localStorage.getItem('flashcards');
        return savedFlashcards ? JSON.parse(savedFlashcards) : [];
    });
    const [categories, setCategories] = useState(() => {
        const savedCategories = localStorage.getItem('categories');
        return savedCategories ? JSON.parse(savedCategories) : ['All'];
    });

    useEffect(() => {
        localStorage.setItem('flashcards', JSON.stringify(flashcards));
    }, [flashcards]);
    useEffect(() => {
        localStorage.setItem('categories', JSON.stringify(categories));
    }, [categories]);

    const addFlashcard = (newFlashcard) => {
        setFlashcards([
            ...flashcards,
            { ...newFlashcard, id: Date.now() }
        ]);
    };
    const deleteFlashcard = (id) => {
        setFlashcards(flashcards.filter((card) => card.id !== id));
    };

    const addCategory = (newCategory) => {
        setCategories([...categories, newCategory]);
    };

    return (
        <div className="App">
            <h1>Word Wielders</h1>
            <NewFlashcardForm
                onAddFlashcard={addFlashcard}
                onAddCategory={addCategory} />
            <FlashcardList
                flashcards={flashcards}
                onDeleteFlashcard={deleteFlashcard}
                categories={categories} />
        </div>
    );
}

export default App;