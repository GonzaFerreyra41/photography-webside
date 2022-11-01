import React from 'react'

function Contact() {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h1 className='font-bold text-2xl text-center p-4'>Let`s work together</h1>
        <form className='max-w-[600px] m-auto'>
          <div className='grid grid-cols-2 gap-2' >
            <input className='bolder shadow-lg p-3' type="text" placeholder='Name'/>
            <input className='bolder shadow-lg p-3' type="email" placeholder='Email' />
          </div>
          <input className='bolder shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' />
          <textarea className='bolder shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message' ></textarea>
          <button className='border shadow-lg w-full mt-2 hover:scale-110 ease-in duration-300'>Submit</button>
        </form>
    </div>
  )
}

export default Contact