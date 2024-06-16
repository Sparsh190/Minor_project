'use client'
import React, { useEffect, useState } from 'react';
import PreviousQuiz from '@/app/components/previousQuiz';

function Page() {
  const [username, setUsername] = useState('Anonymous');
  const [data, setData] = useState([]);
  useEffect(() => {
    if(typeof window !== 'undefined' && localStorage.getItem('username')){
      setUsername(localStorage.getItem('username'));
    }
    console.log("username", username);

    const fetchQuizResult = async () => {
      await fetch('http://localhost:3000/api/previousQuiz', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  username: username,
              }),
          })
          .then(async response => {
              const responseData = await response.json();
              // if(!response.ok) {
                setData(responseData.quizResults);
              // }
          })
          .catch(error => {
          console.error('Error fetching quiz result:', error);
        });
  };

  fetchQuizResult();
  }, []);

  return (
    <div className='w-screen min-h-screen'>
      <div className="text-center mt-20">
      <h1 className="sm:text-3xl text-2xl font-semibold title-font text-white mb-4">{username}</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">Topic : Computer Science & Engineering</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
      </div>
    </div>
    <h1 className='text-center mt-2 text-3xl font-bold'>Your Previous Quiz</h1>
      <section className="text-gray-400 body-font mx-auto">
  <div className="container px-5 py-10 mx-auto flex flex-wrap">
    {!data && <div className="text-center">
        <h1 className='text-center mt-2 text-xl font-semibold'>You have not attempted any Quiz.</h1>
    </div>}
    {data && <div className="flex flex-wrap -m-4">
      {data.map((quiz, index) => {
        return <PreviousQuiz key={index} quiz={quiz}/>
      })}
    </div>}
  </div>
      </section>
    </div>
  )
}

export default Page
