import React, { Component } from "react";
import Question from "./question/Question";
import Answer from "./answer/Answer";
import "./QuizMain.css";

export default class Quizz extends Component {
  //initiate the local state
  state = {
    questions: {
      1: 'Question 1',
      2: "Question 2",
      3: "Question 3",
    },
    answers: {
      1: {
        1: "Wrong Answer",
        2: "Right Answer",
        3: "Wrong Answer",
      },
      2: {
        1: "Right Answer",
        2: "Wrong Answer",
        3: "Wrong Answer",
      },
      3: {
        1: "Right Answer",
        2: "Wrong Answer",
        3: "Wrong Answer",
      },
    },
    correctAnswers: {
      1: "2",
      2: "1",
      3: "1",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
  };

  checkAnswer = (answer) => {
    const { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
      });
    }
  };

  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };

//   TODO:Check to add into variables all the Object.keys etcc..

  render() {
    let { questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
    return (
      <div className="Content">
          {step <= Object.keys(questions).length ? 
                (<>
                <Question question={questions[step]} />
                <Answer
                answer={answers[step]}
                step={step}
                checkAnswer={this.checkAnswer}
                correctAnswer={correctAnswer}
                clickedAnswer={clickedAnswer}
                />
                <button
                className="NextStep"
                disabled={
                    clickedAnswer && Object.keys(questions).length >= step
                    ? false
                    : true
                }
                onClick={() => this.nextStep(step)}
                >
                Next
                </button>
                </>) : (
                    <div className="finalPage">
                        <h1>This Scrum Training Quizz is now completed</h1>
                        <p>Your score is: {score} of {Object.keys(questions).length}</p>
                        <p>Thank You!</p>
                    </div>
                )
            }
      </div>
    );
  }
}
