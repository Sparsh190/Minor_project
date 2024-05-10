'use client';
import React, { useState } from 'react';
import QuizTimer from '../components/QuizTimer';

const QuizPage = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleTimeUp = () => {
    // Handle time up event here
    console.log("Time's up!");
  };

  return (
    <div>
      <h1>Welcome to the Quiz!</h1>
      {!quizStarted && (
        <button onClick={handleStartQuiz}>Start Quiz</button>
      )}
      {quizStarted && (
        <>
          <h2>Quiz is ongoing...</h2>
          <QuizTimer timeLimit={270} onTimeUp={handleTimeUp} />
          {/* Render your quiz questions here */}
        </>
      )}
    </div>
  );
};

export default QuizPage;
