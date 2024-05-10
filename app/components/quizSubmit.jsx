import React from 'react'

function QuizSubmit({ score, totalQuestions, questions, userAnswers}) {

  
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-medium text-white">Your Score is {score} out of {totalQuestions}</h1>
      <div className="min-h-screen w-full mt-6 flex flex-col">
      {questions.map((question, index) => (
                <div  key={index}  className={`border cursor-pointer flex w-full`} >
                <div className="p-3 w-1/3 h-auto border-e flex justify-center items-center font-semibold text-xl">
                  Q{index+1}
                </div>
                <div className={`p-3 w-full mx-auto flex justify-center items-center ${userAnswers[index] === questions[index].answer ? 'bg-green-900' : 'bg-red-900'} font-semibold text-xl`}>
                  {userAnswers[index]?userAnswers[index]:"Not Attempted"}
                </div>
                </div>
              ))}
      </div>
    </div>
  )
}

export default QuizSubmit;
