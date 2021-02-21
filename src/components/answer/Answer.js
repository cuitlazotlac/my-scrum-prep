import React from 'react';
import './Answer.css';

const Answer = (props) => {

    let answer = Object.keys(props.answer)
    .map((qAnswer, i) => (
            <li
            className = 
            {
                props.correctAnswer === qAnswer ?
                'correct' :
                props.clickedAnswer === qAnswer ?
                'incorrect' : ''
            }
            onClick={() => props.checkAnswer(qAnswer)}
            key={qAnswer}>
                    {props.answer[qAnswer]}
            </li>
        ));

    return (
        <>
        <ul disabled={props.clickedAnswer ? true : false} className="Answers">
                {answer}
        </ul>
        <div>
            {
                props.correctAnswer ? 
                'Correct answer !' :
                props.clickedAnswer ?
                'Wrong answer :(' : ''

            }
        </div>
        </>
    )
}

export default Answer;