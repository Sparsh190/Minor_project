"use client";
import React from "react";


export default function Hero() {
  return (
    <>
      <section className="text-gray-400 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className="object-cover object-center rounded-full" alt="hero" src="https://img.freepik.com/premium-vector/quiz-logo-icon-symbol_101884-1075.jpg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
      QuizUp Your Life: Where Knowledge Meets Excitement!
      </h1>
      <p className="mb-8 leading-relaxed">
      "Embark on an Adventure of Knowledge : Explore, Learn, and Conquer with Our Dynamic Quiz Application!"
        </p>
      <div className="flex justify-center">
        <a href="/quizpage">
          <button className="inline-flex text-white bg-orange-400 transition-all border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Start Quiz</button>
        </a>
        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Know More</button>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
