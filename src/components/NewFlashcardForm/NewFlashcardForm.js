import React, { useState } from "react";
import './NewFlashcardForm.css';

function NewFlashcardForm({ onAddFlashcard, onAddCategory }) {
    const [frontText, setFrontText] = useState('');
    const [backText, setBackText] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmitCard = (e) => {
        e.preventDefault();
        if (frontText.trim() && backText.trim()) {
            onAddFlashcard({ frontText, backText, category });
            setFrontText('');
            setBackText('');
            setCategory('');
        }
    }

    const handleAddCategory = (e) => {
        e.preventDefault();
        if (category.trim()) {
            onAddCategory(category);
            setCategory(category);
        }
    }

    return (
        <form className="new-flashcard-form" onSubmit={handleSubmitCard}>
            <input
                type="text"
                placeholder="Word"
                value={frontText}
                onChange={(e) => setFrontText(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Term"
                value={backText}
                onChange={(e) => setBackText(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
            />
            <button onClick={handleAddCategory}>Add category</button>
            <button type="submit">Add card</button>
        </form>
    );
};

export default NewFlashcardForm;