import React from 'react'
import './about.css'


function About() {
  return (
    <>
    <div className="min-h-[80vh]  sm:py-3 flex items-center justify-center  p-6">
  
    <div className='bg-white/10 backdrop-blur-md  rounded-2xl shadow-lg p-8 max-w-3xl  sm:mt-6 text-center '>
      <h1 className=' text-5xl font-semi-bold text-red-700'>About us</h1>
      <br />
      <p className='text-base sm:text-lg leading-relaxed p-4'>
        Welcome to Todo, your simple and reliable task management companion.

We created Todo with one clear goal: to help you stay organized, focused, and productive in your daily life. Whether you’re managing personal tasks, work goals, or study plans, Todo makes it easy to keep track of what matters most.

Our app is designed to be:
Simple & Easy to Use – No clutter, just what you need
Fast & Reliable – Manage tasks without distractions
Accessible Anywhere – Use it anytime, on any device
With Todo, you can:
Create and manage tasks effortlessly
Stay on top of deadlines
Organize your day with clarity and confidence

Thank you for choosing Todo to organize your day and achieve more, one task at a time 🚀
      </p>
    </div>
      </div>
  
      </>
  )
}

export default About

