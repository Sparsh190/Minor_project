import React from 'react'

function PreviousQuiz({quiz}) {
  return (
    <div className="p-4 w-full lg:w-1/2">
        <div className="flex border-2 h-40 w-[40vw] rounded-lg border-gray-800 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 flex-shrink-0">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">Quiz Id : {quiz.quizId} </h2>
            <h2 className="text-white text-lg title-font font-medium mb-3">Total Questions : {quiz.questions.length} </h2>
          <button> <a href={`/result/${quiz.quizId}/${quiz.username}`}>View Result</a> </button>
          </div>
        </div>
      </div>
  )
}

export default PreviousQuiz;
