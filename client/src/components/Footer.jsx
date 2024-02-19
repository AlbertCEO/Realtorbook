import React from 'react'

function Footer() {

    const d = new Date();
let year = d.getFullYear();

  return (
    <div className='bg-slate-500 p-8'>
        <p className='text-white text-center'>All Right Reserved &#169; {year} | Website Developed By <span className='font-semibold'>Albert E. Imasuen</span></p>
        <p className='text-white text-center font-bold'>Hire Me: 226-927-9233</p>
        
        
    </div>
  )
}

export default Footer