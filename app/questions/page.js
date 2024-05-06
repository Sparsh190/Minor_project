'use client';
// import React, { useEffect, useState } from 'react';

// function Page() {
//   const [data, setData] = React.useState([]);

//   useEffect(() => {
//     const fetchQues = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/api/question');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const ques = await response.json();
//         setData(ques.question);
//         console.log(ques.question);
//       } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//       }
//     };
//     fetchQues();
//   }, []);

//   return (
//     <div className='container mx-auto'>
//       <h1 className='text-3xl font-black my-6 text-center'>
//         Questions
//       </h1>
//       <div className="h-full w-full">
//         {data.map(ques => (
//           <div className='py-4' key={ques._id} className="border border-yellow-500 border-2 rounded-lg my-2 p-4">
//             <h1 className='text-white text-3xl font-semibold'>Q : {ques.question}</h1>
//             {ques.options.map((option, index) => (
//                 <div key={index} className='my-2'>
//                   <input type="radio" id={`option-${index}`} name={`question-${ques._id}`} value={option.option} className='mx-2' />
//                   <label htmlFor={`option-${index}`} className='text-white text-xl'>{option.option}</label>
//                 </div>
//               ))}

//           <div className='flex justify-end'>
//             <button className='border py-2 px-4 rounded-lg'>Next</button>
//           </div>
//           </div>
//         ))}
//       </div>
//       <div className='flex justify-end'>
//             <button className='border bg-orange-500 py-2 px-4 rounded-lg'>Submit</button>
//           </div>
//     </div>
//   );
// }

// export default Page;
import React, { useEffect, useState } from 'react';

function page() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/question');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const ques  = await response.json();
        setQuestions(ques.question);
        
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };
    fetchQuestions();
  }, []);

  const handleNextQuestion = () => {
    if (questions.length > 0) {
      setCurrentQuestionIndex(prevIndex => (prevIndex + 1) % questions.length);
    }
  };

  const handlePreviousQuestion = () => {
    if (questions.length > 0) {
      setCurrentQuestionIndex(prevIndex =>
        prevIndex === 0 ? questions.length - 1 : prevIndex - 1
      );
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  console.log("Current :",currentQuestionIndex);

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl my-6 text-center'>
        Questions
      </h1>
      <div className="h-full w-full">
        {currentQuestion && (
          <>
            <h1 className='text-white text-xl'>Q. {currentQuestion.question}</h1>
            <form>
              {currentQuestion.options.map((option, index) => (
                <div key={index} className='my-3'>
                  <input type="radio" id={`option-${index}`} name={`question-${currentQuestion._id}`} value={option.option} className='mx-2'/>
                  <label htmlFor={`option-${index}`} className='text-white text-xl'>{option.option}</label>
                </div>
              ))}
            </form>
          </>
        )}
        <div className="flex justify-between mt-4">
          <button onClick={handlePreviousQuestion} className="border py-2 px-4 rounded-lg">Previous</button>
          <button onClick={handleNextQuestion} className="border py-2 px-4 rounded-lg">Next</button>
        </div>
      </div>
    </div>
  );
}

export default page;
