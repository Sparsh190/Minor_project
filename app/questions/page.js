'use client';
import React, { useEffect, useState } from 'react';
import QuizSubmit from '../components/quizSubmit';
import QuizTimer from '../components/QuizTimer';

function page() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/question');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const ques = await response.json();
        setQuestions(ques.question);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
    fetchQuestions();
  }, []);

  const handleNextQuestion = () => {
    if (questions.length > 0) {
      setCurrentQuestionIndex(prevIndex => (prevIndex + 1));
    }
  };

  const handlePreviousQuestion = () => {
    if (questions.length > 0) {
      setCurrentQuestionIndex(prevIndex =>
        prevIndex === 0 ? 0 : prevIndex - 1
      );
    }
  };

  const handleOptionSelect = (option) => {
    setUserAnswers(prevAnswers => ({
      ...prevAnswers,
      [currentQuestionIndex]: option
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.answer) {
        totalScore++;
      }
    });
    setScore(totalScore);
  };
  const handleTimeUp = () => {
    setCurrentQuestionIndex(questions.length)
  };
  useEffect(() => {
    calculateScore();
  }, [userAnswers]);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl my-6 text-center font-black'>
        Quiz Crafters
      </h1>
      <hr />
      {(questions.length === 0) && <h1 className='text-white my-2 text-2xl text-center font-semibold'>Fetching Questions...</h1>}
      {(questions.length !== 0) && 
      <div className="h-screen  p-4 rounded-2xl w-full flex flex-col justify-evenly">
      {currentQuestion && (
          <>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <h3 className='text-lg font-semibold'>Subject : {questions[currentQuestionIndex].subject}</h3>
              <h3 className='text-lg font-semibold'>Unit : {questions[currentQuestionIndex].unit}</h3>
              <h3 className='text-lg font-semibold'>Topic: {questions[currentQuestionIndex].topic}</h3>
            </div>
            <div className="flex flex-col">
              <h3 className='text-lg font-semibold'>Username : Anonymous</h3>
              <QuizTimer timeLimit={300} onTimeUp={handleTimeUp}/>
            </div>
          </div>
            <h1 className='text-white text-2xl font-semibold'>Q{currentQuestionIndex + 1}. {currentQuestion.question}</h1>
            <div>
              {currentQuestion.options.map((option, index) => (
                <div 
                  key={index} 
                  className={`my-3 ${userAnswers[currentQuestionIndex] === option.option ? 'border-white border-2' : 'border-gray-700 border'} p-2 rounded-lg cursor-pointer`}
                  onClick={() => handleOptionSelect(option.option)}
                >
                  <label className='text-white text-xl ml-2'>{option.option}</label>
                </div>
              ))}
            </div>
            <div>
              {userAnswers[currentQuestionIndex] && (
                <p className='text-white'>Your answer: {userAnswers[currentQuestionIndex]}</p>
              )}
            </div>
          </>
        )}
        {currentQuestionIndex<questions.length && <div className="flex justify-between mt-4">
          <button onClick={handlePreviousQuestion} className="border py-2 px-4 rounded-lg hover:bg-white hover:text-black">Previous</button>
          {currentQuestionIndex < questions.length - 1 && (
          <button onClick={handleNextQuestion} className="border py-2 px-4 rounded-lg hover:bg-white hover:text-black">Next</button>
          )}
          {currentQuestionIndex === questions.length - 1 && (
            <button onClick={handleNextQuestion} className="border py-2 px-4 rounded-lg hover:bg-white hover:text-black">Finish</button>
          )}
        </div>}
        {currentQuestionIndex === questions.length && <QuizSubmit score={score} totalQuestions={questions.length} questions={questions} userAnswers={userAnswers}/>}
      </div>}
    </div>
  );
}

export default page;
