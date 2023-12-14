import React, { useRef, useState } from 'react';
import './style.css';
import * as uuid from 'uuid';

const isArrayEqual = (selected, correct) => {
    if (selected.length !== correct.length) {
        return false;
    }
    return correct.filter(e => !selected.includes(e)).length === 0;
};

const MultiAnswerComponent = (props) => {
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState([]);
    const [showSecondButton, setShowSecondButton] = useState(false);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const correctRef = useRef(null);
    const wrongRef = useRef(null);
    const qId = uuid.v1();

    const checkboxClick = (index, status) => {
        if (status) {
            setSelectedAnswerIndex([...selectedAnswerIndex, index]);
        } else {
            const updatedSelected = selectedAnswerIndex.filter(item => item !== index);
            setSelectedAnswerIndex(updatedSelected);
        }
        wrongRef.current.classList.remove('selected');
        correctRef.current.classList.remove('selected');
    };

    const checkOnClick = () => {
        if (isArrayEqual(selectedAnswerIndex, props.correctAnswer)) {
            correctRef.current.classList.add('selected');
            wrongRef.current.classList.remove('selected');
        } else {
            if (selectedAnswerIndex.length === 3) {
                setShowSecondButton(true);
            }
            wrongRef.current.classList.add('selected');
            correctRef.current.classList.remove('selected');
        }
    };

    const showAnswer = () => {
        setShowCorrectAnswer(true);
    };

    return (
        <div className='question single-answer'>
            <div><h3>{props.question}</h3></div>
            <div className='answers'>
                {props.answers.map((answer, i) => {
                    const id = uuid.v1();
                    return (
                        <div key={id}>
                            <input
                                id={id}
                                type='checkbox'
                                checked={selectedAnswerIndex.includes(i)}
                                onChange={(e) => checkboxClick(i, e.currentTarget.checked)}
                            />
                            <label htmlFor={id}>{answer}</label>
                        </div>
                    );
                })}
            </div>
            <div className='check'>
                <div className='buttonAnswer' onClick={showAnswer}>
                    {showSecondButton && (
                        <div onClick={showAnswer} ref={correctRef} className='buttonAnswer'>show me correct answer</div>
                    )}
                </div>
                <div className='button' onClick={checkOnClick}>
                    check my answer
                    <div ref={correctRef} className='correct'>correct</div>
                    <div ref={wrongRef} className='wrong'>wrong</div>
                </div>
            </div>
            {showCorrectAnswer && (
                <p style={{ color: 'green' }}>Correct Answer: {props.answers[props.correctAnswer]}</p>
            )}
        </div>
    );
};

export default MultiAnswerComponent;
