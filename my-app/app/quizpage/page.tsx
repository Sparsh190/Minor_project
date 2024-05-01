import React from 'react'

function page() {
  return (
    <div className='container min-h-screen flex items-center justify-evenly ml-auto'>
      <div className="w-auto bg-gray-800 bg-opacity-50 rounded-lg p-8 mt-10 md:mt-0">
      <h2 className="text-white w-full text-center text-lg font-medium title-font mb-5">BrainStormer - Quiz App</h2>
      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Enter the Name of the Topic</label>
        <input type="text" id="full-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      
      <div className="flex my-3 items-center">
            <span className="mr-3">Difficulty</span>
            <div className="relative">
              <select className="rounded border border-gray-700 focus:ring-2 focus:ring-orange-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-orange-500 text-white pl-3 pr-10">
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
                <option>Any</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
      </div>

      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Number of Questions</label>
        <input type="text" id="ques" name="ques" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-yellow-900 rounded border border-gray-600 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>

      <button className="text-white bg-orange-500 border-0 py-2 px-8 focus:outline-none hover:bg-orange-600 rounded text-lg">Generate</button>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className="object-cover object-center p-6 rounded-xl" alt="hero" src="https://iconape.com/wp-content/png_logo_vector/brainstorm-creative-logo.png"/>
    </div>
    </div>
  )
}

export default page
