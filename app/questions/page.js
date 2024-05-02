'use client'
import React, { useState } from 'react'

function page() {
  // const [data,setData] = React.useState({});
  fetch('http://localhost:3000/api/question')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(ques => {
    // Do something with the data
    console.log(ques);
  })
  .catch(error => {
    // Handle errors
    console.error('There was a problem with the fetch operation:', error);
  });
  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl my-6 text-center'>
        Questions
      </h1>
      
    </div>
  )
}

export default page
