import React, { useRef, useState } from 'react';
import './style.css';
import * as uuid from 'uuid';

const SingleAnswerComponent = (props) => {
    const clickCount = useRef(0);
    const [showSecondButton, setShowSecondButton] = useState(false);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const correctRef = useRef(null);
    const wrongRef = useRef(null);
    let selectedAnswerIndex = null;

    const radioClick = (index) => {
        selectedAnswerIndex = index;
        if (wrongRef.current) wrongRef.current.classList.remove('selected');
        if (correctRef.current) correctRef.current.classList.remove('selected');
    };

    const checkOnClick = () => {
        if (selectedAnswerIndex === props.correctAnswer) {
            if (correctRef.current) correctRef.current.classList.add('selected');
            if (wrongRef.current) wrongRef.current.classList.remove('selected');
        } else {
            clickCount.current += 1;
            if (clickCount.current === 3) {
                setShowSecondButton(true);
                clickCount.current = 0;
            } else {
                if (wrongRef.current) wrongRef.current.classList.add('selected');
                if (correctRef.current) correctRef.current.classList.remove('selected');

            }
        }
    };

    const showAnswer = () => {
        setShowCorrectAnswer(true);

    };

    const qId = uuid.v1();

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
                                type='radio'
                                name={`group-${qId}`}
                                onClick={() => radioClick(i)}
                            />
                            <label htmlFor={id}>{answer}</label>
                        </div>
                    );
                })}
            </div>
            <div className='check'>
                <div className='buttonAnswer' onClick={showAnswer}>
                    {showSecondButton && (
                        <div ref={correctRef} className='correctAnswer'>
                            show me correct answer</div>
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

export default SingleAnswerComponent;
