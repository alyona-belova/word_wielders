import React, { useState } from "react";
import './NewFlashcardForm.css';

function NewFlashcardForm({ onAddFlashcard }) {
    const [frontText, setFrontText] = useState('');
    const [backText, setBackText] = useState('');

    const handleSubmitCard = (e) => {
        e.preventDefault();
        if (frontText.trim() && backText.trim()) {
            onAddFlashcard({ frontText, backText });
            setFrontText('');
            setBackText('');
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
            <button type="submit">Add card</button>
        </form>
    );
};

export default NewFlashcardForm;